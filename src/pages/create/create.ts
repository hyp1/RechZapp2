import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UploadComponent } from '../../components/upload/upload';
import { LoginPage } from '../../pages/login/login';

  
@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})

export class CreatePage {
  todo = {
    title:'',
    description:'',
}
  kanton:String;
  kantone:Array<any>;
  file:String;
  files:Array<any>;

  awri:AuthProvider;
  upload:UploadComponent;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, 
              public navParams: NavParams,awri:AuthProvider,upload:UploadComponent) {
  this.awri=awri;
  this.upload=upload;
  this.kanton="Keine Angabe";
  this.files=[];
  
  awri.getKantons().then(data=>{
    this.kantone=<any>data;
    
  }).catch(err=>{
    console.log(err);
   // this.awri.showError(err);
  });

  this.awri.get('kanton').then(data=>{
    this.kanton=data;
  },err=>{
    console.log(err);
  });

  }

  
  sendFrage() {
    let tid=66;
    this.kantone.map(k => {
      if(k.name == this.kanton)tid=k.tid;
    });  
    
    for(var i=0;i<this.upload.MAX_UPLOADS;i++){
        let input:any=document.getElementById('images'+i);
        console.log(input);
    }
  let fils=this.upload.getFiles();
  console.log(fils);
    const data = {
      "body": this.todo.description,
      "anonym":"1",
      "field_kanton":tid,
   //   "fbid": this.awri.user.fbid,  
      "field_image":{"und":fils }
  }   
  
  this.awri.createFrage(data).then(dat=>{
   
      console.log(dat);
      let alert = this.alertCtrl.create({
        title: 'Rechtsfrage gesendet',
        subTitle: 'Ihre Rechtsfrage wurde erfolgreich an AWRI gesendet.',
        buttons: ['Weiter']
      });
      alert.present();
      this.removeAll();
  }).catch(err=>{
alert("Fehler bei erstellen der Frage")
    // this.awri.showError(err);
  });

  }
  
  changeListener($event) : void {
    this.file = $event.target.files[0];
   // console.log(this.file);
  }

  removePreview(nr) : void {
   // var filefield:any = document.getElementById('filefield'+nr);
    var previewfield:any = document.getElementById(this.upload.fieldname+''+nr);
   if(previewfield) previewfield.src="";
    //console.log(filefield);
   // filefield.style="display: block !important";
   }
   

  removeAll() : void {
    this.files=[];
  this.upload.resetFiles();
  this.todo.description="";
  }

  /*
  uploadFile(id) : void {    
    var input:any = document.getElementById('image'+id);
    var dataURI=input.src;
    dataURI=dataURI.substring(dataURI.indexOf(',')+1,dataURI.length);     
    var ext=input.name.split('.').pop();
    var filedata={
      "filesize":dataURI.length,
      "filename": input.name,
      "filemime":"image/"+ext,
       "filepath":'public://attachments/'+input.name,
       "status": 0,
       "file": dataURI 
         };              
//    console.log(filedata);
    this.awri.uploadFile(filedata).then(data=>{
      let dat:any=data;
      var file:any= {fid:dat.fid};
   //   console.log(file);
      this.files.push(file);

    //  console.log(data);
    }).catch(err=>{
      this.awri.showError(err);
    });
  }


*/

  selectKanton2(evt){
    this.kanton=evt
          
    this.awri.set('kanton',this.kanton).then(data=>{
      console.log(data);
    }
      ,err=>{
        console.error(err);
      });
    
  }

  testFiles(){
  let f=this.upload.getFiles();
console.log(f);
  }

  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }

}
