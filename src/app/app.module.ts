import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {TodoServices} from '../providers/todo-services';
import {WTodoPage} from '../pages/w-todo/w-todo';
import {NewWTPage} from '../pages/new-wt/new-wt'


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WTodoPage,
    NewWTPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WTodoPage,
    NewWTPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TodoServices]
})
export class AppModule {}
