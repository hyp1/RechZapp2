import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',  
})

export class ViewPage {
item:any;
nid:number;
title:string;
//rootPage:SearchPage;
comments:Observable<any>
//awri:AwriConnectProvider;
images:Array<any>;

  constructor(private httpClient:HttpClient,private actionSheetCtrl:ActionSheetController, public navCtrl: NavController, public navParams: NavParams,public awri:AuthProvider) {
  //this.awri=awri;
  this.item = navParams.get('item');
  this.nid =this.item.node.nid;
  this.title =this.item.node.title;
  //console.log(this.item.node);
  this.getComments(this.item.node.nid);
  this.images=this.item.node.field_image['und'];
  }
  
getComments(nid){
  
  this.comments =<any> this.httpClient.get(this.awri.HOST+'/drupalgap/comment.json?parameters[nid]='+nid+'&parameters[status]=1&pagesize=150')
      .map(res => res);
}


replaceString(str){
  return str.replace('<strong>','<br><strong>')
}

goBack(){
  //this.navCtrl.push(SearchPage);
  this.navCtrl.pop();
}

gotoLogin(){
  this.navCtrl.push(LoginPage);
}


shareLink(){
  if (this.awri.isBrowser()) {
    this.presentLinkSheet();
  } else {
    window['plugins'].socialsharing.share(this.title, null, null, this.awri.HOST+'/node/'+this.nid);
  }
}

presentLinkSheet() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Beitrag Teilen',
    buttons: [
      {
        text: 'Facebook',
        role: 'facebook',
        icon: 'logo-facebook',
        handler: () => {
          window.open('https://www.facebook.com/sharer/sharer.php?u='+this.awri.HOST+'/node/'+this.nid, '_system');      
        }
      },
      {
        text: 'Whatsapp',
        role: 'whatsapp',
        icon: 'logo-whatsapp',
        handler: () => {
          window.open('https://api.whatsapp.com/send?text='+this.title+' '+this.awri.HOST+'/node/'+this.nid, '_system');
        }
      },
      {
        text: 'LinkedIn',
        role: 'linkedin',
        icon: 'logo-linkedin',
        handler: () => {
          window.open('https://www.linkedin.com/shareArticle?mini=true&url='+this.awri.HOST+'/node/'+this.nid, '_system');
        }
      },
      {
        text: 'Twitter',
        role: 'twitter',
        icon: 'logo-twitter',
        handler: () => {
          window.open('https://twitter.com/intent/tweet?status='+this.title+' '+this.awri.HOST+'/node/'+this.nid, '_system');
        }
      },
      {
        text: 'Google+',
        role: 'google',
        icon: 'logo-google',
        handler: () => {
          window.open('https://plus.google.com/share?url='+this.awri.HOST+'/node/'+this.nid, '_system');
        }
      },
      {
        text: 'Email',
        role: 'email',
        icon: 'mail',
        handler: () => {
          window.open('mailto:?subject=Alles was Recht ist!&body='+this.title+' '+this.awri.HOST+'/node/'+this.nid, '_system');
    
        }
      },
      {
        text: 'Schliessen',
        role: 'cancel',
        handler: () => {
          console.log('Schliessen');
        }
      }
    ]
  });
  actionSheet.present();
}


}
