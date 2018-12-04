import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
//rootPage:SearchPage;
comments:Observable<any>
//awri:AwriConnectProvider;
images:Array<any>;

  constructor(private httpClient:HttpClient, public navCtrl: NavController, public navParams: NavParams,public awri:AuthProvider) {
  //this.awri=awri;
  this.item = navParams.get('item');
  this.nid =this.item.node.nid;
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


}
