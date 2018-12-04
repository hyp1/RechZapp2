import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../../pages/login/login';
import { BookmarksPage } from '../../pages/bookmarks/bookmarks';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
help:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,private awri:AuthProvider) {
  this.awri.get('help').then(data=>{
//    console.log(data);
    this.help=data;
//    console.log("HELP"+this.help);
  });

  }

  
ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
helpChanged(evt){
  //console.log(evt.help);
  this.awri.set('help',evt.help);
}


gotoLogin(){
  this.navCtrl.push(LoginPage);
}


gotoBookmarks(){
  this.navCtrl.push(BookmarksPage);
}

}
