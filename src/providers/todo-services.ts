import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { List, Item } from '../models/models'

const API = 'http://localhost:5000';

@Injectable()
export class TodoServices {

  public user;
  private OPTIONS: RequestOptions;

  constructor(public http: Http, public evt: Events, public storage: Storage) {
    console.log('Hello TodoServices Provider');
    storage.get('user')
    .then(user =>
      user
      ? this.http.get(`${API}/users/${user.id}`)
      : this.http.post(`${API}/users`, {})
     )
    .then(obs => obs.subscribe(data => {
        this.user = data.json()
        this.storage.set('user', this.user);

        let head = new Headers()
        head.append('Content-Type', 'application/json')
        head.append('Authorization', 'Bearer ' + this.user.token)

        this.OPTIONS = new RequestOptions({ headers: head })
        evt.publish("lists")
      }))
   }

  getLists(): Observable<List[]> {
    return this.http.get(`${API}/lists`, this.OPTIONS)
    .map(res => res.json().sort((a, b) =>
                                (new Date(b.date)).getTime() - (new Date(a.date)).getTime()))
    .catch(this.handleError)
  }

  getList(id: string): Observable<List> {
    let list

    return this.http.get(`${API}/lists/${id}`, this.OPTIONS)
    .flatMap(res => {
      list = res.json()
      list.items.sort((a, b) => (b.votes[0] + b.votes[1]) - (a.votes[0] + a.votes[1]))
      return Observable.forkJoin(list.items.map(item => this.getMyVote(list, item)))
    })
    .map(items => {
      list.items = items
      return list
    })
    .catch(this.handleError)
  }

  getMyVote(list: List, item: Item): Observable<Item> {
    return this.http.get(`${API}/lists/${list.id}/items/${item.id}/votes/me`, this.OPTIONS)
    .map(res => res.json())
    .map(res => {
      item.myVote = res
      return item
    })
    .catch(this.handleError)
  }

  addList(list: List): Observable<List> {
    return this.http.post(`${API}/lists`, list, this.OPTIONS)
    .map(res => res.json())
    .catch(this.handleError)
  }

  addItem(list: List, text: string): Observable<Item> {
    let item = { text }
    return this.http.post(`${API}/lists/${list.id}/items`, item, this.OPTIONS)
    .map(res => res.json())
    .catch(this.handleError)
  }

  vote(list: List, item: Item, v: number): Observable<number[]> {
    let vote = { vote: v }
    return (
      v === item.myVote
        ? this.http.delete(`${API}/lists/${list.id}/items/${item.id}/votes`, this.OPTIONS)
        : this.http.post(`${API}/lists/${list.id}/items/${item.id}/votes`, vote, this.OPTIONS)
    )
    .map(res => res.json())
    .catch(this.handleError)
  }

  private handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
