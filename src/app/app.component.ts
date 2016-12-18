import { Component } from '@angular/core';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
