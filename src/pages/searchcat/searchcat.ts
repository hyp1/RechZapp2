import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,Loading, } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ViewPage } from '../../pages/view/view';

/**
 * Generated class for the SearchcatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchcat',
  templateUrl: 'searchcat.html',
})
export class SearchcatPage {

  item:any;
  text:string;
  page:number;
  bereich:any;
  items:any;
  node:any;
  loader:Loading;


  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider,
    public alertCtrl:AlertController,public loadingCtrl: LoadingController) {
    this.page=0;
    this.items=[];
    this.item=navParams.get('item');
    this.text=this.item.keys;
    this.bereich=this.item.bereich;

    console.log(this.item);

    this.dosearch();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchcatPage');
  }

search(page:number){
  this.presentLoading("Suche in '"+this.bereich.name+"' nach '"+this.text+"', Bitte warten...");

  this.auth.searchCat(this.text,this.bereich.tid,page).then(data=>{
  this.page=page;
    //  console.log(data);
    this.items=data['nodes'];
    console.log(this.items);
  },err=>{
    this.dismissLoading();
  })

}

dosearch(){
this.search(0);  
}


itemSelected(item){
console.log(item);
this.auth.loadNode(item.node.nid).then(data=>{
  this.node=data;
  console.log(this.node);
  this.navCtrl.push(ViewPage, {
    item: {node:this.node}
  });
 // console.log(data);
});

}

presentLoading(txt) {
  this.loader = this.loadingCtrl.create({
    content: txt,
    duration: 3000
  });
  this.loader.present();
}

dismissLoading() {
  this.loader.dismiss();
}


}
