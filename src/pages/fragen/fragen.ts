import { Component } from '@angular/core';
import { NavController,Platform,AlertController } from 'ionic-angular';
//import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";


import { AuthProvider } from '../../providers/auth/auth';
import { ViewPage } from '../view/view';
import { LoginPage } from '../login/login';



import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

const bannerConfig: AdMobFreeBannerConfig = {
  // add your config here
  // for the sake of this example we will just use the test config
  isTesting: true,
  autoShow: true,
  //id:'ca-app-pub-7681642173883266~6820035049'
 };

@Component({
 selector: 'page-fragen',
 templateUrl: 'fragen.html'
})
export class FragenPage {
  
nodes: Array<any>;
auth:AuthProvider;
pages:number;
page:number;
help:boolean;
 constructor(public navCtrl: NavController,private admobFree: AdMobFree,
          private httpClient: HttpClient, private plt: Platform, private alertCtrl: AlertController, auth: AuthProvider) {

   this.auth=auth;
   this.auth.get('help').then(col=>{
    this.help=col;
 // console.log(this.help,'LOADED');
  }).catch(err=>{
    console.log(err);
  });

   this.nodes=[];
   /*
   console.log(auth);
   this.auth.connect.subscribe(data=>{
    alert("HOME"+data.name);
  });
  */
 this.page=0;
 this.pages=10;

 this.getFragen();

 this.admobFree.banner.config(bannerConfig);

 this.admobFree.banner.prepare()
   .then(() => {
     // banner Ad is ready
     // if we set autoShow to false, then we will need to call the show method here
     console.log("BannerConfig");
   })
   .catch(e => console.log(e));    

 }

 
 getFragen(){
  this.getFragenIndex(this.page,this.pages).then(dat=>{
    let d=<any>dat;
console.log(d);
    for(let i=0;i<d.length;i++){
      this.nodes.push(d[i]);
      this.page++;
    }
  });
}
 getFragenIndex(page,pages){
   return new Promise((resolve,reject)=>{
   this.httpClient.get(this.auth.HOST+'/'+this.auth.ENDPOINT+'/node.json?fields=nid,title,created,status&parameters[type]=rechtsfrage&parameters[status]=1&options[orderby][created]=desc&page='+page+'&pagesize='+pages).subscribe(data=>{
      resolve(data);
     },err=>{
       reject(err);
     });
    })
}


getFrage(nid){
  return new Promise((resolve,reject)=>{
   let headers = new HttpHeaders()
    .set('X-CSRF-TOKEN',<string>this.auth.token).set('Content-Type', 'application/json')
   
  let options = {
    headers: headers,
    withCredentials	: true,
  };
     this.httpClient.post(this.auth.HOST+'/'+this.auth.ENDPOINT+'/awri_services_resources/rechtsfrage',{nid:nid}, options).subscribe(data => {
        resolve(data);    
      },err=>{
        reject(err);
      });    
})
 

}


getComments(nid){
return new Promise((resolve,reject)=>{
 this.httpClient.get(this.auth.HOST+'/'+this.auth.ENDPOINT+'/comment.json?parameters[nid]='+nid+'&parameters[status]=1&pagesize=150').subscribe(data=>{
  resolve(data);
},err=>{
  reject(err);
});
})

}


frageSelected(n:any):void{
  //console.log(n)
  this.getFrage(n.nid).then(res=>{
   let item:any=res;
  //  console.log(item);
   this.navCtrl.push(ViewPage, { item: {node:JSON.parse(item)} });
  });
 }


doInfinite(infiniteScroll) {  
  setTimeout(() => {
this.getFragen();
//     console.log('Async operation has ended');
    infiniteScroll.complete();
  }, 500);
}

gotoLogin(){
  this.navCtrl.push(LoginPage);
}


 checkPlatform() {
  let alert = this.alertCtrl.create({
    title: 'Powered by',
    message: 'AWRI & Rechtsforum Schweiz',
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
