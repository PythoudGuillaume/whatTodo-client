import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { List } from '../../models/models'
import { TodoServices } from '../../providers/todo-services';


import {WTodoPage} from '../w-todo/w-todo';

/*
  Generated class for the NewWT page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-wt',
  templateUrl: 'new-wt.html'
})
export class NewWTPage {
  public list: List = new List;

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoServices: TodoServices, public evt :Events) {
    this.list.public = false;
  }

  addList() {
    this.todoServices.addList(this.list).subscribe((list) => {
      this.evt.publish("lists")
      console.log(list)
      this.navCtrl.push(WTodoPage, list)
      this.navCtrl.remove(1)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewWTPage');
  }
}
