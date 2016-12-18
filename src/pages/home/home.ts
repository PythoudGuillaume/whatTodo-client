import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { TodoServices } from '../../providers/todo-services';

import { List, Item } from '../../models/models';

import {WTodoPage} from '../w-todo/w-todo';
import {NewWTPage} from '../new-wt/new-wt'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public lists: List[]
  public wTodoPage = WTodoPage;
  public newWTPage = NewWTPage;

  constructor(public navCtrl: NavController, public todoServices: TodoServices, public evt: Events) {
    this.evt.subscribe("lists", () => this.load());

  }

  load(){
      this.todoServices.getLists().subscribe(data => { this.lists = data });
  }
}
