import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HttpClient,HttpHeaders } from '@angular/common/http';

import { AuthProvider } from '../../providers/auth/auth';
import { ViewPage } from '../../pages/view/view';

/**
 * Generated class for the BookmarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {
page:number;
pages:number;
nodes:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider) {
  this.page=navParams.get('page')||0;
//  console.log(this.page);

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');
    this.gotoPage(this.page); 
  }

gotoPage(nr){
  this.page=nr;
this.auth.getBookmarks(this.page).then(data=>{
let arr=<any>data;
this.pages=arr.view.pages;
this.nodes=arr.nodes;
console.log(this.nodes);
});
 
}

itemSelected(item: any): void {
console.log(item);
this.auth.loadNode(item.nid).then(data=>{
  this.navCtrl.push(ViewPage, { item: {node:data} });
})
  
}

}
