import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {WTodo, Choice } from '../models/models'
import 'rxjs/add/operator/map';

/*
  Generated class for the TodoServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoServices {
  public wTodos:WTodo[] = [{id: 1,title:"test", description:"voici une description", answer:[{title:'a1',vote:10},{title:"a2",vote:11}]},
                    {id: 2, title:"test2", description:"voici une description", answer:[{title:'a1',vote:10},{title:"a2",vote:11}]},
                    {id: 3, title:"test3", description:"voici une description", answer:[{title:'a1',vote:10},{title:"a2",vote:11}]}];
  private id = 3;

  constructor(public http: Http) {
    console.log('Hello TodoServices Provider');
    }

  getAllWTodo():WTodo[]{
    return this.wTodos;
  }

  getWTodo(id:number):WTodo{
    return this.wTodos.find(wT => wT.id == id);
  }

  addWTodo(wT:WTodo){
    this.id += 1;
    wT.id = this.id;
    this.wTodos.push(wT);
    return wT;
  }

  addAnswer(id:number, answer:string){
    let wTD = this.wTodos.find(wT => wT.id == id );
    if (wTD.answer == null) wTD.answer = [{title:answer, vote:0}];
    else wTD.answer.push({title:answer, vote:0});
    console.log(this.wTodos);
  }

  vote(wTId:number, ans:string){
    this.wTodos.find(wT => wT.id == wTId).answer.find(a => a.title == ans).vote+=1;
  }

  addTo(a, o){
    a = a.concat(o);
  }

}
