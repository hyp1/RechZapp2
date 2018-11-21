import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


declare var openFB;

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {
 // public  HOST='http://localhost/druponic';
//  public  ENDPOINT='api';
  
  public  HOST='https://stage.awri.ch';
  public  ENDPOINT='drupalgap';

  public loggedIn:boolean=false;

//  public  token:string;
  token: string
  public user: {
    uid: number;
    name: string;
    email: string;
    picture: string;
    roles: Array<any>;
    created: number;
  };
  /*
  token = new Observable<string>((observer: Observer<string>) => {
    this.http.get(this.HOST+'/?q=services/session/token', { responseType: 'text', withCredentials:true }).subscribe(token=>{
      console.log(token);
  return observer.next(token);     
    })

  });
*/

  connect = new Observable<any>((observer: Observer<any>) => {
    this.http.get(this.HOST+'/?q=services/session/token', { responseType: 'text', withCredentials:true }).subscribe(token=>{
   this.token=token;
      const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-CSRF-TOKEN', token)     
    const options = {
        headers: headers,     
        withCredentials:true
      };  
    this.http.post(this.HOST+'/'+this.ENDPOINT+'/system/connect.json',null,options).map(res=>res).subscribe(data => {
      
      let dat:any=data;
     // this.user=dat.user;
      this.user.uid=dat.user.uid;
      this.user.roles=dat.user.roles;
     // this.set('session_name',dat.session_name);
     // this.set('sessid',dat.sessid);      
     // this.session=dat.session_name+'='+dat.sessid;
      if(this.user.uid>0){
        this.user.name=dat.user.name;      
        this.user.email=dat.user.mail;  
        this.user.created=dat.user.created;  
        this.loggedIn=true;              
    }
      console.log(data);    
      console.log(this.user);
      return observer.next(this.user);  
    },err=>{
      return observer.next(this.user);  
    })     
   
    },err=>{
      console.log(err);
    })

    //openFB.init({appId:'126766317359254',scope:'email'});

    console.log(openFB);
  });


constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider2');
    this.user={
      uid:0,
      name:'Unbekannt',
      email:'',
      picture:'assets/imgs/anonymous.png',
      roles:[{0:'anonymous user'}],
      created:Date.now(),
    };
    
this.connect.subscribe(data=>{
  console.log("auth.connect:"+data.name);
});

}
  


  login(username:string,password:string){
  
    return new Promise((resolve,reject) => {
   
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-CSRF-TOKEN', <string>this.token); 
    
    let options = {
        headers: headers,
        withCredentials: true 
    }; 

    const user ={
      username:username,
      password:password
    }

      //console.log(headers);
      
        this.http.post(this.HOST+'/?q=drupalgap/user/login',user,options).map(res=>res).subscribe(data => {         
          console.log(data);
          let vars=<any>data;
         this.token=vars.token;
        //  this.session=vars.session_name+'='+vars.sessid;
      //    this.user=vars.user;
        //  this.set('session_name',vars.session_name);
  //        this.set('sessid',vars.token);

          this.user.uid=vars.user.uid;
          this.user.roles=vars.user.roles;
          if(this.user.uid>0){
            this.user.name=vars.user.name;
            this.user.email=vars.user.mail;
            this.loggedIn=true;    
//            if(vars.user.field_fbid['und'])this.user.fbid=vars.user.field_fbid['und'][0].value;
         //   if(this.user.fbid)this.user.picture="https://graph.facebook.com/"+this.user.fbid+"/picture";
            if(vars.user.picture!=0) this.user.picture=vars.user.picture.url;
         //   console.log(this.user.fbid,"FBID");
          }
         //   console.log(this.session);
          console.log(this.user.uid);
       return   resolve(this.user);
        }, err => {
     //     if(err.status==401)this.showError("Falscher Benutzername oder falsches Passwort!");
     //     else this.showError("Anmeldung fehlgeschlagen:"+err.status);
       return   reject(err);
        });      
  });

  }


  logout() {    
    return new Promise((resolve,reject) => {
      const headers = new HttpHeaders()
  .set('X-CSRF-TOKEN',<any>this.token).set('Content-Type', 'application/json')
  
  const options = {
  headers: headers,
  withCredentials	: true,
  };
  
  this.http.post(this.HOST+'/drupalgap/user/logout.json',null,options).subscribe(data => {
        console.log(data);
       // let res:any=data;
       this.user={
        uid:0,
        name:'Unbekannt',
        email:'',
        picture:'assets/imgs/anonymous.png',
        roles:[{0:'anonymous user'}],
        created:Date.now(),  
      }; 
      this.loggedIn=false;    
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  fblogin(){
    return new Promise((resolve,reject) => {
      console.log("awri.fblogin()");      
      openFB.login(
        function(response) {
          if (response.status === 'connected') {
         resolve(response);          
          }
          else if (response.error) { 
          reject(response.error);
           }
        },
        { scope: "email" });        
  });
 }

  fboauth(token:String){
    return new Promise((resolve,reject) => {
    let headers = new HttpHeaders()
    //.set('Content-Type', 'application/json')
    .set('X-CSRF-TOKEN', <string>this.token);  
    let options = {
        headers: headers,
        withCredentials: true 
    }; 
    let params ={
      access_token:token,
    }
  
      //console.log(headers);
        this.http.post(this.HOST+'/?q=drupalgap/fboauth/connect.json',params,options).map(res=>res).subscribe(data => {         
          console.log(data);
          let vars=<any>data;
          this.token=vars.token;
         // this.session=vars.session_name+'='+vars.sessid;
        //  this.user=vars.user;
          this.user.uid=vars.user.uid;
          this.user.roles=vars.user.roles;
          this.user.name=vars.user.name;
          if(vars.user.picture)this.user.picture=vars.user.picture.url;
          this.loggedIn=true;    
    //      if(vars.user.field_fbid['und'])this.user.fbid=vars.user.field_fbid['und'][0].value;
         // if(this.user.fbid)this.user.picture="https://graph.facebook.com/"+this.user.fbid+"/picture"
        //  console.log(this.user.fbid,"FBID");
       //   console.log(data.session_name+''+data.sessid);
          console.log(this);
          resolve(data);
        }, err => {
    //      console.log(err);
          reject(err);
        });      
   //     console.log(this.token);
  });  
  }
}
