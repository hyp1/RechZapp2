import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController,public awri:AuthProvider,public alertCtrl:AlertController) {    
    this.error="",
    this.text="",
    this.rootPage = <any>SearchPage; 
  //  this.items=<Array<any>>awri.getItems();
  }

  dosearch(): void {
    this.error="",
 //   console.log("SEARCH:"+this.text);    
   this.awri.search(this.text).then(data=>{
     this.items=<Array<any>>data;
    // console.log(this.items);
   },err=>{
    if(err.status==404)this.error="Die Suche nach '"+this.text+"' brachte leider keine Ergebnisse.";
//    this.awri.showError("Die Suche nach '"+this.text+"' brachte keine Ergebnisse...");
   });
  }

  search(text): void {
    this.error="",
    this.text=text;
      this.awri.search(this.text).then(data=>{
        this.items=<any>data;
       // console.log(this.items);
      },err=>{
        if(err.status==404)this.error="Die Suche nach '"+this.text+"' brachte leider keine Ergebnisse.";
       //this.awri.showError());
      });
     }


  itemSelected(item: any): void {

    this.navCtrl.push(ViewPage, { item: item });
  }
 

  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }
  
}