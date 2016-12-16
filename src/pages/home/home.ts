import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { TodoServices } from '../../providers/todo-services';

import {WTodo, Choice } from '../../models/models';

import {WTodoPage} from '../w-todo/w-todo';
import {NewWTPage} from '../new-wt/new-wt'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public wTodos:WTodo[];
  public wTodoPage = WTodoPage;
  public newWTPage = NewWTPage;

  constructor(public navCtrl: NavController, public todoServices: TodoServices ) {
    this.load();
  }

  load(){
    this.wTodos = this.todoServices.getAllWTodo();
  }


}
