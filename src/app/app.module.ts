import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TodoServices} from '../providers/todo-services';
import {WTodoPage} from '../pages/w-todo/w-todo';
import {NewWTPage} from '../pages/new-wt/new-wt'


@NgModule({
  declarations: [
    MyApp,
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
    HomePage,
    WTodoPage,
    NewWTPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TodoServices, Storage]
})
export class AppModule {}
