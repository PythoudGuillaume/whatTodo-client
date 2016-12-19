import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';

import { TodoServices } from '../../providers/todo-services';

import { List } from '../../models/models';

import { ListPage } from '../list/list';
import { NewListPage } from '../new-list/new-list'
import { LinkPage } from '../link/link'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public lists: List[]
  public pins: List[]
  public listPage = ListPage
  public newListPage = NewListPage
  public linkPage = LinkPage

  constructor(public navCtrl: NavController,
              public todoServices: TodoServices,
              public evt: Events) {
    this.evt.subscribe("lists", () => this.load());
  }

  load() {
    this.todoServices.getPins().subscribe(data => {
      this.pins = data
    });
    this.todoServices.getLists().subscribe(data => {
      this.lists = data.filter(list => !this.todoServices.user.pins.includes(list.id))
    });
  }
}
