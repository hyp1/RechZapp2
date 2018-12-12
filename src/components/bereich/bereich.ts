import { Component,Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the BereichComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bereich',
  templateUrl: 'bereich.html'
})
export class BereichComponent {

  text: string;
  bereiche:Array<any>;

@Input() nid:number;
@Input() tid:number;

  constructor(public auth:AuthProvider,public http:HttpClient) {
    console.log('Hello BereichComponent Component');
    this.text = 'Hello World';
    this.getBereiche().then(dat=>{
      this.bereiche=<any>dat;
   //   console.log(this.bereiche);
    //  alert(this.nid+"<--->"+this.tid);
    })
  }
  

  getBereiche(){
    return new Promise((resolve,reject) => {
      const headers = new HttpHeaders().set('X-CSRF-TOKEN',<any>this.auth.token);    
      const options = {
        headers: headers,
        withCredentials: true
      };
        this.http.get(this.auth.HOST+'/'+this.auth.ENDPOINT+'/taxonomy_term?page=0&fields=vid,name&&parameters[vid]=4&pagesize=27&options[orderby][weight]=asc',options).subscribe(data=> {
          resolve(data);     
        },err=>{
          reject(err);
        })
    })
  }
  
  selectBereich(evt){
    console.log(evt);
    this.updateNode();
  }

  updateNode(){
    return new Promise((resolve,reject) => {
      const headers = new HttpHeaders().set('X-CSRF-TOKEN',<any>this.auth.token);    
      const options = {
        headers: headers,
        withCredentials: true
      };
      let node={
        node:{
          nid:this.nid,
          field_bereiche:{und:{tid:this.tid}}
        }
      }
      console.log(node); 
      this.http.put(this.auth.HOST+'/'+this.auth.ENDPOINT+'/node/'+this.nid,node,options).subscribe(data=> {
        console.log(data);
          resolve(data);     
        },err=>{
          reject(err);
        })
    })

  }

}
