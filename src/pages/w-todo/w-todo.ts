import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { TodoServices } from '../../providers/todo-services';

import {WTodo, Choice } from '../../models/models';



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
  public wTodo:WTodo;
  public answer = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public todosServices: TodoServices) {
    this.wTodo = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log("wtodo page");
  }

  addAnswer(){
    console.log(this.answer);
    this.todosServices.addAnswer(this.wTodo.id, this.answer);
    this.wTodo = this.todosServices.getWTodo(this.wTodo.id);
    this.answer ='';
  }

  vote(answer:string){
    this.todosServices.vote(this.wTodo.id, answer);
  }

}
