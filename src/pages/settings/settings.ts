import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../../pages/login/login';
import { BookmarksPage } from '../../pages/bookmarks/bookmarks';
import { AdminPage } from '../../pages/admin/admin';

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
public help:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public awri:AuthProvider) {
    alert("Constr")
  this.awri.get('help').then(data=>{
    console.log(data);
    this.help=data;
    console.log("HELP"+this.help);
  });

  }
  
  /*
ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  */

  public helpChanged(evt:any){
  console.log(evt);
  this.awri.set('help',evt.help).then(h=>{
    this.help=h;
    alert(h)
  });
}


gotoLogin(){
  this.navCtrl.push(LoginPage);
}


gotoBookmarks(){
  this.navCtrl.push(BookmarksPage);
}

gotoAdmin(){
  this.navCtrl.push(AdminPage);
}

}
