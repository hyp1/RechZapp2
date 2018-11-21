import { Component } from '@angular/core';
import { NavController,Platform,AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";


import { AuthProvider } from '../../providers/auth/auth';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {

 users: Observable<any>;
auth:AuthProvider;
 constructor(public navCtrl: NavController, private httpClient: HttpClient, private plt: Platform, private alertCtrl: AlertController, auth: AuthProvider) {
   this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
   .map(res => res['results']);

   this.auth=auth;
   /*
   console.log(auth);
   this.auth.connect.subscribe(data=>{
    alert("HOME"+data.name);
  });
  */
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
