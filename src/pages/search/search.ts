import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController,Loading } from 'ionic-angular';
import "rxjs/add/operator/map";
import { ViewPage } from '../../pages/view/view';
import { LoginPage } from '../../pages/login/login';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  text: any;
  items: Array<any>;
  //awri: AwriConnectProvider;
  rootPage:SearchPage;
  error:String;
  loader:Loading;
  help:boolean;
  constructor(public navCtrl: NavController,public awri:AuthProvider,public alertCtrl:AlertController,public loadingCtrl: LoadingController) {    
    this.error="",
    this.text="",
    this.rootPage = <any>SearchPage; 
  this.awri.get('help').then(col=>{
    this.help=col;

  }).catch(err=>{
    console.log(err);
  }); 

}


  dosearch(): void {
    this.search(this.text);
    }
    
  search(text): void {
    this.presentLoading("Suche nach '"+text+"', Bitte warten...");
    this.error="",
    this.text=text;
      this.awri.search(this.text).then(data=>{
        this.items=<any>data;
       // console.log(this.items);
       this.loader.dismiss();
      },err=>{
        if(err.status==404)this.error="Die Suche nach '"+this.text+"' brachte leider keine Ergebnisse.";
       //this.awri.showError());
       this.loader.dismiss();

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
  
}