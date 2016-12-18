import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { TodoServices } from '../../providers/todo-services';

import { List, Item } from '../../models/models';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public list: List;
  public text: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public todosServices: TodoServices, public evt: Events) {
    this.list = this.navParams.data;
    this.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  load() {
    this.todosServices.getList(this.list.id)
    .subscribe(data => {this.list = data});
  }

  isPinned() {
    return this.todosServices.user.pins.includes(this.list.id)
  }

  icon() {
    return this.isPinned()
    ? "star"
    : "star-outline"
  }

  pinList() {
    (
      this.isPinned()
      ? this.todosServices.removePin(this.list)
      : this.todosServices.addPin(this.list)
    )
    .subscribe(() => this.load());
  }

  color(item: Item, vote: number) {
    return (item.myVote === vote)
      ? vote === -1 ? "danger" : "secondary"
      : "light"
  }

  addItem() {
    this.todosServices.addItem(this.list, this.text)
    .subscribe(() => this.load());
    this.text ='';
  }

  vote(item: Item, vote: number) {
    this.todosServices.vote(this.list, item, vote)
    .subscribe(() => this.load());
  }

}
