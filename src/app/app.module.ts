import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { CategoriesProvider } from '../providers/categories/categories';
import { HttpClientModule } from '@angular/common/http';
import { ConceptsPage } from '../pages/concepts/concepts';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { AddcoursePage } from '../pages/addcourse/addcourse';
import { ModifycoursePage } from '../pages/modifycourse/modifycourse';


@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    ConceptsPage,
    CoursedetailPage,
    WelcomePage,
    AddcoursePage,
    ModifycoursePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    ConceptsPage,
    CoursedetailPage,
    WelcomePage,
    AddcoursePage,
    ModifycoursePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriesProvider
  ]
})
export class AppModule {}
