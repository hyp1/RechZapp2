import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterPage } from '../../pages/register/register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private username:string;
  private password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public awri:AuthProvider) {
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    //alert('username: ' + this.username);
    this.awri.login(this.username,this.password).then(data=>{      
      console.log(data);
    }).catch(err=>{
      this.username="";
      this.password="";
        console.log(err);
    });    
  }

  gotoRegister(){
    this.navCtrl.push(RegisterPage);
  }
  
  fblogin(){
    this.awri.fblogin().then(data=>{
    let dat:any=data;
    console.log(data);
      this.awri.fboauth(dat.authResponse.accessToken).then(res=>{
//        this.username=<String>this.awri.username;
        console.log(res);   
      });
    })
  };

logout(){
  this.awri.logout().then(data=>{      
    console.log(data);
  }).catch(err=>{
      console.log(err);
  });   
};

}
