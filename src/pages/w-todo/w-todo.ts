import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { TodoServices } from '../../providers/todo-services';

import { List } from '../../models/models';



/*
  Generated class for the WTodo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-w-todo',
  templateUrl: 'w-todo.html'
})
export class WTodoPage {
  public list: List;
  public text: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public todosServices: TodoServices, public evt: Events) {
    this.list = this.navParams.data;
    this.load();
    console.log(this.list);
  }


  ionViewDidLoad() {
    console.log("wtodo page");
  }

  load() {
    this.todosServices.getList(this.list.id)
    .subscribe(data => {this.list = data});
  }
  addItem() {
    console.log(this.text);
    this.todosServices.addItem(this.list.id, this.text)
    .subscribe(() => this.load());
    this.text ='';
  }

  vote(item: string, vote: number) {
    this.todosServices.vote(this.list.id, item, vote)
    .subscribe(() => this.load());
  }

}
