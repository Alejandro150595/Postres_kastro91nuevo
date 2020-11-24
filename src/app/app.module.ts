import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { MediaPage } from '../pages/media/media';
import { ContactPage } from '../pages/contact/contact';
import { Home2Page } from '../pages/home2/home2';
import { Media2Page } from '../pages/media2/media2';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    MediaPage,
    ContactPage,
    Home2Page,
    Media2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    MediaPage,
    ContactPage,
    Home2Page,
    Media2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
