import { Component,Input} from '@angular/core';
import { AlertController,LoadingController,Loading } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the CommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comment',
  templateUrl: 'comment.html'
})
export class CommentComponent {
  @Input() nid: string;
 
  text: string;
  comment:string;
  sent: string;

  constructor(public auth:AuthProvider,public alertCtrl:AlertController) {
    this.text = 'Ihre Antwort:';
    this.comment ='';
    this.sent="Ihre Antwort wird erst erscheinen, wenn sie durch einen Admin freigeschalten wurde.";
  }
  addcomment(){
    if(this.comment.length<10)return this.presentMessage("Ihre Antwort ist zu kurz!");
    let c={
      "nid":this.nid,
    //  "status":0,
      "subject":this.auth.user.name,
      "comment_body":{
        "und":[{
          "value":this.comment
        }]
      }
    }    
 this.auth.addComment(c).then(data=>{
  this.presentMessage("Ihr Kommentar wurde gesendet") 
  this.comment="";

   console.log(data);
 }).catch(err=>{
   this.presentMessage("Anonyme Benutzer können nicht auf Rechtesfragen antworten.");
   this.comment="";
   console.log(err);
 })
    //   console.log(c);
//alert(this.nid+this.comment);

  }

    
  presentMessage(txt) {
    let alert = this.alertCtrl.create({
      title: 'Antwort senden',
      subTitle: txt,
      buttons: ['OK']
    });
    alert.present();
  }

}