import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoServices } from '../providers/todo-services';
import { ListPage } from '../pages/list/list';
import { NewListPage } from '../pages/new-list/new-list'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewListPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TodoServices,
    Storage
  ]
})
export class AppModule {}
