import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the BannersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'banners',
  templateUrl: 'banners.html'
})
export class BannersComponent {
  @Input() name: string;
  @Input() my: string;
  image:string;
  link:string;
  constructor(private httpClient:HttpClient) {
//alert(this.name);
   // console.log('Hello BannersComponent Component:'+this.name);

    
    this.httpClient.get('https://stage.awri.ch/banner/json').map(res => res).subscribe(data => {
      let dat=<any>data;
      // console.log(data);
       this.link=<any>dat['link'];
       this.image=<any>dat['image'];
       //alert(this.image);
   });

  }

  getBanner(style:string){
    this.httpClient.get('https://stage.awri.ch/banner/json/'+style).map(res => res).subscribe(data => {
      let dat=<any>data;
      // console.log(data);
       this.link=<any>dat['link'];
       this.image=<any>dat['image'];
       //alert(this.image);
   });
  }



}
