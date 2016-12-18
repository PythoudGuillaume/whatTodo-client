import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { List } from '../../models/models'
import { TodoServices } from '../../providers/todo-services';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-new-list',
  templateUrl: 'new-list.html'
})
export class NewListPage {
  public list: List = new List;

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoServices: TodoServices, public evt :Events) {
    this.list.public = false;
  }

  addList() {
    this.todoServices.addList(this.list)
    .subscribe((list) => {
      this.evt.publish("lists")
      this.todoServices.addPin(list)
      .subscribe(() => {
        this.navCtrl.push(ListPage, list)
        this.navCtrl.remove(1)
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewListPage');
  }
}
