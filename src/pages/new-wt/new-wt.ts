import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TodoServices } from '../../providers/todo-services';

import {WTodo, Choice } from '../../models/models';

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
  public newWT:WTodo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoServices: TodoServices) {
    this.newWT = new WTodo;
  }


  addWT(){
    let createdWT = this.todoServices.addWTodo(this.newWT);
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewWTPage');
  }

}
