import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController,Loading, NavParams } from 'ionic-angular';
import "rxjs/add/operator/map";
import { ViewPage } from '../../pages/view/view';
import { LoginPage } from '../../pages/login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { BannersComponent } from '../../components/banners/banners';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})


export class SearchPage {
  text: string;
  items: Array<any>;
  //awri: AwriConnectProvider;
  rootPage:SearchPage;
  error:String;
  loader:Loading;
  help:boolean;
  page:number;
  constructor(public navCtrl: NavController,public awri:AuthProvider,public alertCtrl:AlertController,public loadingCtrl: LoadingController,
    public navParams: NavParams) { 
    this.items=[]   
    this.error="",
    this.text=navParams.get('text');
    this.page=0;
   // console.log(this.text);
    if(this.text!==undefined)this.dosearch();
    this.rootPage = <any>SearchPage; 
  this.awri.get('help').then(col=>{
    this.help=col;
  }).catch(err=>{
    console.log(err);
  }); 

}
  dosearch(): void {
    this.search(this.text,this.page);
    }
    

  search(text:string,page:number=0): void {
    this.presentLoading("Suche nach '"+text+"', Bitte warten...");
    this.error="",
    this.text=text;
    //alert(page);
      this.awri.search(this.text,page).then(data=>{
        this.page=page;
        this.items=<any>data;
     //   console.log(this.items);
    //  this.dismissLoading();
       

      },err=>{
        if(err.status==404)this.error="Die Suche nach '"+this.text+"' brachte leider keine Ergebnisse.";
       //this.awri.showError());
      this.dismissLoading();

      });
     }

  itemSelected(item: any): void {

    this.navCtrl.push(ViewPage, { item: item });
  }
 

  gotoLogin(){
    this.navCtrl.push(LoginPage);
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