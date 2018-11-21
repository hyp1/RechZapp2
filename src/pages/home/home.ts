import { Component } from '@angular/core';
import { NavController,Platform,AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";


import { AuthProvider } from '../../providers/auth/auth';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

const bannerConfig: AdMobFreeBannerConfig = {
  // add your config here
  // for the sake of this example we will just use the test config
  isTesting: true,
  autoShow: true,
  //id:'ca-app-pub-7681642173883266~6820035049'
 };

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {

 users: Observable<any>;
auth:AuthProvider;
 constructor(public navCtrl: NavController, private admobFree: AdMobFree,private httpClient: HttpClient, private plt: Platform, private alertCtrl: AlertController, auth: AuthProvider) {
   this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
   .map(res => res['results']);

   this.auth=auth;
   /*
   console.log(auth);
   this.auth.connect.subscribe(data=>{
    alert("HOME"+data.name);
  });
  */

 this.admobFree.banner.config(bannerConfig);

 this.admobFree.banner.prepare()
   .then(() => {
     // banner Ad is ready
     // if we set autoShow to false, then we will need to call the show method here
     console.log("BannerConfig");
   })
   .catch(e => console.log(e));    


 }
 

 checkPlatform() {
  let alert = this.alertCtrl.create({
    title: 'Platform',
    message: 'You are running on: ' + this.plt.platforms(),
    buttons: ['OK']
  });
  alert.present();

  if (this.plt.is('cordova')) {
    // Do Cordova stuff
  } else {
    // Do stuff inside the regular browser
  }
}

}
