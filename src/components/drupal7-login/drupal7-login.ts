import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../../pages/register/register';

/**
 * Generated class for the Drupal7LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'drupal7-login',
  templateUrl: 'drupal7-login.html'
})


export class Drupal7LoginComponent {  

username:string;
password:string;
  constructor(public auth:AuthProvider,public navCtrl:NavController) {
    console.log('Hello Drupal7LoginComponent Component');    

    
    /*
    this.auth.connect.subscribe(user=>{
      this.text=user.name;
      console.log(user);
    })  
    */
  }

  logout(){
    this.auth.logout().then(data=>{
      console.log(data);
    }).catch(err=>{
      console.log(err);
    });
  }

  dologin(){
    //alert('username: ' + this.username);
    this.auth.login(this.username,this.password).then(data=>{      
      console.log(data);
    }).catch(err=>{
      this.username="";
      this.password="";
        console.log(err);
    });    
  }

  fblogin(){
    this.auth.fblogin().then(data=>{
    let dat:any=data;
    console.log(data);
      this.auth.fboauth(dat.authResponse.accessToken).then(res=>{
        console.log(res);   
      },err=>{
        console.log(err);
      });
    })
  };
  
  gotoRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
