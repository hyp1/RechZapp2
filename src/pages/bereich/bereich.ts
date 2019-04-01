import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { ViewPage } from '../../pages/view/view';
import { BannersComponent } from '../../components/banners/banners';
import { SearchcatPage } from '../searchcat/searchcat';

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
  page:number;

text2:string;

bereich:{tid:number,
name:string,
icon:string};

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public auth:AuthProvider) {
this.page=0;
this.bereich=navParams.get("bereich");
}

  ionViewDidLoad() {
    this.getNodesByTid();
  }

  getNodesByTid(){
    return new Promise((resolve,reject)=>{
      let headers = new HttpHeaders()
      .set('X-CSRF-TOKEN',<string>this.auth.token).set('Content-Type', 'application/json')
     
    let options = {
      headers: headers,
      withCredentials	: true,
      pager	: true,
      tid	: this.bereich.tid,
    };

    
      this.http.post(this.auth.HOST+'/'+this.auth.ENDPOINT+'/taxonomy_term/selectNodes?page='+this.page,options).subscribe(data=>{
      //  console.log(data);
        this.nodes=<any>data;
         resolve(data);
        },err=>{
          reject(err);
        });
       })
  }


  gotoDetails(node){
    this.navCtrl.push(ViewPage, { item: {node:node} });
  }

next(){
this.page++;
//alert(this.page);
this.getNodesByTid();
}

prev(){
  this.page--;
  this.getNodesByTid();
}

dosearch(){
//  alert(this.text2);

this.navCtrl.push(SearchcatPage, { item: {bereich:this.bereich,keys:this.text2} } );
  /*
  this.nodes=[];
alert(this.bereich.tid+':'+this.text);
let headers = new HttpHeaders()
.set('X-CSRF-TOKEN',<string>this.auth.token).set('Content-Type', 'application/json')

let options = {
headers: headers,
withCredentials	: true,
pager	: true,
tid	: this.bereich.tid,
};

this.http.get(this.auth.HOST+'/search/cat/json/'+ this.bereich.tid+'?keys='+this.text+'&page='+this.page,options).subscribe(data=>{
  console.log(data);
  let n=<any>data['nodes'];
n.forEach(element => {
  this.nodes.push(element.node);
 console.log(element); 
});
  console.log(this.nodes);
   //console.log(data);
  },err=>{
    console.log(err);
  });

*/
};

}
