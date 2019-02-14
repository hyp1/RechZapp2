import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
pet:string;
help:boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider) {
    this.auth.get('help').then(col => {
      this.help = col;
    }).catch(err => {
      this.help = true;
    });
  }

gotoLogin(){
this.navCtrl.push(LoginPage);
};

}
