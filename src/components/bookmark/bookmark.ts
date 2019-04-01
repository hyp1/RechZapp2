import { Component,Input } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the BookmarkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bookmark',
  templateUrl: 'bookmark.html'
})
export class BookmarkComponent {
  @Input('nid') _nid: string;

  text: string;
color:string;
count:number;
isBookMark:boolean;
  constructor(public auth:AuthProvider,private alertCtrl:AlertController) {
    this.isBookMark=false;
this.color="primary";
this.count=0;
    //  console.log('Hello BookmarkComponent Component'+this._nid);
  //  this.text = 'Hello World'+this._nid;
  }

  @Input()
 
  set nid(_nid: string) {

this.auth.isFlagged(_nid,'bookmarks').then(flag=>{
  this.isBookMark=<boolean>flag;
  if(this.isBookMark)this.color="danger";
  else this.color="primary";
  console.log(this.color);
});

this.auth.getFlagCount(_nid,'bookmarks').then(data=>{
  console.log(data);
  this.count=<number>data;
}).catch(data=>{
  this.count=<number>data;
  console.log(data);
})
    this._nid = (_nid && _nid.trim()) || '<no nid set>';
  }
 
  get nid(): string { return this._nid; }


  
  setBookmark(){
    if(this.auth.isInRole('anonymous user')){
      let alert = this.alertCtrl.create({
        title: 'Bitte melden sie sich an!',
        subTitle: 'Nur auf AWRI angemeldete Benutzer können Lesezeichen setzen.',
        buttons: ['Weiter']
      });
      alert.present();
      return;
    }
      let flag=this.isBookMark?"unflag":"flag";
this.auth.setFlag(this._nid,'bookmarks',flag).then(data=>{
  this.isBookMark=<boolean>data;
  if(this.isBookMark)this.color="danger";
  else this.color="primary";

},err=>{
  console.log(err);
  let alert = this.alertCtrl.create({
    title: 'Bitte melden sie sich an!',
    subTitle: 'Nur auf AWRI angemeldete Benutzer können Lesezeichen setzen.',
    buttons: ['Weiter']
  });
  alert.present();
  return;
});


  }
}
