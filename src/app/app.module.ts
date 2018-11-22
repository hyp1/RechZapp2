import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';

import {AsyncPromisePipeComponent} from '../components/async-promise-pipe/async-promise-pipe'
import {AsyncObservablePipeComponent} from '../components/async-observable-pipe/async-observable-pipe'
import {Drupal7LoginComponent} from '../components/drupal7-login/drupal7-login'
import { AdMobFree } from '@ionic-native/admob-free';

import { Camera } from '@ionic-native/camera';
import { UploadComponent } from '../components/upload/upload';

@NgModule({
 declarations: [
   MyApp,
   HomePage,
   ListPage,
   AsyncPromisePipeComponent,
   AsyncObservablePipeComponent,
   Drupal7LoginComponent,
   UploadComponent  
 ],

 imports: [
   BrowserModule,
   IonicModule.forRoot(MyApp),
   HttpClientModule
 ],

 bootstrap: [IonicApp],
 entryComponents: [
   MyApp,
   HomePage,
   ListPage,
   AsyncPromisePipeComponent,
   AsyncObservablePipeComponent,
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
 ]
})
export class AppModule {}