import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';
import { CreatePage } from '../pages/create/create';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { HelpPage } from '../pages/help/help';
import { ViewPage } from '../pages/view/view';
import { SearchPage } from '../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';


import {Drupal7LoginComponent} from '../components/drupal7-login/drupal7-login'
import { AdMobFree } from '@ionic-native/admob-free';

import { Camera } from '@ionic-native/camera';
import { UploadComponent } from '../components/upload/upload';
import { IonicStorageModule } from '@ionic/storage';
import { CommentComponent } from '../components/comment/comment';

  
@NgModule({
 declarations: [
   MyApp,
   HomePage,
   ListPage,
   SettingsPage,
   CreatePage,
   LoginPage,
   RegisterPage,
   HelpPage,
   ViewPage,
   SearchPage,
   Drupal7LoginComponent,
   UploadComponent,
   CommentComponent  
 ],

 imports: [
   BrowserModule,
   IonicModule.forRoot(MyApp),
   IonicStorageModule.forRoot(),
   HttpClientModule
 ],

 bootstrap: [IonicApp],
 entryComponents: [
   MyApp,
   HomePage,
   ListPage,
   SettingsPage,
   CreatePage,
   LoginPage,
   RegisterPage,
   HelpPage,
   ViewPage,
   SearchPage,
   Drupal7LoginComponent,
   
 ],

 providers: [
   StatusBar,
   SplashScreen,
   {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AdMobFree,
    UploadComponent,
    Camera,
    CommentComponent
 ]
})

export class AppModule {}