import { Component,Input } from '@angular/core';
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

  constructor(public auth:AuthProvider) {
    console.log('Hello CommentComponent Component');
    this.text = 'Ihre Antwort:';
    this.comment ='';
  }
  addcomment(){
    if(this.comment.length<10)return alert("Ihr Kommentar ist zu kurz!");
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
  alert("Ihr Kommentar wurde gesendet") 
  this.comment="";

   console.log(data);
 }).catch(err=>{
   alert("Anonyme Benutzer können keine Kommentare posten");
   this.comment="";
   console.log(err);
 })
    //   console.log(c);
//alert(this.nid+this.comment);

  }

}