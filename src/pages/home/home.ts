import { Component } from '@angular/core';
import { NavController, Platform, AlertController, ActionSheetController,Slides } from 'ionic-angular';
//import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";

import { UploadComponent } from '../../components/upload/upload';

import { AuthProvider } from '../../providers/auth/auth';
import { ViewPage } from '../../pages/view/view';
import { LoginPage } from '../../pages/login/login';
import { BereichPage } from '../../pages/bereich/bereich';
import { SearchPage } from '../../pages/search/search';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

const bannerConfig: AdMobFreeBannerConfig = {
  // add your config here
  // for the sake of this example we will just use the test config
  isTesting: true,
  autoShow: true,
  //id:'ca-app-pub-7681642173883266~6820035049'
};

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nodes: Array<any>;
  auth: AuthProvider;
  upload: UploadComponent;
  pages: number;
  page: number;
  help: boolean;

  bereiche: Array<any>;
  stats:any;
  search:string;
  random: any;
  private urlParameters: Array<any> = [];
  mySlideOptions: any;

  constructor(public navCtrl: NavController, upload: UploadComponent, private admobFree: AdMobFree,
    private httpClient: HttpClient, private plt: Platform, private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController, auth: AuthProvider) {
    this.auth = auth;
    this.help = false;
    this.mySlideOptions = {
      pager:true
    };    
    auth.getStats().then(s=>{
let stats=JSON.parse(<any>s); 
    this.bereiche = [
      {
        name: "Arbeit",
        tid: 93,
        icon: "construct",
        image: "assets/imgs/front/arbeit.jpg",
        count:stats.t_arbeit
      },
      {
        name: "Behörden/Schulen",
        tid: 99,
        icon: "briefcase",
        image: "assets/imgs/front/schule.jpg",
        count:stats.t_schule

      },
      {
        name: "Familie",
        tid: 98,
        icon: "contacts",
        image: "assets/imgs/front/familie.jpg",
        count:stats.t_familie

      },

      {
        name: "Gesundheit",
        tid: 97,
        icon: "medkit",
        image: "assets/imgs/front/gesundheit.jpg",
        count:stats.t_gesundheit

      },
      {
        name: "Internet/Konsum",
        tid: 96,
        icon: "cart",
        image: "assets/imgs/front/konsum.jpg",
        count:stats.t_konsum
      },
      {
        name: "Reisen/Verkehr",
        tid: 95,
        icon: "bus",
        image: "assets/imgs/front/verkehr.jpg",
        count:stats.t_verkehr

      },
      {
        name: "Wohnen",
        tid: 94,
        icon: "home",
        image: "assets/imgs/front/wohnen.jpg",
        count:stats.t_wohnen
      },
    ]
  //alert(stats.nodesc)
  this.getRandom(stats.nodesc);
  }).catch(err=>{
    console.log(err);
  }) //stats


    this.auth.get('help').then(col => {
      this.help = col;
      // console.log(this.help,'LOADED');
    }).catch(err => {
      this.help = true;
      console.log(err);
    });

    this.nodes = [];
    /*
    console.log(auth);
    this.auth.connect.subscribe(data=>{
     alert("HOME"+data.name);
   });
   */

    this.page = 0;
    this.pages = 10;

   // this.getFragen();


    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
        console.log("BannerConfig");
      })
      .catch(e => console.log(e));

  }

/*
  getFragen() {
    this.getFragenIndex(this.page, this.pages).then(dat => {
      let d = <any>dat;
      for (let i = 0; i < d.length; i++) {
        this.nodes.push(d[i]);
        this.page++;
      }
    });
  }

  getFragenIndex(page, pages) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.auth.HOST + '/' + this.auth.ENDPOINT + '/node.json?fields=nid,title,created,status&parameters[type]=rechtsfrage&parameters[status]=1&options[orderby][created]=desc&page=' + page + '&pagesize=' + pages).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    })
  }


  getComments(nid) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.auth.HOST + '/' + this.auth.ENDPOINT + '/comment.json?parameters[nid]=' + nid + '&parameters[status]=1&pagesize=150').subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    })

  }




  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.getFragen();
      //     console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
*/


frageSelected(n: string): void {
  //console.log(n)
  this.getFrage(n).then(res => {
    let item: any = res;
    //  console.log(item);
    this.navCtrl.push(ViewPage, { item: { node: JSON.parse(item) } });
  });

}

getFragenIndex(page, pages) {
  return new Promise((resolve, reject) => {
    this.httpClient.get(this.auth.HOST + '/' + this.auth.ENDPOINT + '/node.json?fields=nid,title,created,status&parameters[type]=rechtsfrage&parameters[status]=1&options[orderby][created]=desc&page=' + page + '&pagesize=' + pages).subscribe(data => {
      resolve(data);
    }, err => {
      reject(err);
    });
  })
}
getFrage(nid) {
  return new Promise((resolve, reject) => {
    let headers = new HttpHeaders()
      .set('X-CSRF-TOKEN', <string>this.auth.token).set('Content-Type', 'application/json')

    let options = {
      headers: headers,
      withCredentials: true,
    };
    this.httpClient.post(this.auth.HOST + '/' + this.auth.ENDPOINT + '/awri_services_resources/rechtsfrage', { nid: nid }, options).subscribe(data => {
      resolve(data);
    }, err => {
      reject(err);
    });
  })

}
  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }


  checkPlatform() {
    let alert = this.alertCtrl.create({
      title: 'Powered by',
      message: 'AWRI & Rechtsforum Schweiz',
      buttons: ['OK']
    });
    alert.present();

    if (this.plt.is('cordova')) {
      // Do Cordova stuff
    } else {
      // Do stuff inside the regular browser
    }
  }

  share() {
    if (this.plt.is('cordova')) {
      //    socialShare();
      window['plugins'].socialsharing.share('Alles was Recht ist! Die Schweizer Datenbank für Rechtsfragen.', null, null, 'https://awri.ch');

    } else {
      //alert("share Browser");
      this.presentShareSheet();
      // Do stuff inside the regular browser
    }
  }

  presentShareSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '❤️ Danke fürs Teilen auf...',
      buttons: [
        {
          text: 'Facebook',
          role: 'facebook',
          icon: 'logo-facebook',
          handler: () => {
            window.open('https://www.facebook.com/sharer/sharer.php?u=https://awri.ch', '_system');
          }
        },
        {
          text: 'Whatsapp',
          role: 'whatsapp',
          icon: 'logo-whatsapp',
          handler: () => {
            window.open('https://api.whatsapp.com/send?text=Alles was Recht ist! Die Schweizer Datenbank für Rechtsfragen. https://awri.ch', '_system');
          }
        },
        {
          text: 'LinkedIn',
          role: 'linkedin',
          icon: 'logo-linkedin',
          handler: () => {
            window.open('https://www.linkedin.com/shareArticle?mini=true&url=https://awri.ch', '_system');
          }
        },
        {
          text: 'Twitter',
          role: 'twitter',
          icon: 'logo-twitter',
          handler: () => {
            window.open('https://twitter.com/intent/tweet?status=Alles was Recht ist! Die Schweizer Datenbank für Rechtsfragen. https://awri.ch', '_system');
          }
        },
        {
          text: 'Google+',
          role: 'google',
          icon: 'logo-google',
          handler: () => {
            window.open('https://plus.google.com/share?url=https://awri.ch', '_system');
          }
        },
        {
          text: 'Email',
          role: 'email',
          icon: 'mail',
          handler: () => {
            window.open('mailto:?subject=Alles was Recht ist!&body=Die Schweizer Datenbank für Rechtsfragen. https://awri.ch', '_system');

          }
        },
        {
          text: 'Schliessen',
          role: 'cancel',
          icon:'close',
          handler: () => {
            console.log('Schliessen');
          }
        }
      ]
    });
    actionSheet.present();
  }

  gotoBereich(bereich:any) {
    this.navCtrl.push(BereichPage, { bereich: bereich });
  }


doSearch(){
//  this.navCtrl.push(SearchPage);
  this.navCtrl.push(SearchPage, { text: this.search });
}

getRandom(pages){
  //  this.navCtrl.push(SearchPage);
  let rnd=Math.floor(Math.random()*(pages-1));
  this.getFragenIndex(rnd, 1).then(n=>{
    this.random=n[0];
})


   // this.navCtrl.push(SearchPage, { text: this.search });
  }


ionViewDidEnter(){
 

  if (document.URL.indexOf("?") > 0) {
    let splitURL = document.URL.split("?");
    let splitParams = splitURL[1].split("&");
    let i: any;
    for (i in splitParams){
      let singleURLParam = splitParams[i].split('=');
      if (singleURLParam[0] == "category"){
      //  this.category = singleURLParam[1];
      }
      if (singleURLParam[0] == "nid"){
       // alert("LOAD"+singleURLParam[1]);
     
        // this.gotoPage(singleURLParam[1]);
       /*
        this.getFrage(singleURLParam[1]).then(res => {
          let item: any = res;
            console.log(item);
          this.navCtrl.push(ViewPage, { item: { nodes:[{node: JSON.parse(item) }]} });
        });
        */
      //  this.id = singleURLParam[1];
      }
      let urlParameter = {
      'name': singleURLParam[0],
      'value': singleURLParam[1]
    };
   
    this.urlParameters.push(urlParameter);
    this.frageSelected(urlParameter.value);
    }
  }

}
/*
gotoPage(nid){
  this.getFrage(nid).then(res => {
    //  let item: any = res;
    alert(nid);
        console.log(res);
    //  this.navCtrl.push(ViewPage, { item: { node: JSON.parse(item) } });
    }).catch(err=>{
      console.log(err);
    });
}
*/

}
