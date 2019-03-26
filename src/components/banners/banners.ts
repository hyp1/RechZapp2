import { Component } from '@angular/core';
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

  image:string;
  link:string;

  constructor(private httpClient:HttpClient) {
    console.log('Hello BannersComponent Component');
  
    this.httpClient.get('https://stage.awri.ch/banner/json').map(res => res).subscribe(data => {
      let dat=<any>data;
      // console.log(data);
       this.link=<any>dat['link'];
       this.image=<any>dat['image'];
   });

  }

}
