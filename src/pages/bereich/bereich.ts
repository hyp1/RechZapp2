import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { ViewPage } from '../../pages/view/view';
/**
 * Generated class for the BereichPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bereich',
  templateUrl: 'bereich.html',
})
export class BereichPage {

  tid:number;
  nodes:Array<any>;
  
bereich:{tid:number,
name:string,
icon:string};
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public auth:AuthProvider) {
this.bereich=navParams.get("bereich");
console.log(this.bereich);
this.getNodesByTid();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BereichPage');
  }


  
  getNodesByTid(){
    return new Promise((resolve,reject)=>{
      let headers = new HttpHeaders()
      .set('X-CSRF-TOKEN',<string>this.auth.token).set('Content-Type', 'application/json')
     
    let options = {
      headers: headers,
      withCredentials	: true,
      pager	: false,
      tid	: this.bereich.tid,
    };

      this.http.post(this.auth.HOST+'/'+this.auth.ENDPOINT+'/taxonomy_term/selectNodes',options).subscribe(data=>{
        console.log(data);
        this.nodes=<any>data;
         resolve(data);
        },err=>{
          reject(err);
        });
       })
  }

  gotoDetails(node){
    console.log(node);
    this.navCtrl.push(ViewPage, { item: {node:node} });
  }

}
