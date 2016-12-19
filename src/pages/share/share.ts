import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { List } from '../../models/models';

@Component({
  selector: 'page-share',
  templateUrl: 'share.html'
})
export class SharePage {
  public list: List
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

}
