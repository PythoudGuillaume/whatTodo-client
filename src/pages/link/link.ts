import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TodoServices } from '../../providers/todo-services';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-link',
  templateUrl: 'link.html'
})
export class LinkPage {
  public id: string = ""

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public todoServices: TodoServices,
              private alertCtrl: AlertController
             ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinkPage');
  }

  joinList() {
    this.todoServices.getList(this.id)
    .subscribe(list => {
      this.todoServices.addPin(list)
      .subscribe(() => {
        this. id = ""
        this.navCtrl.push(ListPage, list)
        this.navCtrl.remove(1)
      })
    }, error => {
      this.alertCtrl.create({
        title: "List not found",
        subTitle: "No list with this ID",
        buttons: ["OK"]
      }).present()
    })
  }
}
