webpackJsonp([8],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_view__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, awri, alertCtrl, loadingCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.awri = awri;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.error = "",
            this.text = navParams.get('text');
        console.log(this.text);
        if (this.text !== undefined)
            this.dosearch();
        this.rootPage = SearchPage_1;
        this.awri.get('help').then(function (col) {
            _this.help = col;
        }).catch(function (err) {
            console.log(err);
        });
    }
    SearchPage_1 = SearchPage;
    SearchPage.prototype.dosearch = function () {
        this.search(this.text);
    };
    SearchPage.prototype.search = function (text) {
        var _this = this;
        this.presentLoading("Suche nach '" + text + "', Bitte warten...");
        this.error = "",
            this.text = text;
        this.awri.search(this.text).then(function (data) {
            _this.items = data;
            // console.log(this.items);
            _this.loader.dismiss();
        }, function (err) {
            if (err.status == 404)
                _this.error = "Die Suche nach '" + _this.text + "' brachte leider keine Ergebnisse.";
            //this.awri.showError());
            _this.loader.dismiss();
        });
    };
    SearchPage.prototype.itemSelected = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_view_view__["a" /* ViewPage */], { item: item });
    };
    SearchPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    SearchPage.prototype.presentLoading = function (txt) {
        this.loader = this.loadingCtrl.create({
            content: txt,
            duration: 3000
        });
        this.loader.present();
    };
    SearchPage = SearchPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/search/search.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            </ion-buttons>\n             \n            <ion-title>\n                Suchen \n              </ion-title>\n      <ion-buttons start>\n  <ng-template [ngIf]="this.awri.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n    <button ion-button (click)="gotoLogin()">\n      <img class="avatar" src="{{this.awri.user.picture}}"> {{awri.user.name}}        \n    </button>\n  </ng-template>      \n  <ng-template #headerOut>\n              <button ion-button (click)="gotoLogin()">\n              <ion-icon name="contact"></ion-icon>  {{awri.user.name}}\n              </button>\n  </ng-template>\n      </ion-buttons>    \n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngIf="help" class="help">   \n        <ion-item>\n            <ion-label text-wrap>\n               <h2><ion-icon name="help"></ion-icon> Rechtsfragen und Antworten suchen</h2>\n               <p>Suchen sie nach mit verknüpften Schlüsselwörtern nach Rechtsfragen und Antworten.</p>\n               <p>Es werden nur die 10 relevantesten Ergebnisse auf Ihre Suche angezeigt.</p>\n               <p>Sie können Ihre Suche näher eingrenzen, indem sie Ihre Schlüsselwörter mit AND oder OR (Grossgeschrieben) verknüpfen. Z.B. Haus OR Garage</p>\n               <p>Oder indem Sie Ihre Schlüsselwörter mit + oder - verknüpfen. z.B: Hund -Katze</p>\n               <p>Die besten 10 Suchergebnise werden nach <ion-icon name="pulse"></ion-icon> Relevanz soriert angezeigt. Die Relevanz ergibt sich aus:\n                </p>\n                <ol><li>Anzahl Schlüsselwörtern</li> <li>Aktualität</li> <li>Bewertung</li></ol>\n         \n              </ion-label>\n         </ion-item>\n        <br>\n        </div>\n  <ion-list>\n    <ion-item>\n      <ion-label> <ion-icon name="search"></ion-icon></ion-label>\n      <ion-input round [(ngModel)]="text" placeholder="Rechtsfrage suchen..." clearInput></ion-input>\n    </ion-item>\n    </ion-list>    \n\n    <button ion-button round full (click)="dosearch()" icon-start><ion-icon name="search"  item-left></ion-icon> Suchen</button>\n    <ion-label color="danger" text-wrap><h3>{{error}}</h3></ion-label>\n  <ion-grid>\n   <ion-row>\n     <ion-col *ngFor="let item of items" col-12 col-md-4>\n       <ion-card  (click)="this.itemSelected(item)">\n         <ion-item>        \n          <ng-template [ngIf]="awri.isInRole(\'authenticated user\')" [ngIfElse]="loggedOut">\n           <ion-avatar item-start *ngIf="item.node.field_fbid?.und?.length>0">\n              <img class="avatar" src="https://graph.facebook.com/{{(item.node.field_fbid.und[0]?item.node.field_fbid.und[0].value:0)}}/picture"> \n              <h2 text-capitalize>{{item.node?.field_fbname.und[0].value}}</h2>\n              <p>{{item.node.created*1000 | date: \'dd.MM.yyyy H:mm\' }}</p>\n            </ion-avatar>\n            \n          </ng-template>\n          <ng-template #loggedOut>\n              <ion-avatar item-start>\n                  <img class="avatar" src="assets/imgs/anonymous.png"> \n                </ion-avatar>\n                <h2 text-capitalize>Nicht angezeigt</h2>\n            </ng-template>\n         </ion-item>\n         <ion-card-content>\n                  <h2 innerHTML={{item.snippet}}></h2>                  \n\n         </ion-card-content>\n         <ion-item>\n            <ion-icon name="chatboxes" item-start></ion-icon>\n    \n            <ion-badge item-end>{{item.node?.comment_count}}</ion-badge>\n          </ion-item>\n         <ion-item>\n            <ion-icon name="pulse" item-start></ion-icon>\n            <ion-badge item-end>{{item.score}}</ion-badge>\n          </ion-item>\n       </ion-card>\n     </ion-col>\n   </ion-row>\n </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
    var SearchPage_1;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BereichPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_view_view__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BereichPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BereichPage = /** @class */ (function () {
    function BereichPage(navCtrl, navParams, http, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.page = 0;
        this.bereich = navParams.get("bereich");
    }
    BereichPage.prototype.ionViewDidLoad = function () {
        this.getNodesByTid();
    };
    BereichPage.prototype.getNodesByTid = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.auth.token).set('Content-Type', 'application/json');
            var options = {
                headers: headers,
                withCredentials: true,
                pager: true,
                tid: _this.bereich.tid,
            };
            _this.http.post(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/taxonomy_term/selectNodes?page=' + _this.page, options).subscribe(function (data) {
                console.log(data);
                _this.nodes = data;
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    BereichPage.prototype.gotoDetails = function (node) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_view_view__["a" /* ViewPage */], { item: { node: node } });
    };
    BereichPage.prototype.next = function () {
        this.page++;
        //alert(this.page);
        this.getNodesByTid();
    };
    BereichPage.prototype.prev = function () {
        this.page--;
        this.getNodesByTid();
    };
    BereichPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bereich',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/bereich/bereich.html"*/'<!--\n  Generated template for the BereichPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><ion-icon name="{{bereich?.icon}}"></ion-icon> {{this.bereich?.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-navbar>\n        <ion-buttons left>\n          <button *ngIf="page>0"  ion-button (click)="prev()">\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title text-center>{{1+page}}/{{this.bereich?.count/10  | number: \'1.0-0\'}}</ion-title>\n        <ion-buttons right>\n            <button *ngIf="nodes?.length==10" ion-button  (click)="next()"><ion-icon name="arrow-forward"></ion-icon></button>\n          </ion-buttons>\n      </ion-navbar>\n      \n<div *ngFor="let node of nodes">\n  <ion-card>\n    <ion-item><p>{{node.created*1000 | date: \'dd.MM.yyyy H:mm\' }}</p></ion-item>\n  <ion-item text-wrap (click)="gotoDetails(node)">\n    <h1>{{node.title}}</h1>\n  </ion-item>\n</ion-card>\n</div>\n<!--\n<button *ngIf="page>0" ion-button small (click)="prev()">Zurück</button></ion-buttons> {{1+page}} <button *ngIf="nodes?.length==10" ion-button small (click)="next()">Weiter</button>\n-->\n\n<ion-navbar>\n    <ion-buttons left>\n      <button *ngIf="page>0"  ion-button (click)="prev()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>{{1+page}}/{{this.bereich?.count/10  | number: \'1.0-0\'}}</ion-title>\n    <ion-buttons right>\n        <button *ngIf="nodes?.length==10" ion-button  (click)="next()"><ion-icon name="arrow-forward"></ion-icon></button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/bereich/bereich.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], BereichPage);
    return BereichPage;
}());

//# sourceMappingURL=bereich.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_upload_upload__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePage = /** @class */ (function () {
    function CreatePage(navCtrl, alertCtrl, navParams, awri, upload) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.todo = {
            title: '',
            description: '',
        };
        this.awri = awri;
        this.upload = upload;
        this.kanton = "Keine Angabe";
        this.files = [];
        this.awri.get('help').then(function (col) {
            _this.help = col;
        }).catch(function (err) {
            console.log(err);
        });
        awri.getKantons().then(function (data) {
            _this.kantone = data;
        }).catch(function (err) {
            console.log(err);
            // this.awri.showError(err);
        });
        this.awri.get('kanton').then(function (data) {
            _this.kanton = data;
        }, function (err) {
            console.log(err);
        });
    }
    CreatePage.prototype.sendFrage = function () {
        var _this = this;
        var tid = 66;
        this.kantone.map(function (k) {
            if (k.name == _this.kanton)
                tid = k.tid;
        });
        for (var i = 0; i < this.upload.MAX_UPLOADS; i++) {
            var input = document.getElementById('images' + i);
            console.log(input);
        }
        var fils = this.upload.getFiles();
        console.log(fils);
        var data = {
            "body": this.todo.description,
            "anonym": "1",
            "field_kanton": tid,
            //   "fbid": this.awri.user.fbid,  
            "field_image": { "und": fils }
        };
        this.awri.createFrage(data).then(function (dat) {
            console.log(dat);
            var alert = _this.alertCtrl.create({
                title: 'Rechtsfrage gesendet',
                subTitle: 'Ihre Rechtsfrage wurde erfolgreich an AWRI gesendet.',
                buttons: ['Weiter']
            });
            alert.present();
            _this.removeAll();
        }).catch(function (err) {
            alert("Fehler bei erstellen der Frage");
            // this.awri.showError(err);
        });
    };
    CreatePage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        // console.log(this.file);
    };
    CreatePage.prototype.removePreview = function (nr) {
        // var filefield:any = document.getElementById('filefield'+nr);
        var previewfield = document.getElementById(this.upload.fieldname + '' + nr);
        if (previewfield)
            previewfield.src = "";
        //console.log(filefield);
        // filefield.style="display: block !important";
    };
    CreatePage.prototype.removeAll = function () {
        this.files = [];
        this.upload.resetFiles();
        this.todo.description = "";
    };
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
    CreatePage.prototype.selectKanton2 = function (evt) {
        this.kanton = evt;
        this.awri.set('kanton', this.kanton).then(function (data) {
            console.log(data);
        }, function (err) {
            console.error(err);
        });
    };
    CreatePage.prototype.testFiles = function () {
        var f = this.upload.getFiles();
        console.log(f);
    };
    CreatePage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/create/create.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            </ion-buttons>\n             \n            <ion-title>\n                Frage stellen \n              </ion-title>\n      <ion-buttons start>\n  <ng-template [ngIf]="this.awri.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n              <button ion-button (click)="this.gotoLogin()">\n                  <img class="avatar" src="{{this.awri.user.picture}}"> {{awri.user.name}}        \n                </button>\n  </ng-template>      \n  <ng-template #headerOut>\n              <button ion-button (click)="this.gotoLogin()">\n              <ion-icon name="contact"></ion-icon>  {{awri.user.name}}\n              </button>\n  </ng-template>\n      </ion-buttons>    \n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngIf="help" class="help">   \n        <ion-item>\n            <ion-label text-wrap>\n                <h2><ion-icon name="help"></ion-icon> Rechtsfrage stellen.</h2>\n                <p>Wenn sie Ihre Rechtsfrage nicht anonym stellen wollen, können sie ihre Frage einfach in unserer Facebookgruppe <a href="https://www.facebook.com/groups/RechtsberatungSchweiz/" target="_BLANK"><ion-icon name="logo-facebook"></ion-icon> Rechtsforum Schweiz stellen.</a></p>\n              \n               <h2>Anonyme Rechtsfrage stellen.</h2>\n               <p>Sie können je nach Gerät über Browser oder Handy via Dateisystem,Webcam,Kamera bis zu 5 Dateien zu ihrer Frage hochladen. Klicken sie auf den upload Button <ion-icon name="cloud"></ion-icon> um die ausgewählten Dateien einzeln hochzuladen oder "Alle Hochladen" um alle ausgewählten Dateien zur Frage anzuhängen.</p>          \n                <p>Sobald ein Admin ihre Frage freigeschalten hat, wird sie <strong>anonym</strong> auf AWRI sowie in der Facebookgruppe Rechtsforum Schweiz veröffentlicht und diskutiert. </p>\n                <p><strong>Sie können anonym ins Rechtsforum Schweiz rückantworten, indem Sie Ihre eigene Frage hier kommentieren.</strong></p>\n              </ion-label>\n         </ion-item>\n</div>\n\n  <ng-template [ngIf]="this.awri.isInRole(\'authenticated user\')" [ngIfElse]="loggedOut">\n    <ion-title>Ihre Rechtsfrage wird <strong>anonym</strong> behandelt.</ion-title>\n      <ion-label text-wrap>Bitte beschreiben Sie den Sachverhalt möglichst genau und wählen Sie, falls es um kantonale Behörden oder Rechtsprechung geht, den entsprechenden Kanton aus.</ion-label>\n      <ion-label text-wrap>Wenn Ihre Frage freigeschalten wurde, können Sie hier wieder auf Ihre Frage <strong>anonym</strong> Rückantworten.</ion-label>\n      <ion-label text-wrap>Die Frage wird in unserem Forum diskutiert und die treffendsten Antworten veröffentlicht.(ca. 24h)</ion-label>\n      <ion-label text-wrap color="danger">Erwähnen Sie keine persönlichen Daten wie Namen Adressen,Telefonnummern, etc.</ion-label>\n      <ion-label text-wrap color="danger">Ihre Frage wird durch einen Admin geprüft und freigeschalten.</ion-label>\n\n    <form #createForm="ngForm" (ngSubmit)="sendFrage()">\n\n        <ion-input type="hidden" value="{{this.awri.user.name}}" name="username" disabled></ion-input>\n        <ion-input type="hidden" value="{{this.awri.user.fbid}}" name="username" disabled></ion-input>\n        <ion-item>\n            <ion-label>Kanton</ion-label>\n\n            <ion-select [(ngModel)]="kanton" name="kanton" (ionChange)="selectKanton2($event)">\n\n                <ion-option *ngFor="let item of kantone" value="{{item.name}}" id="{{item.tid}}">{{item.name}}</ion-option>\n\n            </ion-select>\n          </ion-item>       \n        <ion-item>\n          <ion-label>*Ihre Rechtsfrage</ion-label>\n          <ion-textarea required [(ngModel)]="todo.description" name="description"></ion-textarea>\n        </ion-item>\n        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n        <button ion-button class="submit-btn" round full type="submit"\n                [disabled]="!createForm.form.valid">Frage senden\n        </button>        \n      </form>\n    </ng-template>\n\n      <upload MAX_UPLOADS=3 fieldname="images"></upload>\n\n    <ng-template #loggedOut> \n        <ion-label color="danger" text-wrap><h2><ion-img  src="assets/imgs/anonymous.png"></ion-img> Sie sind nicht angemeldet!</h2></ion-label>\n        <ion-label text-wrap>Bitte melden sie sich an um anonyme Rechtsfragen zu stellen.</ion-label>\n        <button ion-button small (click)="gotoLogin()">Anmelden</button>\n        <form #createForm="ngForm" (ngSubmit)="sendFrage()">\n            <ion-item>\n              <ion-label>Name</ion-label>\n              <ion-input type="text" value="{{this.awri.username}}" name="username" disabled></ion-input>\n            </ion-item>\n                <ion-input type="hidden" value="{{this.awri.fbid}}" name="username" disabled></ion-input>\n              <ion-item>\n                  <ion-label>Kanton</ion-label>\n                  <ion-select [(ngModel)]="kanton" name="kanton" (ionChange)="selectKanton2($event)" disabled>\n                      <ion-option *ngFor="let item of kantone" value="{{item.name}}" id="{{item.tid}}">{{item.name}}</ion-option>\n      \n                  </ion-select>\n                </ion-item>       \n              <ion-item>\n                <ion-label color="danger">*Ihre Rechtsfrage</ion-label>\n                <ion-textarea required [(ngModel)]="todo.description" name="description" disabled></ion-textarea>\n              </ion-item>\n              <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n              <button ion-button class="submit-btn" round full type="submit"\n              disabled shape="round">Frage senden\n              </button>        \n            </form>\n    </ng-template>\n    </ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/create/create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3__components_upload_upload__["a" /* UploadComponent */]])
    ], CreatePage);
    return CreatePage;
}());

//# sourceMappingURL=create.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.auth.get('help').then(function (col) {
            _this.help = col;
        }).catch(function (err) {
            _this.help = true;
        });
    }
    HelpPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
    };
    ;
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/help/help.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            </ion-buttons>\n             \n            <ion-title>\n                Hilfe \n              </ion-title>\n      <ion-buttons start>\n  <ng-template [ngIf]="this.auth.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n              <button ion-button (click)="this.gotoLogin()">\n                  <img class="avatar" src="{{this.auth.user.picture}}"> {{auth.user.name}}        \n                </button>\n  </ng-template>      \n  <ng-template #headerOut>\n              <button ion-button (click)="this.gotoLogin()">\n              <ion-icon name="contact"></ion-icon>  {{auth.user.name}}\n              </button>\n  </ng-template>\n      </ion-buttons>    \n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    \n        <ion-title>Alles was Recht ist!</ion-title>\n        <p>Rechtsberatung mit System - \n        Unsere Community hilft kostenlos und unverbindlich bei rechtlichen Fragen.</p>\n        <ion-title>Wie funktioniert dieses System?</ion-title>\n        <p>Sie stellen Ihre Rechtsfrage(anonym) hier auf AWRI. Wir posten Sie anonym in unserem Rechtsforum (Rechtsforum Schweiz)</p>\n        <p>Durch Erfahrungs- und Meinungsaustausch versuchen unsere Mitglieder Lösungen auf Ihre Frage zu finden.</p>\n        <ion-label>Wir werten die besten Antworten aus und in der Regel werden die treffendsten Antworten innert 48h hier wieder veröffentlicht..</ion-label>\n        <ion-label color="danger">Wir ersetzen keinen juristischen Beistand!</ion-label>\n\n        <div class="help" *ngIf="help">\n                <ion-item>\n                        <ion-label text-wrap><ion-icon name="help"></ion-icon> Sie können die angezeigte Hilfe in den Einstellungen ausschalten. <br>\n                            Klicken sie oben auf ihr <ion-icon name="contact"></ion-icon>\n                             Profilbild um die Einstellungen zu öffnen.                            \n                            </ion-label>                                \n            </ion-item>         \n\n            <div class="help" *ngIf="auth.isInRole(\'anonymous user\')">\n    \n<ion-item>\n                    <ion-label color="danger" text-wrap><h2>Nur auf AWRI angemeldete Benutzer haben Zugriff auf folgende erweiterte Funktionen!</h2></ion-label>\n                </ion-item>\n                <ion-item>         <ion-label>Hilfe ein/ausschalten</ion-label>  </ion-item>\n\n                <ion-item>       <ion-label>Anonyme Rechtsfragen stellen</ion-label>  </ion-item>\n                <ion-item>          <ion-label>Rechtsfragen kommentieren</ion-label>  </ion-item>\n                <ion-item>         <ion-label>Lesezeichen setzen</ion-label>  </ion-item>\n                <ion-item>         <ion-label>Rechtsfragen  bewerten</ion-label>  </ion-item>\n               \n                </div>   \n        </div>\n    <br>\n\n        <div class="info">   \n\n                <a href="https://www.facebook.com/groups/RechtsberatungSchweiz/" target="_BLANK">  \n                <ion-item>\n                      <ion-icon name="logo-facebook" item-start></ion-icon>\n                      <ion-label text-wrap>\n                         <h2>Rechtsforum Schweiz</h2>\n                         <p>Die Facebookgruppe wurde 2015 gegründet um Personen die sich keinen Anwalt leisten können bei juristischen Fragen zu unterstützen.</p>\n                         <p>Alle AWRI Fragen wurden durch die Mitglieder dieser Gruppe gestellt und beantwortet.</p>\n                         <h3>Wir danken allen Mitgliedern des Rechtsforum Schweiz ❤️lich für Ihre Unterstützung!</h3>\n                        </ion-label>\n                   </ion-item>\n                  </a>\n                  <br>\n                  <a href="{{auth.HOST}}" target="_BLANK">  \n                  <ion-item>\n                      <ion-icon name="rechzapp-awri" item-start></ion-icon>\n                      <ion-label text-wrap>\n                         <h2>AWRI (Alles was Recht ist)</h2>\n                         <p>Die AWRI Datenbank für Rechtsfragen wurde 2015 erstellt um die Verwaltung und Administration der gestellten Fragen zu erleichtern.</p>\n                         <p>In dieser Datenbank werden alle Rechtsfragen und Antworten des Rechtsforum Schweiz ausgewertet und freigeschalten.</p>\n                        </ion-label>\n                   </ion-item>\n                   </a>\n                  <br>        \n                  <a href="https://www.facebook.com/Rechtshilfeforum/" target="_BLANK">  \n                  <ion-item>\n                      <ion-icon name="logo-facebook" item-start></ion-icon>\n                      <ion-label text-wrap>\n                         <h2>AWRI Ratgeber</h2>\n                         <p>Facebook Seite, auf der von Zeit zu Zeit die interessantesten und meist gefragten Beiträge aus dem Rechtsforum Schweiz veröffentlicht werden.</p>\n                        </ion-label>\n                   </ion-item>  \n                   </a>\n          </div>\n\n    <ion-card>\n        <ion-card-header><h2>Bereiche</h2></ion-card-header>\n        <ion-card-content>\n             <ion-label><ion-icon name="construct"></ion-icon> Arbeit {{this.auth.stats?.t_arbeit}}</ion-label>\n             <ion-label><ion-icon name="briefcase"></ion-icon> Behörden/Schulen {{this.auth.stats?.t_schule}}</ion-label>\n             <ion-label><ion-icon name="contacts"></ion-icon> Familie {{this.auth.stats?.t_familie}}</ion-label>\n             <ion-label><ion-icon name="medkit"></ion-icon> Gesundheit {{this.auth.stats?.t_gesundheit}}</ion-label>\n             <ion-label><ion-icon name="cart"></ion-icon> Internet/Konsum {{this.auth.stats?.t_konsum}}</ion-label>\n             <ion-label><ion-icon name="bus"></ion-icon> Reisen/Verkehr {{this.auth.stats?.t_verkehr}}</ion-label>\n             <ion-label><ion-icon name="home"></ion-icon> Wohnen {{this.auth.stats?.t_wohnen}}</ion-label>\n            </ion-card-content>\n            <ion-row class="cardfooter">\n                    <ion-col>\n                      <small>Kategorisiert {{(this.auth.stats?.t_wohnen*1+this.auth.stats?.t_verkehr*1+this.auth.stats?.t_konsum*1+this.auth.stats?.t_gesundheit*1+this.auth.stats?.t_familie*1+this.auth.stats?.t_schule*1+this.auth.stats?.t_arbeit*1)}}</small>\n                    </ion-col>\n                </ion-row>\n        </ion-card>\n\n      <ion-card>\n            <ion-card-header><h2><ion-icon name="pulse"></ion-icon>  Statistik</h2></ion-card-header>\n            <ion-card-content>\n                    <ion-label>Benutzer {{this.auth.stats?.users}}</ion-label>\n                    <ion-label>Rechtsfragen {{this.auth.stats?.nodesc}}/{{this.auth.stats?.nodes}}</ion-label>\n                    <ion-label>Antworten {{this.auth.stats?.commentsc}}/{{this.auth.stats?.comments}}</ion-label>\n                    <ion-label>Hinweise auf  Art. OR {{this.auth.stats?.ors}}</ion-label>\n                    <ion-label>Hinweise auf ZGB {{this.auth.stats?.zgbs}}</ion-label>\n                     <ion-label>Hinweise auf BGE {{this.auth.stats?.bges}}</ion-label>\n                </ion-card-content>\n            <ion-row class="cardfooter">\n                <ion-col>\n                  <small>Letztes update: {{this.auth.stats?.updated}}</small>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n\n      <ion-label color="danger" text-wrap><h3>Wir haben unser System erneuert, die gewohnte AWRI Seite finden Sie nun hier: <a href="https://stage.awri.ch" target="_new">https://stage.awri.ch</a></h3></ion-label>\n      <ion-label color="danger" text-wrap><h3>Hinweise zum Datenschutz: <a href="https://stage.awri.ch/agb" target="_new">https://stage.awri.ch/agb</a></h3></ion-label>\n\n      <div class="mobile-fab"><ion-label color="primary" text-wrap>Bitte noch etwas Geduld, weitere Updates folgen in Kürze... </ion-label></div>\n    \n  <!--\n  <ion-card>\n      <ion-card-header class="cardheader">\n          CNC 10\n        </ion-card-header> \n    \n    <ion-card-content>\n      Content\n      </ion-card-content>\n      <ion-row>\n      <ion-segment [(ngModel)]="pet" (click)="test()">\n    <ion-segment-button value="profil">\n      Profil\n    </ion-segment-button>\n    <ion-segment-button value="facebook">\n      Facebook\n    </ion-segment-button>\n    <ion-segment-button value="awri">\n       AWRI\n      </ion-segment-button>\n  </ion-segment>\n</ion-row>\n\n</ion-card>\n-->\n</ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bereich/bereich.module": [
		299,
		7
	],
	"../pages/bookmarks/bookmarks.module": [
		300,
		6
	],
	"../pages/create/create.module": [
		301,
		5
	],
	"../pages/help/help.module": [
		302,
		4
	],
	"../pages/login/login.module": [
		303,
		3
	],
	"../pages/register/register.module": [
		304,
		2
	],
	"../pages/settings/settings.module": [
		305,
		1
	],
	"../pages/view/view.module": [
		306,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bookmarks_bookmarks__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_admin__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, awri) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.awri = awri;
        this.awri.get('help').then(function (data) {
            _this.help = data;
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        //alert('username: ' + this.username);
        this.awri.login(this.username, this.password).then(function (data) {
            //  console.log(data);
        }).catch(function (err) {
            _this.username = "";
            _this.password = "";
            console.log(err);
        });
    };
    LoginPage.prototype.gotoRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.fblogin = function () {
        var _this = this;
        this.awri.fblogin().then(function (data) {
            var dat = data;
            //  console.log(data);
            _this.awri.fboauth(dat.authResponse.accessToken).then(function (res) {
                //        this.username=<String>this.awri.username;
                //        console.log(res);   
            });
        });
    };
    ;
    LoginPage.prototype.logout = function () {
        this.awri.logout().then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ;
    LoginPage.prototype.gotoBookmarks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_bookmarks_bookmarks__["a" /* BookmarksPage */]);
    };
    LoginPage.prototype.gotoAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_admin_admin__["a" /* AdminPage */]);
    };
    LoginPage.prototype.helpChanged = function (evt) {
        var _this = this;
        this.awri.set('help', evt.help).then(function (h) {
            _this.help = h;
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-buttons start>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          </ion-buttons>\n           \n          <ion-title>\n              Anmelden \n            </ion-title>\n    <ion-buttons end>\n<ng-template [ngIf]="this.awri.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n            <button ion-button>\n                <img class="avatar" src="{{this.awri.user.picture}}"> {{awri.user.name}}        \n              </button>\n</ng-template>      \n<ng-template #headerOut>\n            <button ion-button>\n            <ion-icon name="contact"></ion-icon>  {{awri.user.name}}\n            </button>\n</ng-template>\n    </ion-buttons>    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ng-template [ngIf]="this.awri.isInRole(\'authenticated user\')" [ngIfElse]="loggedOut">\n    <ion-item>\n        <ion-label item-start>Server</ion-label>\n        <ion-label color="secondary">{{awri.HOST}}</ion-label>        \n      </ion-item>\n      <div class="help">\n      <ion-item>\n        <ion-label><ion-icon name="help"></ion-icon> Hilfe an/aus</ion-label>\n        <ion-toggle [(ngModel)]="help" (ionChange)="helpChanged(this);" [disabled]="this.awri.isInRole(\'anonymous user\')"></ion-toggle>\n      </ion-item>\n\n    </div>\n      <ion-item>\n          <ion-label item-start>Ihre Lesezeichen</ion-label>\n        <button ion-button (click)="this.gotoBookmarks()" item-end>Ansehen</button>\n      </ion-item>\n      <ng-template [ngIf]="this.awri.isInRole(\'administrator\')||this.awri.isInRole(\'moderator\')">\n        <ion-item>\n            <ion-label item-start>Admin</ion-label>\n          <button ion-button (click)="this.gotoAdmin()" item-end>Ansehen</button>\n        </ion-item>\n        </ng-template>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <ion-img [src]="this.awri.user.picture"></ion-img>\n          </ion-avatar>\n          {{ this.awri.user.name }} \n        </ion-item>\n  <ion-item>\n      \n        <ion-label>Sie sind als {{awri.user.name}} angemeldet</ion-label>        \n      </ion-item>\n        <button ion-button round lightgray full  (click)="this.awri.logout()">Abmelden</button>\n\n</ng-template>      \n<ng-template #loggedOut>\n  <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input placeholder="Ihre Email" name="username" id="userField"\n                         type="text" required [(ngModel)]="username" #userField></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input placeholder="Ihr Password" name="password" id="passwordField"\n                         type="password" required [(ngModel)]="password"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n          <button ion-button class="submit-btn" full round type="submit"\n                  [disabled]="!loginForm.form.valid">Anmelden\n          </button> \n        </ion-col>\n      </ion-row>    \n        </form>  \n          \n        <ion-label>Klicken sie hier um sich über Facebook anzumelden.</ion-label>\n        <button ion-button round  full  (click)="fblogin()"><ion-icon  slot="start" name="logo-facebook"></ion-icon> &nbsp;&nbsp;&nbsp; über Facebook anmelden</button>               \n        <ion-label>Sie sind noch nicht auf AWRI registriert?</ion-label>\n        <button ion-button round  full  (click)="gotoRegister()"><ion-icon  slot="start" name="contact"></ion-icon> &nbsp;&nbsp;&nbsp; Neues Profil Registrieren</button>         \n  \n    \n    <ion-label color="danger"><a ion-link  href="{{this.awri.HOST}}/user/password" target="_BLANK">Passwort vergessen?</a></ion-label>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_upload_upload__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_view_view__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bereich_bereich__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_free__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Observable';









var bannerConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    isTesting: true,
    autoShow: true,
};
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, upload, admobFree, httpClient, plt, alertCtrl, actionSheetCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.admobFree = admobFree;
        this.httpClient = httpClient;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.urlParameters = [];
        this.auth = auth;
        this.help = false;
        auth.getStats().then(function (s) {
            var stats = JSON.parse(s);
            _this.bereiche = [
                {
                    name: "Arbeit",
                    tid: 93,
                    icon: "construct",
                    image: "assets/imgs/front/arbeit.jpg",
                    count: stats.t_arbeit
                },
                {
                    name: "Behörden/Schulen",
                    tid: 99,
                    icon: "briefcase",
                    image: "assets/imgs/front/schule.jpg",
                    count: stats.t_schule
                },
                {
                    name: "Familie",
                    tid: 98,
                    icon: "contacts",
                    image: "assets/imgs/front/familie.jpg",
                    count: stats.t_familie
                },
                {
                    name: "Gesundheit",
                    tid: 97,
                    icon: "medkit",
                    image: "assets/imgs/front/gesundheit.jpg",
                    count: stats.t_gesundheit
                },
                {
                    name: "Internet/Konsum",
                    tid: 96,
                    icon: "cart",
                    image: "assets/imgs/front/konsum.jpg",
                    count: stats.t_konsum
                },
                {
                    name: "Reisen/Verkehr",
                    tid: 95,
                    icon: "bus",
                    image: "assets/imgs/front/verkehr.jpg",
                    count: stats.t_verkehr
                },
                {
                    name: "Wohnen",
                    tid: 94,
                    icon: "home",
                    image: "assets/imgs/front/wohnen.jpg",
                    count: stats.t_wohnen
                },
            ];
            //alert(stats.nodesc)
            _this.getRandom(stats.nodesc);
        }).catch(function (err) {
            console.log(err);
        }); //stats
        this.auth.get('help').then(function (col) {
            _this.help = col;
            // console.log(this.help,'LOADED');
        }).catch(function (err) {
            _this.help = true;
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
            .then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
            console.log("BannerConfig");
        })
            .catch(function (e) { return console.log(e); });
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
    HomePage.prototype.frageSelected = function (n) {
        var _this = this;
        //console.log(n)
        this.getFrage(n).then(function (res) {
            var item = res;
            //  console.log(item);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_view_view__["a" /* ViewPage */], { item: { node: JSON.parse(item) } });
        });
    };
    HomePage.prototype.getFragenIndex = function (page, pages) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/node.json?fields=nid,title,created,status&parameters[type]=rechtsfrage&parameters[status]=1&options[orderby][created]=desc&page=' + page + '&pagesize=' + pages).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HomePage.prototype.getFrage = function (nid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.auth.token).set('Content-Type', 'application/json');
            var options = {
                headers: headers,
                withCredentials: true,
            };
            _this.httpClient.post(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/awri_services_resources/rechtsfrage', { nid: nid }, options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HomePage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.checkPlatform = function () {
        var alert = this.alertCtrl.create({
            title: 'Powered by',
            message: 'AWRI & Rechtsforum Schweiz',
            buttons: ['OK']
        });
        alert.present();
        if (this.plt.is('cordova')) {
            // Do Cordova stuff
        }
        else {
            // Do stuff inside the regular browser
        }
    };
    HomePage.prototype.share = function () {
        if (this.plt.is('cordova')) {
            //    socialShare();
            window['plugins'].socialsharing.share('Alles was Recht ist! Die Schweizer Datenbank für Rechtsfragen.', null, null, 'https://awri.ch');
        }
        else {
            //alert("share Browser");
            this.presentShareSheet();
            // Do stuff inside the regular browser
        }
    };
    HomePage.prototype.presentShareSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: '❤️ Danke fürs Teilen auf...',
            buttons: [
                {
                    text: 'Facebook',
                    role: 'facebook',
                    icon: 'logo-facebook',
                    handler: function () {
                        window.open('https://www.facebook.com/sharer/sharer.php?u=https://awri.ch', '_system');
                    }
                },
                {
                    text: 'Whatsapp',
                    role: 'whatsapp',
                    icon: 'logo-whatsapp',
                    handler: function () {
                        window.open('https://api.whatsapp.com/send?text=Alles was Recht ist! Die Schweizer Datenbank für Rechtsfragen. https://awri.ch', '_system');
                    }
                },
                {
                    text: 'LinkedIn',
                    role: 'linkedin',
                    icon: 'logo-linkedin',
                    handler: function () {
                        window.open('https://www.linkedin.com/shareArticle?mini=true&url=https://awri.ch', '_system');
                    }
                },
                {
                    text: 'Twitter',
                    role: 'twitter',
                    icon: 'logo-twitter',
                    handler: function () {
                        window.open('https://twitter.com/intent/tweet?status=Alles was Recht ist! Die Schweizer Datenbank für Rechtsfragen. https://awri.ch', '_system');
                    }
                },
                {
                    text: 'Google+',
                    role: 'google',
                    icon: 'logo-google',
                    handler: function () {
                        window.open('https://plus.google.com/share?url=https://awri.ch', '_system');
                    }
                },
                {
                    text: 'Email',
                    role: 'email',
                    icon: 'mail',
                    handler: function () {
                        window.open('mailto:?subject=Alles was Recht ist!&body=Die Schweizer Datenbank für Rechtsfragen. https://awri.ch', '_system');
                    }
                },
                {
                    text: 'Schliessen',
                    role: 'cancel',
                    icon: 'close',
                    handler: function () {
                        console.log('Schliessen');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.gotoBereich = function (bereich) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_bereich_bereich__["a" /* BereichPage */], { bereich: bereich });
    };
    HomePage.prototype.doSearch = function () {
        //  this.navCtrl.push(SearchPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */], { text: this.search });
    };
    HomePage.prototype.getRandom = function (pages) {
        var _this = this;
        //  this.navCtrl.push(SearchPage);
        var rnd = Math.floor(Math.random() * (pages - 1));
        this.getFragenIndex(rnd, 1).then(function (n) {
            _this.random = n[0];
        });
        // this.navCtrl.push(SearchPage, { text: this.search });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        if (document.URL.indexOf("?") > 0) {
            var splitURL = document.URL.split("?");
            var splitParams = splitURL[1].split("&");
            var i = void 0;
            for (i in splitParams) {
                var singleURLParam = splitParams[i].split('=');
                if (singleURLParam[0] == "category") {
                    //  this.category = singleURLParam[1];
                }
                if (singleURLParam[0] == "nid") {
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
                var urlParameter = {
                    'name': singleURLParam[0],
                    'value': singleURLParam[1]
                };
                this.urlParameters.push(urlParameter);
                this.frageSelected(urlParameter.value);
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            </ion-buttons>\n             \n            <ion-title>\n              <img src="assets/imgs/logo.png" class="avatar">  AWRI\n              </ion-title>\n      <ion-buttons start>\n  <ng-template [ngIf]="this.auth.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n              <button ion-button (click)="this.gotoLogin()">\n                  <img class="avatar" src="{{this.auth.user.picture}}"> {{auth.user?.name}}        \n                </button>\n  </ng-template>      \n  <ng-template #headerOut>\n              <button ion-button (click)="this.gotoLogin()">\n              <ion-icon name="contact"></ion-icon>  {{auth.user?.name}}\n              </button>\n  </ng-template>\n      </ion-buttons>    \n    </ion-navbar>\n\n</ion-header>\n   \n   <ion-content padding>  \n        <div *ngIf="auth.isInRole(\'anonymous user\')">\n                <ion-card>\n                        <ion-card-header>\n                                <ion-card-title><ion-icon name="contact"></ion-icon> Sie sind nicht angemeldet</ion-card-title>\n                              </ion-card-header>\n                            \n                              <ion-card-content>\n                      <ion-label text-wrap>Bitte registrieren oder anmelden um Zugriff auf erweiterte Funktionen zu erhalten</ion-label>\n                </ion-card-content>\n                <ion-item><ion-buttons right> \n                <button ion-button class="submit-btn" round  type="submit"  (click)="this.gotoLogin();">Anmelden/Registrieren\n                </button> \n                </ion-buttons>\n                </ion-item>   \n                </ion-card>\n            </div>  \n        \n        <ion-title>Alles was Recht ist!</ion-title>\n        <p>Rechtsberatung mit System - \n        Unsere Community hilft kostenlos und unverbindlich bei rechtlichen Fragen.</p>\n        <div *ngIf="help" class="help">\n                <ion-item>\n                <ion-label text-wrap><p><ion-icon name="help"></ion-icon>Angemeldete Benutzer können die Hilfe in den Profileinstellungen auschalten</p></ion-label>\n                </ion-item>\n        </div>\n\n\n      <div *ngIf="help" class="help">\n        <ion-item>\n            <ion-label text-wrap>\n                    <h2>Sie haben ein rechtliches Problem und benötigen Rat?</h2>\n                    <p>Das AWRI System wurde 2015 entwickelt um Personen, die juristischen Rat suchen bestmöglich zu unterstützen.</p>\n                    <p>Wir ersetzen keinen juristischen Beistand, diese Platform ist als erste Hilfestellung für Rechtsfragen gedacht!</p>\n                    <p>Schauen sie Antworten auf ähnliche Fragen in einem der folgenden Bereiche an:</p>\n                  <ul>\n                        <div *ngFor="let bereich of bereiche">                                \n                            <li><ion-icon (click)="gotoBereich(bereich)" name="{{bereich.icon}}"></ion-icon> {{bereich.name}}\n                        </div>\n                  </ul>\n                  <h2>Suchen sie in über {{auth.stats?.nodesc}} Rechtsfragen nach passenden Antwortetn.</h2>\n                    <p>Suchen <ion-icon name="search"></ion-icon> sie gezielt mit verknüpften Schlüsselwörtern in unserer Datenbank mit <strong>{{auth.stats?.nodesc}}</strong> Rechtsfragen und <strong>{{auth.stats?.commentsc}}</strong> Antworten.</p>\n                   \n                    <h2>Sie haben keine passende Lösung gefunden?</h2>\n                    <p>Dann stellen sie eine neue Rechtsfrage in der Facebookgruppe <a href="https://www.facebook.com/groups/RechtsberatungSchweiz/" target="_BLANK"><ion-icon name="logo-facebook"></ion-icon> Rechtsforum Schweiz</a>.</p>\n                    <p>Auf dieser Seite (Frage stellen) können Sie Ihre Frage <strong>anonym</strong> ins Rechtsforum Schweiz stellen lassen.</p>        \n                    <p>Die Mitglieder unserer Facebook Gruppe diskutieren (manchmal auch kontrovers) die Rechtslage und nur die hilfreichsten Antworten werden hier wieder veröffentlicht.</p>        \n                    <p>Wenn ihre Frage hier veröffentlicht wurde können Sie <strong>anonym</strong> Atnworten, indem Sie Ihre Frage hier kommentieren.</p>\n             \n                    <h2>Sie möchten in unserer Community mitmachen und helfen?</h2>   \n                    <p>Dann treten sie einfach unserer Facebookgruppe  <a href="https://www.facebook.com/groups/RechtsberatungSchweiz/" target="_BLANK"><ion-icon name="logo-facebook"></ion-icon> Rechtsforum Schweiz</a> bei.\n                    Wir freuen uns immer auf kompetente und erfahrene Mitstreiter. ❤️</p>\n                    <p>Oder teilen <ion-icon name="share" (click)="share()"></ion-icon> Sie AWRI einfach auf Ihrer Lieblingsplatform. Vielen Dank!</p>            \n               \n                    <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="28" style="line-height:28px;">&nbsp;</td></tr><tr><td style=""><table border="0" width="280" cellspacing="0" cellpadding="0" style="border-collapse:separate;background-color:#ffffff;border:1px solid #dddfe2;border-radius:3px;font-family:Helvetica, Arial, sans-serif;margin:0px auto;"><tr style="padding-bottom: 8px;"><td style=""><img class="img" src="assets/imgs/logo_rechtsforum.jpg" width="280" height="146" alt="" /></td></tr><tr><td style="font-size:14px;font-weight:bold;padding:8px 8px 0px 8px;text-align:center;">Rechtsforum Schweiz</td></tr><tr><td style="color:#90949c;font-size:12px;font-weight:normal;text-align:center;">Geschlossen Gruppe · über 8.000 Mitglieder</td></tr><tr><td style="padding:8px 12px 12px 12px;"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;"><tr><td style="background-color:#4267b2;border-radius:3px;text-align:center;"><a style="color:#3b5998;text-decoration:none;cursor:pointer;width:100%;" href="https://www.facebook.com/plugins/group/join/popup/?group_id=353664054816742&amp;source=email_campaign_plugin" target="_blank" rel="noopener"><table border="0" cellspacing="0" cellpadding="3" align="center" style="border-collapse:collapse;"><tr><td style="border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;color:#FFF;font-family:Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;">Gruppe beitreten</td></tr></table></a></td></tr></table></td></tr><tr><td style="border-top:1px solid #dddfe2;font-size:12px;padding:8px 12px;">\n                        <p>Facebook Rechtsberatung seit 2015</p>\n                            <p>Alle Auskünfte sind kostenlos und UNVERBINDLICH</p>                       \n                           </td></tr></table></td></tr><tr style=""><td height="14" style="line-height:14px;">&nbsp;</td></tr></table>\n                           </ion-label> \n        </ion-item>    \n      </div>\n\n<ion-item>\n        <ion-label> <ion-icon name="search"></ion-icon></ion-label>\n      <ion-input  placeholder="Rechtsfrage suchen..." clearInput\n      [(ngModel)]="search" (change)="doSearch()">\n    </ion-input>\n    <button ion-button item-end (click)="doSearch()" small><ion-icon name="search"></ion-icon></button>\n</ion-item>\n\n<ion-card>\n        <ion-card-header>\n                <ion-card-title>Rechtsfrage vom {{random?.created*1000 | date: \'dd.MM.yyyy H:mm\' }} </ion-card-title>\n              </ion-card-header>\n            \n              <ion-card-content (click)="this.frageSelected(random?.nid)">\n    {{random?.title}}\n      \n</ion-card-content>\n<ion-item><ion-buttons end> \n<button ion-button class="submit-btn" round  type="submit"  (click)="this.getRandom(auth.stats.nodesc);">Zufall\n</button> \n</ion-buttons>\n</ion-item>   \n</ion-card>\n\n<ion-item>\n      <ion-slides *ngIf="bereiche && bereiche.length"  pager autoplay="5000" loop="true" speed="500"> \n          \n<div *ngFor="let bereich of bereiche">\n        <ion-item>  \n        <ion-slide (click)="gotoBereich(bereich)">\n     \n    <h1><ion-icon name="{{bereich.icon}}"></ion-icon> {{bereich.name}}  <ion-badge>{{bereich.count}}</ion-badge>\n    </h1>\n    <p><img src="{{bereich.image}}"></p><br>\n\n    </ion-slide>\n</ion-item>    \n</div>\n      </ion-slides>\n    </ion-item>\n\n      <ion-item>\n            <ion-navbar  text-center>\n            <ion-title><ion-icon name="arrow-round-back"></ion-icon> Kategorien <ion-icon name="arrow-round-forward"></ion-icon></ion-title>\n            </ion-navbar>\n          </ion-item>\n<!--\n      <ion-slides>\n            <ion-slide (click)="gotoBereich(93)">\n                <h1><ion-icon name="construct"></ion-icon>Arbeit</h1>\n                <p>Rechtsfragen aus dem Bereich Arbeitrecht</p>\n            </ion-slide>\n            <ion-slide (click)="gotoBereich(99)">\n                <h1><ion-icon name="briefcase"></ion-icon>Behörden/Schulen</h1>\n            </ion-slide>\n \n            <ion-slide (click)="gotoBereich(98)">\n                    <h1><ion-icon name="contacts"></ion-icon>Familie</h1>\n                </ion-slide>\n                <ion-slide (click)="gotoBereich(97)">\n                    <h1><ion-icon name="medkit"></ion-icon>Gesundheit</h1>\n                </ion-slide>\n                <ion-slide (click)="gotoBereich(96)">\n                        <h1><ion-icon name="cart"></ion-icon> Internet/Konsum</h1>\n                    </ion-slide>\n                    <ion-slide (click)="gotoBereich(95)">\n                        \n                        <h1><ion-icon name="bus"></ion-icon> Reisen/Verkehr</h1>\n                    </ion-slide>\n                    <ion-slide (click)="gotoBereich(94)">\n                            <h1><ion-icon name="home"></ion-icon>Wohnen</h1>\n                    </ion-slide>                 \n             \n      </ion-slides>    \n    -->\n\n  \n    <ion-slides pager autoplay="5000" loop="true" speed="500">\n        <ion-slide>\n                <a href="https://www.facebook.com/groups/RechtsberatungSchweiz/" target="_BLANK">  \n                    <img src="assets/imgs/logo_rechtsforum.jpg">\n                </a>\n            \n                      <ion-item>                          \n                          <ion-icon name="logo-facebook" item-start></ion-icon>\n                          <ion-label text-wrap>\n                             <h2>Rechtsforum Schweiz</h2>\n                             <p>Facebookgruppe mit über 8000 Mitgliedern</p>\n                             <p>Alle Fragen wurden durch die Mitglieder dieser Gruppe beantwortet</p>\n                            </ion-label>                                          \n                       </ion-item>\n                  \n        </ion-slide>\n        <ion-slide>          \n                <a href="{{auth.HOST}}" target="_BLANK">  \n                        <img src="assets/imgs/logo_awri.png?43234">\n                    </a>  \n                        <ion-item>\n                            <ion-icon name="rechzapp-awri" item-start></ion-icon>\n                            <ion-label text-wrap>\n                               <h2>AWRI (Alles was Recht ist)</h2>\n                               <p>Datenbank für Rechtsfragen</p>\n                               <p>In dieser Datenbank werden Rechtsfragen und Antworten ausgewertet und freigeschalten.</p>\n                              </ion-label>\n                         </ion-item>\n                           \n        </ion-slide>\n        <ion-slide>\n                <a href="https://www.facebook.com/Rechtshilfeforum/" target="_BLANK">  \n                    <img src="assets/imgs/logo_ratgeber.jpg">\n                </a>        \n                    <ion-item>\n                        <ion-icon name="logo-facebook" item-start></ion-icon>\n                        <ion-label text-wrap>\n                           <h2>AWRI Ratgeber</h2>\n                           <p>Facebook Seite, auf der von Zeit zu Zeit die interessantesten und meist gefragten Beiträge aus dem Rechtsforum Schweiz veröffentlicht werden.</p>\n                          </ion-label>\n                     </ion-item>          \n        </ion-slide>        \n      </ion-slides>\n\n\n      <ion-item>\n            <ion-navbar text-center>\n        <ion-title><ion-icon name="arrow-round-back"></ion-icon> Systeme <ion-icon name="arrow-round-forward"></ion-icon></ion-title>\n        </ion-navbar>\n        </ion-item>\n        \n      <!--\n    <ion-fab right bottom class="web-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n       </ion-fab>\n       \n       <ion-fab right top edge class="mobile-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n       </ion-fab>\n-->\n\n   </ion-content>\n   <ion-footer>\n        <ion-toolbar> \n            <ion-item>            \n           <button ion-fab icon-only (click)="this.share()" item-start><ion-icon name="share"></ion-icon></button><ion-title>(c) 2015 by AWRI </ion-title>\n        </ion-item>\n        </ion-toolbar>           \n      </ion-footer>\n\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__components_upload_upload__["a" /* UploadComponent */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FragenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_view__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Observable';






var bannerConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    isTesting: true,
    autoShow: true,
};
var FragenPage = /** @class */ (function () {
    function FragenPage(navCtrl, admobFree, httpClient, plt, alertCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.admobFree = admobFree;
        this.httpClient = httpClient;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.auth.get('help').then(function (col) {
            _this.help = col;
            // console.log(this.help,'LOADED');
        }).catch(function (err) {
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
        this.getFragen();
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare()
            .then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
            console.log("BannerConfig");
        })
            .catch(function (e) { return console.log(e); });
    }
    FragenPage.prototype.getFragen = function () {
        var _this = this;
        this.getFragenIndex(this.page, this.pages).then(function (dat) {
            var d = dat;
            for (var i = 0; i < d.length; i++) {
                _this.nodes.push(d[i]);
            }
            _this.page++;
        });
    };
    FragenPage.prototype.getFragenIndex = function (page, pages) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/node.json?fields=nid,title,created,status&parameters[type]=rechtsfrage&parameters[status]=1&options[orderby][created]=desc&page=' + page + '&pagesize=' + pages).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    FragenPage.prototype.getFrage = function (nid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.auth.token).set('Content-Type', 'application/json');
            var options = {
                headers: headers,
                withCredentials: true,
            };
            _this.httpClient.post(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/awri_services_resources/rechtsfrage', { nid: nid }, options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    FragenPage.prototype.getComments = function (nid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/comment.json?parameters[nid]=' + nid + '&parameters[status]=1&pagesize=150').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    FragenPage.prototype.frageSelected = function (n) {
        var _this = this;
        //console.log(n)
        this.getFrage(n.nid).then(function (res) {
            var item = res;
            //  console.log(item);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_view__["a" /* ViewPage */], { item: { node: JSON.parse(item) } });
        });
    };
    FragenPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.getFragen();
            //     console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    FragenPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    FragenPage.prototype.checkPlatform = function () {
        var alert = this.alertCtrl.create({
            title: 'Powered by',
            message: 'AWRI & Rechtsforum Schweiz',
            buttons: ['OK']
        });
        alert.present();
        if (this.plt.is('cordova')) {
            // Do Cordova stuff
        }
        else {
            // Do stuff inside the regular browser
        }
    };
    FragenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fragen',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/fragen/fragen.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            </ion-buttons>\n             \n            <ion-title>\n              Rechtsfragen\n              </ion-title>\n      <ion-buttons start>\n  <ng-template [ngIf]="this.auth.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n              <button ion-button (click)="this.gotoLogin()">\n                  <img class="avatar" src="{{this.auth.user.picture}}"> {{auth.user?.name}}        \n                </button>\n  </ng-template>      \n  <ng-template #headerOut>\n              <button ion-button (click)="this.gotoLogin()">\n              <ion-icon name="contact"></ion-icon>  {{auth.user?.name}}\n              </button>\n  </ng-template>\n      </ion-buttons>    \n    </ion-navbar>\n</ion-header>\n   \n   <ion-content padding>  \n\n        <div *ngIf="auth.isInRole(\'anonymous user\')">\n                <ion-item text-wrap>\n            <ion-label color="danger"><h2>Sie sind nicht angemeldet!</h2>\n                <p>Klicken sie oben Rechts auf <ion-icon name="contact"></ion-icon> um sich auf AWRI zu registrieren oder anzumelden.</p>\n                </ion-label>\n                </ion-item>\n        </div>  \n        \n      <div *ngIf="help" class="help">\n        <ion-item>\n     \n          <ion-label text-wrap>\n              <h2><ion-icon name="help"></ion-icon> Chronologische Liste</h2>\n                    <p>Scrollen sie durch chronologisch absteigende Liste aller Rechtsfragen.</p>\n                    <p>Es werden die gekürzten Titel der Fragen angezeigt.</p>\n                    <p><strong>{{auth.stats?.nodesc}}</strong> Rechtsfragen vom <strong>23.Feb.15</strong> bis <strong>{{auth.stats?.updated}}</strong></p>\n                </ion-label> \n        </ion-item>    \n      </div>\n<br>\n   \n    <ion-list *ngFor="let n of this.nodes">\n      <ion-card>  \n        <ion-item><p>{{n.created*1000 | date: \'dd.MM.yyyy H:mm\' }} </p></ion-item>\n        <ion-card-content text-wrap (click)="this.frageSelected(n)"><h2>{{n.title}}</h2></ion-card-content>\n      </ion-card>\n      </ion-list>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n\n    <ion-fab right bottom class="web-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n          <strong>{{this.page}}</strong>\n        </button>\n       </ion-fab>\n       \n       <ion-fab right top edge class="mobile-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n          <strong>{{this.page*10}}</strong>\n          </button>\n       </ion-fab>\n   </ion-content>\n\n\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/fragen/fragen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], FragenPage);
    return FragenPage;
}());

//# sourceMappingURL=fragen.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bookmarks_bookmarks__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_admin__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, awri) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.awri = awri;
        alert("Constr");
        this.awri.get('help').then(function (data) {
            console.log(data);
            _this.help = data;
            console.log("HELP" + _this.help);
        });
    }
    /*
  ionViewDidLoad() {
      console.log('ionViewDidLoad SettingsPage');
    }
    */
    SettingsPage.prototype.helpChanged = function (evt) {
        var _this = this;
        console.log(evt);
        this.awri.set('help', evt.help).then(function (h) {
            _this.help = h;
            alert(h);
        });
    };
    SettingsPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
    };
    SettingsPage.prototype.gotoBookmarks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_bookmarks_bookmarks__["a" /* BookmarksPage */]);
    };
    SettingsPage.prototype.gotoAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_admin_admin__["a" /* AdminPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/settings/settings.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            </ion-buttons>\n             \n            <ion-title>\n                Einstellungen\n              </ion-title>\n      <ion-buttons start>\n  <ng-template [ngIf]="this.awri.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n              <button ion-button (click)="this.gotoLogin()">\n                  <img class="avatar" src="{{this.awri.user.picture}}"> {{awri.user?.name}}        \n                </button>\n  </ng-template>      \n  <ng-template #headerOut>\n              <button ion-button (click)="this.gotoLogin()">\n              <ion-icon name="contact"></ion-icon>  {{this.awri.user?.name}}\n              </button>\n  </ng-template>\n      </ion-buttons>    \n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Verbunden mit: {{awri.HOST}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Hilfe ein/aus</ion-label>\n    <ion-toggle [(ngModel)]="help" (ionChange)="this.helpChanged(this);" [disabled]="this.awri.isInRole(\'anonymous user\')"></ion-toggle>\n  </ion-item>\n<ion-item>\n    <ion-label item-start>Ihre Lesezeichen</ion-label>\n  <button ion-button (click)="this.gotoBookmarks()" item-end>Ansehen</button>\n</ion-item>\n<ng-template [ngIf]="this.awri.isInRole(\'administrator\')">\n<ion-item>\n    <ion-label item-start>Admin</ion-label>\n  <button ion-button (click)="this.gotoAdmin()" item-end>Ansehen</button>\n</ion-item>\n</ng-template>\n  <drupal7-login></drupal7-login>\n\n</ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CommentComponent = /** @class */ (function () {
    function CommentComponent(auth, alertCtrl) {
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.text = 'Ihre Antwort:';
        this.comment = '';
        this.sent = "Ihre Antwort wird erst erscheinen, wenn sie durch einen Admin freigeschalten wurde.";
    }
    CommentComponent.prototype.addcomment = function () {
        var _this = this;
        if (this.comment.length < 10)
            return this.presentMessage("Ihre Antwort ist zu kurz!");
        var c = {
            "nid": this.nid,
            //  "status":0,
            "subject": this.auth.user.name,
            "comment_body": {
                "und": [{
                        "value": this.comment
                    }]
            }
        };
        this.auth.addComment(c).then(function (data) {
            _this.presentMessage("Ihr Kommentar wurde gesendet");
            _this.comment = "";
            console.log(data);
        }).catch(function (err) {
            _this.presentMessage("Anonyme Benutzer können nicht auf Rechtesfragen antworten.");
            _this.comment = "";
            console.log(err);
        });
        //   console.log(c);
        //alert(this.nid+this.comment);
    };
    CommentComponent.prototype.presentMessage = function (txt) {
        var alert = this.alertCtrl.create({
            title: 'Antwort senden',
            subTitle: txt,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CommentComponent.prototype, "nid", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'comment',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/components/comment/comment.html"*/'<!-- Generated template for the CommentComponent component -->\n<div>\n\n\n      <ion-title>{{text}}</ion-title>\n      <ion-label text-wrap color="danger">{{sent}}</ion-label>\n      <ion-item text-wrap>\n        <ion-textarea [(ngModel)]="comment"  name="comment" id="commentField" [disabled]="auth.isInRole(\'anonymous user\')"></ion-textarea>\n        </ion-item>      \n   \n    <button ion-button round full (click)="addcomment()"  [disabled]="auth.isInRole(\'anonymous user\')"> Antwort senden</button>\n \n</div>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/components/comment/comment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CommentComponent);
    return CommentComponent;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BookmarkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BookmarkComponent = /** @class */ (function () {
    function BookmarkComponent(auth, alertCtrl) {
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.isBookMark = false;
        this.color = "primary";
        this.count = 0;
        //  console.log('Hello BookmarkComponent Component'+this._nid);
        //  this.text = 'Hello World'+this._nid;
    }
    Object.defineProperty(BookmarkComponent.prototype, "nid", {
        get: function () { return this._nid; },
        set: function (_nid) {
            var _this = this;
            this.auth.isFlagged(_nid, 'bookmarks').then(function (flag) {
                _this.isBookMark = flag;
                if (_this.isBookMark)
                    _this.color = "danger";
                else
                    _this.color = "primary";
                console.log(_this.color);
            });
            this.auth.getFlagCount(_nid, 'bookmarks').then(function (data) {
                console.log(data);
                _this.count = data;
            }).catch(function (data) {
                _this.count = data;
                console.log(data);
            });
            this._nid = (_nid && _nid.trim()) || '<no nid set>';
        },
        enumerable: true,
        configurable: true
    });
    BookmarkComponent.prototype.setBookmark = function () {
        var _this = this;
        if (this.auth.isInRole('anonymous user')) {
            var alert_1 = this.alertCtrl.create({
                title: 'Bitte melden sie sich an!',
                subTitle: 'Nur auf AWRI angemeldete Benutzer können Lesezeichen setzen.',
                buttons: ['Weiter']
            });
            alert_1.present();
            return;
        }
        var flag = this.isBookMark ? "unflag" : "flag";
        this.auth.setFlag(this._nid, 'bookmarks', flag).then(function (data) {
            _this.isBookMark = data;
            if (_this.isBookMark)
                _this.color = "danger";
            else
                _this.color = "primary";
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('nid'),
        __metadata("design:type", String)
    ], BookmarkComponent.prototype, "_nid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BookmarkComponent.prototype, "nid", null);
    BookmarkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bookmark',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/components/bookmark/bookmark.html"*/'\n<ion-icon name="bookmark" (click)="setBookmark()" color="{{color}}" title="Lesezeichen setzten/entfernen"></ion-icon><ion-badge color="secondary">{{count}}</ion-badge>\n\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/components/bookmark/bookmark.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], BookmarkComponent);
    return BookmarkComponent;
}());

//# sourceMappingURL=bookmark.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_create_create__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_help_help__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_view_view__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_search_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bookmarks_bookmarks__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_fragen_fragen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_admin_admin__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_bereich_bereich__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_drupal7_login_drupal7_login__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_admob_free__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_upload_upload__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_comment_comment__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_stats_stats__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_bookmark_bookmark__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_bereich_bereich__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bookmarks_bookmarks__["a" /* BookmarksPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_fragen_fragen__["a" /* FragenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_bereich_bereich__["a" /* BereichPage */],
                __WEBPACK_IMPORTED_MODULE_21__components_drupal7_login_drupal7_login__["a" /* Drupal7LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_upload_upload__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_comment_comment__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_bookmark_bookmark__["a" /* BookmarkComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_bereich_bereich__["a" /* BereichComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bereich/bereich.module#BereichPageModule', name: 'BereichPage', segment: 'bereich', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookmarks/bookmarks.module#BookmarksPageModule', name: 'BookmarksPage', segment: 'bookmarks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create/create.module#CreatePageModule', name: 'CreatePage', segment: 'create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view/view.module#ViewPageModule', name: 'ViewPage', segment: 'view', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bookmarks_bookmarks__["a" /* BookmarksPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_fragen_fragen__["a" /* FragenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_bereich_bereich__["a" /* BereichPage */],
                __WEBPACK_IMPORTED_MODULE_28__components_bookmark_bookmark__["a" /* BookmarkComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_drupal7_login_drupal7_login__["a" /* Drupal7LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_bereich_bereich__["a" /* BereichComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_24__components_upload_upload__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_26__components_comment_comment__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_bookmark_bookmark__["a" /* BookmarkComponent */],
                __WEBPACK_IMPORTED_MODULE_27__providers_stats_stats__["a" /* StatsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewPage = /** @class */ (function () {
    function ViewPage(httpClient, actionSheetCtrl, navCtrl, navParams, awri) {
        this.httpClient = httpClient;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.awri = awri;
        //this.awri=awri;
        this.item = navParams.get('item');
        this.nid = this.item.node.nid;
        this.title = this.item.node.title;
        //console.log(this.item.node);
        this.getComments(this.item.node.nid);
        this.images = this.item.node.field_image['und'];
    }
    ViewPage.prototype.getComments = function (nid) {
        this.comments = this.httpClient.get(this.awri.HOST + '/drupalgap/comment.json?parameters[nid]=' + nid + '&parameters[status]=1&pagesize=150')
            .map(function (res) { return res; });
    };
    ViewPage.prototype.replaceString = function (str) {
        return str.replace('<strong>', '<br><strong>');
    };
    ViewPage.prototype.goBack = function () {
        //this.navCtrl.push(SearchPage);
        this.navCtrl.pop();
    };
    ViewPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ViewPage.prototype.shareLink = function () {
        if (this.awri.isBrowser()) {
            this.presentLinkSheet();
        }
        else {
            window['plugins'].socialsharing.share(this.title, null, null, this.awri.HOST + '/node/' + this.nid);
        }
    };
    ViewPage.prototype.presentLinkSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Beitrag Teilen',
            buttons: [
                {
                    text: 'Facebook',
                    role: 'facebook',
                    icon: 'logo-facebook',
                    handler: function () {
                        window.open('https://www.facebook.com/sharer/sharer.php?u=' + _this.awri.HOST + '/node/' + _this.nid, '_system');
                    }
                },
                {
                    text: 'Whatsapp',
                    role: 'whatsapp',
                    icon: 'logo-whatsapp',
                    handler: function () {
                        window.open('https://api.whatsapp.com/send?text=' + _this.title + ' ' + _this.awri.HOST + '/node/' + _this.nid, '_system');
                    }
                },
                {
                    text: 'LinkedIn',
                    role: 'linkedin',
                    icon: 'logo-linkedin',
                    handler: function () {
                        window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + _this.awri.HOST + '/node/' + _this.nid, '_system');
                    }
                },
                {
                    text: 'Twitter',
                    role: 'twitter',
                    icon: 'logo-twitter',
                    handler: function () {
                        window.open('https://twitter.com/intent/tweet?status=' + _this.title + ' ' + _this.awri.HOST + '/node/' + _this.nid, '_system');
                    }
                },
                {
                    text: 'Google+',
                    role: 'google',
                    icon: 'logo-google',
                    handler: function () {
                        window.open('https://plus.google.com/share?url=' + _this.awri.HOST + '/node/' + _this.nid, '_system');
                    }
                },
                {
                    text: 'Email',
                    role: 'email',
                    icon: 'mail',
                    handler: function () {
                        window.open('mailto:?subject=Alles was Recht ist!&body=' + _this.title + ' ' + _this.awri.HOST + '/node/' + _this.nid, '_system');
                    }
                },
                {
                    text: 'Schliessen',
                    role: 'cancel',
                    handler: function () {
                        console.log('Schliessen');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/view/view.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-buttons end>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          </ion-buttons>\n           \n          <ion-title>\n              ID:{{this.nid}}\n            </ion-title>\n    <ion-buttons start>\n<ng-template [ngIf]="this.awri.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n            <button ion-button (click)="this.gotoLogin()">\n                <img class="avatar" src="{{this.awri.user.picture}}"> {{awri.user.name}}        \n              </button>\n</ng-template>      \n<ng-template #headerOut>\n            <button ion-button (click)="this.gotoLogin()">\n            <ion-icon name="contact"></ion-icon>  {{awri.user.name}}\n            </button>\n</ng-template>\n    </ion-buttons>    \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n        <div *ngIf="this.awri.help" class="help">\n                <ion-item>\n                        <ion-label text-wrap>\n                                <ion-icon name="share"></ion-icon>Teilen sie den angezeigten Beitrag auf gängigen Platformen\n                            </ion-label>\n                    </ion-item>\n                    <ion-item>\n                            <ion-label text-wrap>\n                                    <ion-icon name="link"></ion-icon>Den Beitrag auf <strong>{{this.awri.HOST}}</strong> ansehen.\n                                </ion-label>\n                        </ion-item>\n\n                    <ion-item>\n                    <ion-label text-wrap>\n                            <ion-icon name="contact"></ion-icon>Nur auf AWRI angemeldete Benutzer können die Fragesteller sehen.\n                        </ion-label>\n                </ion-item>\n\n                <ion-item>\n                        <ion-label text-wrap>\n                                <ion-icon name="logo-facebook"></ion-icon>Mitglieder der Gruppe Rechtsforum Schweiz können direkt zum Originalbeitrag.\n                                <p>Falls der Beitrag noch vorhanden ist.</p>\n                            </ion-label>\n                    </ion-item>\n                <ion-item>\n                        <ion-label text-wrap>\n                                <ion-icon name="bookmark"></ion-icon>Nur auf AWRI angemeldete Benutzer können Lesezeichen setzen. \n                                <p><ion-icon name="bookmark" color="danger"></ion-icon>=Lesezeichen gesetzt, <ion-icon name="bookmark" color="primary"></ion-icon>=Kein Lesezeichen gesetzt</p>\n                                <p> Die Anzahl aller Benutzer die dieses Lesezeichen gesetzt haben wird anzeigt.</p> \n                            </ion-label>\n                    </ion-item>\n                        <ion-item>\n                        <ion-label text-wrap>\n                               Nur angemeldete Benutzer können auf Fragen antworten.                                \n                                                        </ion-label>\n                        </ion-item>\n                        </div>\n    <ion-card>\n        <ion-card-content>\n        <ion-item>\n            <ng-template [ngIf]="awri.isInRole(\'authenticated user\')" [ngIfElse]="loggedOut">\n                <ion-avatar item-start *ngIf="item.node.field_fbid?.und?.length>0">\n                   <img class="avatar" src="https://graph.facebook.com/{{item.node?.field_fbid.und[0].value}}/picture"> \n                 </ion-avatar>\n                 <h2 *ngIf="item.node.field_fbname?.und?.length>0" text-capitalize>{{item.node?.field_fbname.und[0].value}}</h2> \n                  </ng-template>\n            <ng-template #loggedOut>\n                    <ion-avatar item-start>\n                        <img class="avatar" src="assets/imgs/anonymous.png"> \n                      </ion-avatar>\n                      <h2 text-capitalize>Nicht angezeigt</h2>\n                    </ng-template>\n                 <p>{{item.node.created*1000 | date: \'dd.MM.yyyy H:mm\' }}</p> \n              \n    \n            <!--\n                                      <ng-template [ngIf]="awri.isInRole(\'administrator\')">\n                          <a href="https://facebook.com/{{item.node?.field_fbid.und[0].value}}" target="new"><ion-icon name="contact"></ion-icon></a>\n                 </ng-template>\n                 <a *ngIf="item.node.field_fbmid.und" href="https://facebook.com/{{item.node.field_fbmid.und[0].value}}" target="new"><ion-icon name="logo-facebook"></ion-icon></a>\n                 <a href="{{this.awri.HOST}}/node/{{item.node.nid}}" target="new"> <ion-icon name="link"></ion-icon></a>     \n                </ng-template>\n               <ng-template #loggedOut>\n                   <ion-avatar item-start>\n                       <img class="avatar" src="assets/imgs/anonymous.png"> \n                     </ion-avatar>\n                     <h2 text-capitalize>Nicht angezeigt</h2>\n                 -->\n\n                  \n          </ion-item>\n                  \n            <ion-item text-wrap>\n             <h2 innerHTML="{{item.node.body[\'und\'][0].value}}"></h2>\n            </ion-item>\n\n            <ion-row>\n                    <ion-segment [(ngModel)]="pet">\n                            <ng-template [ngIf]="awri.isInRole(\'administrator\')">\n                  <ion-segment-button value="profil" *ngIf="item.node.field_fbid?.und?.length>0">\n                        <a href="https://facebook.com/{{item.node?.field_fbid.und[0].value}}" target="new" title="Facebook Benutzerprofil ansehen"><ion-icon name="contact"></ion-icon></a>\n                  </ion-segment-button>\n                  </ng-template>\n                  <ion-segment-button value="facebook">\n                        <a *ngIf="item.node.field_fbmid.und" title="Originalbeitrag auf Facebook ansehen" href="https://facebook.com/{{item.node.field_fbmid.und[0].value}}" target="new"><ion-icon name="logo-facebook"></ion-icon></a>\n                  </ion-segment-button>\n                  <ion-segment-button value="awri">\n                        <a href="{{this.awri.HOST}}/node/{{item.node.nid}}" title="Beitrag auf AWRI ansehen" target="new"> <ion-icon name="link"></ion-icon></a>     \n                    </ion-segment-button>\n                    <ion-segment-button value="share">\n                            <ion-icon name="share" (click)="shareLink()" title="Diesen Beitrag teilen"></ion-icon>\n                            </ion-segment-button>\n                    \n\n                    <ion-segment-button value="bookmark">\n                    <bookmark [nid]="item.node.nid"></bookmark>\n                    </ion-segment-button>\n                </ion-segment>\n            \n              </ion-row>\n              <bereich nid="{{item.node.nid}}" tid="{{item.node.field_bereiche[\'und\'] ? item.node.field_bereiche[\'und\'][0].tid:0}}"></bereich>\n     \n        </ion-card-content>\n        </ion-card>\n        <p *ngFor="let image of images">        \n       <img src="{{this.awri.getImagePath(image.uri)}}">\n        </p>\n<p *ngFor="let comment of comments | async">\n  <ion-card class="answers">\n        <ion-card-content>\n    <ion-item text-wrap>\n        <h2><strong>{{comment.subject}}</strong></h2>  <h2 innerHTML="{{comment.comment_body[\'und\'][0].safe_value}}"></h2> \n      </ion-item>      \n    </ion-card-content>\n  </ion-card>\n</p>\n\n\n<comment nid="{{this.nid}}"></comment>\n\n<button ion-button icon-only (click)="this.goBack()">\n    <ion-icon name="arrow-back"></ion-icon>\n</button>\n\n</ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/view/view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], ViewPage);
    return ViewPage;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_create_create__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_help_help__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_fragen_fragen__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { SettingsPage } from '../pages/settings/settings';



//import { ListPage } from '../pages/list/list';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.auth = auth;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'AWRI', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Rechtsfragen', component: __WEBPACK_IMPORTED_MODULE_9__pages_fragen_fragen__["a" /* FragenPage */] },
            { title: 'Suchen', component: __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */] },
            { title: 'Frage stellen', component: __WEBPACK_IMPORTED_MODULE_6__pages_create_create__["a" /* CreatePage */] },
            //  { title: 'Einstellungen', component: SettingsPage },
            { title: 'Hilfe', component: __WEBPACK_IMPORTED_MODULE_7__pages_help_help__["a" /* HelpPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/app/app.html"*/'<ion-split-pane when="sm">\n\n    <ion-menu [content]="content" side="right">\n      <ion-header>\n        <ion-toolbar color="dark">\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n   \n      <ion-content class="menu-container">\n        <ion-list no-lines>\n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="transparent list-item">\n            {{p.title}} \n\n          </button>\n        </ion-list>\n      </ion-content>\n   \n    </ion-menu>\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n    </ion-split-pane>'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drupal7LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Drupal7LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var Drupal7LoginComponent = /** @class */ (function () {
    function Drupal7LoginComponent(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        console.log('Hello Drupal7LoginComponent Component');
        /*
        this.auth.connect.subscribe(user=>{
          this.text=user.name;
          console.log(user);
        })
        */
    }
    Drupal7LoginComponent.prototype.logout = function () {
        this.auth.logout().then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });
    };
    Drupal7LoginComponent.prototype.dologin = function () {
        var _this = this;
        //alert('username: ' + this.username);
        this.auth.login(this.username, this.password).then(function (data) {
            console.log(data);
        }).catch(function (err) {
            _this.username = "";
            _this.password = "";
            console.log(err);
        });
    };
    Drupal7LoginComponent.prototype.fblogin = function () {
        var _this = this;
        this.auth.fblogin().then(function (data) {
            var dat = data;
            console.log(data);
            _this.auth.fboauth(dat.authResponse.accessToken).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ;
    Drupal7LoginComponent.prototype.gotoRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_register_register__["a" /* RegisterPage */]);
    };
    Drupal7LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'drupal7-login',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/components/drupal7-login/drupal7-login.html"*/'<!-- Generated template for the Drupal7LoginComponent component -->\n\n\n<div *ngIf="this.auth.loggedIn; then loggedin else notloggedin">\n</div>\n\n<ng-template #loggedin>\n        <ion-item><ion-label color="primary"> {{this.auth.user.name}} </ion-label> </ion-item>\n        <ion-buttons><button ion-button (click)="logout()">Abmelden</button></ion-buttons>\n</ng-template>\n    \n\n    <ng-template #notloggedin>\n            <ion-item><ion-label color="danger"> Sie sind nicht auf AWRI angemeldet </ion-label> </ion-item>\n            <form #loginForm="ngForm" (ngSubmit)="dologin()" autocomplete="off">\n                    <ion-row>\n                      <ion-col>\n                        <ion-list inset>\n                          <ion-item>\n                            <ion-input placeholder="Benutzername" name="username" id="userField"\n                                       type="text" required [(ngModel)]="username" #userField></ion-input>\n                          </ion-item>\n                          <ion-item>\n                            <ion-input placeholder="Password" name="password" id="passwordField"\n                                       type="password" required [(ngModel)]="password"></ion-input>\n                          </ion-item>\n                        </ion-list>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col>\n                        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n                        <button ion-button class="submit-btn" full round type="submit"\n                                [disabled]="!loginForm.form.valid">Anmelden\n                        </button> \n                       </ion-col>\n                    </ion-row>    \n                      </form>  \n                      <button ion-button round  full  (click)="fblogin()"> <ion-icon name="logo-facebook"></ion-icon>Facebook</button>    \n                      <button ion-button round  full  (click)="gotoRegister()">Registrieren</button>    \n                       \n    </ng-template>\n  \n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/components/drupal7-login/drupal7-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]])
    ], Drupal7LoginComponent);
    return Drupal7LoginComponent;
}());

//# sourceMappingURL=drupal7-login.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StatsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StatsProvider = /** @class */ (function () {
    function StatsProvider(http) {
        this.http = http;
        console.log('Hello StatsProvider Provider');
    }
    StatsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StatsProvider);
    return StatsProvider;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BereichComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BereichComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BereichComponent = /** @class */ (function () {
    function BereichComponent(auth, http) {
        var _this = this;
        this.auth = auth;
        this.http = http;
        //console.log('Hello BereichComponent Component');
        //this.text = 'Hello World';
        this.getBereiche().then(function (dat) {
            _this.bereiche = dat;
            //   console.log(this.bereiche);
            //  alert(this.nid+"<--->"+this.tid);
        });
    }
    BereichComponent.prototype.getBereiche = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-CSRF-TOKEN', _this.auth.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            _this.http.get(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/taxonomy_term?page=0&fields=vid,name&&parameters[vid]=4&pagesize=27&options[orderby][weight]=asc', options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    BereichComponent.prototype.selectBereich = function (evt) {
        console.log(evt);
        this.updateNode();
    };
    BereichComponent.prototype.updateNode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-CSRF-TOKEN', _this.auth.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            var node = {
                node: {
                    nid: _this.nid,
                    field_bereiche: { und: { tid: _this.tid } }
                }
            };
            console.log(node);
            _this.http.put(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/node/' + _this.nid, node, options).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], BereichComponent.prototype, "nid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], BereichComponent.prototype, "tid", void 0);
    BereichComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bereich',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/components/bereich/bereich.html"*/'\n  <ion-item>\n    <ion-label>Bereich</ion-label>\n\n    <ion-select [(ngModel)]="tid" name="bereich" (ionChange)="selectBereich($event)" disabled="{{!this.auth.isInRole(\'administrator\')}}">\n\n        <ion-option *ngFor="let item of bereiche" value="{{item.tid}}" id="{{item.tid}}">{{item.name}}</ion-option>\n\n    </ion-select>\n  </ion-item>    \n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/components/bereich/bereich.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BereichComponent);
    return BereichComponent;
}());

//# sourceMappingURL=bereich.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        this.auth.register(this.username, this.password, this.email).then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
            console.log(err.error.form_errors);
            if (err.status == 403)
                return _this.showError("Zugriff nicht erlaubt!");
            var key = Object.keys(err.error.form_errors)[0];
            _this.showError(err.error.form_errors[key]);
        });
        // console.log(this.email);
        // console.log(this.username);
        // console.log(this.password);
    };
    RegisterPage.prototype.fblogin = function () {
        var _this = this;
        this.auth.fblogin().then(function (data) {
            var dat = data;
            console.log(data);
            _this.auth.fboauth(dat.authResponse.accessToken).then(function (res) {
                console.log(res);
                _this.username = _this.auth.user.name;
            });
        });
    };
    ;
    RegisterPage.prototype.showError = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Fehler',
            message: msg,
            buttons: ['Weiter']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-buttons start>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          </ion-buttons>\n           \n          <ion-title>\n              Registrieren \n            </ion-title>\n    <ion-buttons end>\n<ng-template [ngIf]="this.auth.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n            <button ion-button>\n                <img class="avatar" src="{{this.auth.user.picture}}"> {{auth.user.name}}        \n              </button>\n</ng-template>      \n<ng-template #headerOut>\n            <button ion-button>\n            <ion-icon name="contact"></ion-icon>  {{auth.user.name}}\n            </button>\n</ng-template>\n    </ion-buttons>    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n  <ion-card-content text-wrap>Erstellen sie ein neues AWRI Profil um Zugriff auf erweiterte Funktionen zu erhalten.\n  </ion-card-content>\n  </ion-card>\n  <form #registerForm="ngForm" (ngSubmit)="registerUser()" autocomplete="off">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n              <ion-item>\n                  <ion-input placeholder="Ihr Benutzername" name="username" id="userField"\n                             type="text" required [(ngModel)]="username" #user></ion-input>\n                </ion-item>\n            <ion-item>\n              <ion-input placeholder="Ihre Email Adresse" name="email" id="emailField"\n                         type="email" required [(ngModel)]="email" #user></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input placeholder="Password" name="password" id="passwordField"\n                         type="password" required [(ngModel)]="password"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n          <button ion-button round full class="submit-btn" type="submit"\n                  [disabled]="!registerForm.form.valid">Profil erstellen\n          </button>        \n          </ion-col>\n      </ion-row>        \n    </form>\n    <ion-label text-wrap>Klicken sie hier um sich mit Ihrem Facebook Profil zu registrieren.</ion-label>\n    <button ion-button round full (click)="fblogin()"> <ion-icon name="logo-facebook"></ion-icon> &nbsp;&nbsp;&nbsp; über Facebook registrieren</button>     \n\n</ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_view__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HttpClient,HttpHeaders } from '@angular/common/http';


/**
 * Generated class for the BookmarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookmarksPage = /** @class */ (function () {
    function BookmarksPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.page = navParams.get('page') || 0;
        //  console.log(this.page);
    }
    BookmarksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookmarksPage');
        this.gotoPage(this.page);
    };
    BookmarksPage.prototype.gotoPage = function (nr) {
        var _this = this;
        this.page = nr;
        this.auth.getBookmarks(this.page).then(function (data) {
            var arr = data;
            _this.pages = arr.view.pages;
            _this.nodes = arr.nodes;
            console.log(_this.nodes);
        });
    };
    BookmarksPage.prototype.itemSelected = function (item) {
        var _this = this;
        console.log(item);
        this.auth.loadNode(item.nid).then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_view_view__["a" /* ViewPage */], { item: { node: data } });
        });
    };
    BookmarksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookmarks',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/bookmarks/bookmarks.html"*/'<!--\n  Generated template for the BookmarksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ihre Lesezeichen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>Seite {{1+this.page}}/{{this.pages}}</h1>\n    <ion-row>\n        <ion-col *ngFor="let node of nodes" col-12 col-md-4>\n          <ion-item text-wrap (click)="itemSelected(node.node)">\n            <ion-avatar><img src="https://graph.facebook.com/{{node.node.fbid}}/picture"><ion-title>{{node.node.fbname}}</ion-title>\n            </ion-avatar>\n            <p>{{node.node.created}}</p>\n            <h2>{{node.node.title}}</h2>\n        </ion-item>  \n        <ion-item>\n            <ion-icon name="chatboxes" item-start></ion-icon>\n    \n            <ion-badge item-end>{{node.node?.comment_count}}</ion-badge>\n          </ion-item>\n        </ion-col>\n          </ion-row>\n<span *ngIf="this.page>0">\n<button ion-button (click)="gotoPage(this.page-1)">Zurück</button>\n</span>\n{{this.page+1}}/{{this.pages}}\n<span *ngIf="this.page<this.pages-1">\n<button ion-button (click)="gotoPage(this.page+1)">Weiter</button>\n</span>\n</ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/bookmarks/bookmarks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], BookmarksPage);
    return BookmarksPage;
}());

//# sourceMappingURL=bookmarks.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_view__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Observable';





var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, httpClient, plt, alertCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.auth.get('help').then(function (col) {
            _this.help = col;
            // console.log(this.help,'LOADED');
        }).catch(function (err) {
            console.log(err);
        });
        this.nodes = [];
        this.cnt = 0;
        this.page = 0;
        this.pages = 30;
        this.getFragen();
    }
    AdminPage.prototype.getFragen = function () {
        var _this = this;
        this.getFragenIndex(this.page, this.pages).then(function (dat) {
            var d = dat;
            //console.log(d);
            for (var i = 0; i < d.length; i++) {
                //  this.nodes.push(d[i]);
                _this.getFrage(d[i].nid).then(function (n) {
                    _this.nodes.push(JSON.parse(n[0]));
                    //console.log(this.nodes);
                });
            }
        });
        this.page++;
    };
    AdminPage.prototype.getFragenIndex = function (page, pages) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/node?fields=nid,title,created,status&parameters[type]=rechtsfrage&parameters[status]=1&options[orderby][created]=desc&page=' + page + '&pagesize=' + pages).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminPage.prototype.getFrage = function (nid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.auth.token).set('Content-Type', 'application/json');
            var options = {
                headers: headers,
                withCredentials: true,
            };
            _this.httpClient.post(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/awri_services_resources/rechtsfrage', { nid: nid }, options).subscribe(function (data) {
                _this.cnt++;
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminPage.prototype.getComments = function (nid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.auth.HOST + '/' + _this.auth.ENDPOINT + '/comment.json?parameters[nid]=' + nid + '&parameters[status]=1&pagesize=150').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AdminPage.prototype.frageSelected = function (n) {
        var _this = this;
        //console.log(n)
        this.getFrage(n.nid).then(function (res) {
            var item = res;
            //  console.log(item);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_view__["a" /* ViewPage */], { item: { node: JSON.parse(item) } });
        });
    };
    AdminPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.getFragen();
            //     console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    AdminPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    AdminPage.prototype.checkPlatform = function () {
        var alert = this.alertCtrl.create({
            title: 'Powered by',
            message: 'AWRI & Rechtsforum Schweiz',
            buttons: ['OK']
        });
        alert.present();
        if (this.plt.is('cordova')) {
            // Do Cordova stuff
        }
        else {
            // Do stuff inside the regular browser
        }
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/admin/admin.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            </ion-buttons>\n             \n            <ion-title>\n              <img src="assets/imgs/logo.png" class="avatar">  Admin - {{this.cnt}}\n              </ion-title>\n      <ion-buttons start>\n  <ng-template [ngIf]="this.auth.isInRole(\'authenticated user\')" [ngIfElse]="headerOut">\n              <button ion-button (click)="this.gotoLogin()">\n                  <img class="avatar" src="{{this.auth.user.picture}}"> {{auth.user?.name}}        \n                </button>\n  </ng-template>      \n  <ng-template #headerOut>\n              <button ion-button (click)="this.gotoLogin()">\n              <ion-icon name="contact"></ion-icon>  {{auth.user?.name}}\n              </button>\n  </ng-template>\n      </ion-buttons>    \n    </ion-navbar>\n</ion-header>\n   \n   <ion-content padding>  \n\n        <div *ngIf="auth.isInRole(\'anonymous user\')">\n                <ion-item text-wrap>\n            <ion-label color="danger"><h2>Sie sind nicht angemeldet!</h2>\n                <p>Klicken sie oben Rechts auf <ion-icon name="contact"></ion-icon> um sich auf AWRI zu registrieren oder anzumelden.</p>\n                </ion-label>\n                </ion-item>\n        </div>  \n        \n      <div *ngIf="help" class="help">\n        <ion-item>\n     \n          <ion-label text-wrap>\n              <h2><strong>{{auth.stats?.nodesc}}</strong> Rechtsfragen</h2>\n                    <p>Scrollen sie durch chronologische Liste der Rechtsfragen.</p>\n                    <p>Rechtsfragen vom <strong>23.Feb.15</strong> bis <strong>{{auth.stats?.updated}}</strong></p>\n                </ion-label> \n        </ion-item>    \n      </div>\n<br>\n   \n    <ion-list *ngFor="let n of this.nodes">\n      <ion-card> \n          <ion-item> \n            <ion-avatar item-start *ngIf="n.field_fbid?.und?.length>0">\n                    <img class="avatar" src="https://graph.facebook.com/{{n?.field_fbid.und[0].value}}/picture"> \n                  </ion-avatar>\n                  <h2 *ngIf="n.field_fbname?.und?.length>0" text-capitalize> {{n.field_fbname.und[0].value}}</h2> \n                </ion-item>\n        <ion-item><p>{{n.created*1000 | date: \'dd.MM.yyyy H:mm\' }}</p></ion-item>\n        <ion-card-content text-wrap (click)="this.frageSelected(n)"><h2>{{n.title}}</h2></ion-card-content>\n        <bereich nid="{{n.nid}}" tid="{{n.field_bereiche[\'und\'] ? n.field_bereiche[\'und\'][0].tid:\'\'}}"></bereich>\n      </ion-card>\n      </ion-list>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n\n    <ion-fab right bottom class="web-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n         {{this.page}}\n        </button>\n       </ion-fab>\n       \n       <ion-fab right top edge class="mobile-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n            {{this.page*10}}\n        </button>\n       </ion-fab>\n   </ion-content>\n\n\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/admin/admin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    function UploadComponent(awri, camera, loadingCtrl) {
        this.awri = awri;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.files = [];
        this.hideUpl = false;
        this.toggleVideo = false;
        this.toggleFiles = false;
        this.toggleCamera = false;
        this.togglePhoto = false;
        this.MAX_UPLOADS = 5;
        this.fieldname = "images";
        this.text = 'Sie können bis zu ' + this.MAX_UPLOADS + ' Bilddateien anhängen.';
        for (var i = 0; i < this.MAX_UPLOADS; i++)
            this.files.push({ fid: -1, name: '', src: '', uploaded: false });
    }
    UploadComponent.prototype.nativeSelectFile = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var id = _this.getImageID();
            _this.files[id].fid = -1;
            _this.files[id].src = base64Image;
            _this.files[id].name = _this.awri.user.uid + "-nativecam-" + Date.now() + ".jpg";
            var input = document.getElementById(_this.fieldname + '' + id);
            input.name = _this.files[id].name;
            input.src = _this.files[id].src;
            _this.hideUpload();
        }, function (err) {
            console.log(err);
            // this.awri.showError(err);
        });
    };
    UploadComponent.prototype.nativeCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var id = _this.getImageID();
            _this.files[id].fid = -1;
            _this.files[id].src = base64Image;
            _this.files[id].name = _this.awri.user.uid + "-nativecam-" + Date.now() + ".jpg";
            var input = document.getElementById(_this.fieldname + '' + id);
            input.src = _this.files[id].src;
            input.name = _this.files[id].name;
            _this.hideUpload();
        }, function (err) {
            console.log(err);
            //  this.awri.showError(err);
        });
    };
    UploadComponent.prototype.toggleVid = function () {
        if (this.toggleVideo)
            this.toggleVideo = false;
        else
            this.toggleVideo = true;
        this.toggleFiles = false;
    };
    UploadComponent.prototype.toggleFil = function () {
        if (this.toggleFiles)
            this.toggleFiles = false;
        else
            this.toggleFiles = true;
        this.toggleVideo = false;
    };
    UploadComponent.prototype.toggleCam = function (evt) {
        if (this.toggleCamera) {
            //webmedia.js
            stopVideo();
            this.togglePhoto = false;
            this.toggleCamera = false;
            this.toggleVideo = false;
            evt.target.innerHTML = "Start Kamera";
        }
        else {
            //webmedia.js 
            startVideo('video1');
            this.togglePhoto = true;
            this.toggleCamera = true;
            evt.target.innerHTML = "Stop Kamera";
        }
    };
    UploadComponent.prototype.getFiles = function () {
        var f = [];
        // console.log(this.files);
        // alert(this.files.length)
        for (var i = 0; i < this.MAX_UPLOADS; i++) {
            var input = document.getElementById(this.fieldname + '' + i);
            console.log(input);
            // alert(this.files[i].fid);
            // if(this.files[i].fid!=-1)f.push({fid:this.files[i].fid});
            if (input)
                if (input.fid != -1 && input.name != '')
                    f.push({ fid: input.fid });
        }
        return f;
    };
    UploadComponent.prototype.removeImage = function (index) {
        var input = document.getElementById(this.fieldname + '' + index);
        input.src = '';
        this.files[index].fid = -1;
        this.files[index].name = '';
        this.files[index].src = '';
        this.files[index].uploaded = false;
        this.hideUpl = false;
    };
    UploadComponent.prototype.selectWebFile = function (elem) {
        var _this = this;
        var i = this.getImageID();
        //webmedia.js
        webpreviewFile(elem.srcElement, 'img#' + this.fieldname + i).then(function (data) {
            _this.files[i].fid = -1;
            _this.files[i].src = data.src;
            _this.files[i].name = _this.awri.user.uid + '-' + data.name;
            //  alert("ID"+i+' - '+data.name);      
            _this.hideUpload();
            console.log(_this.files);
        }).catch(function (err) {
            console.log(err);
            //   this.awri.showError(err);
        });
    };
    UploadComponent.prototype.selectWebVideo = function (elem) {
        var i = this.getImageID();
        //webmedia.js
        var data = snapShot(this.fieldname + '' + i);
        this.files[i].fid = -1;
        this.files[i].src = data.src;
        this.files[i].name = data.name;
        this.hideUpload();
    };
    UploadComponent.prototype.getImageID = function () {
        for (var i = 0; i < this.MAX_UPLOADS; i++)
            if (this.files[i].src === '')
                return i;
    };
    UploadComponent.prototype.hideUpload = function () {
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].src === '')
                return this.hideUpl = false;
        }
        this.hideUpl = true;
    };
    UploadComponent.prototype.uploadFile = function (imgid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var input = document.getElementById(_this.fieldname + imgid);
            var dataURI = _this.files[imgid].src;
            dataURI = dataURI.substring(dataURI.indexOf(',') + 1, dataURI.length);
            var ext = input.name.split('.').pop();
            var filedata = {
                "filesize": dataURI.length,
                "filename": input.name,
                "filemime": "image/" + ext,
                "filepath": 'public://attachments/' + input.name,
                "status": 0,
                "file": dataURI
            };
            if (_this.files[imgid].fid == -1 && _this.files[imgid].name !== '') {
                var l_1 = _this.loadingCtrl.create({
                    content: "Datei hochladen. Bitte warten..."
                });
                l_1.present();
                _this.awri.uploadFile(filedata).then(function (data) {
                    var dat = data;
                    input.fid = dat.fid;
                    _this.files[imgid].name = input.name;
                    _this.files[imgid].fid = dat.fid;
                    _this.files[imgid].uploaded = true;
                    l_1.dismiss();
                    resolve(_this.files[imgid]);
                }).catch(function (err) {
                    // console.log(err);       
                    l_1.dismiss();
                    reject(err);
                    //    this.awri.showError(err);
                });
            }
        });
    };
    UploadComponent.prototype.uploadAllFiles = function () {
        for (var i = 0; i < this.MAX_UPLOADS; i++)
            if (this.files[i].fid == -1 && this.files[i].name != '') {
                this.uploadFile(i);
            }
    };
    UploadComponent.prototype.resetFiles = function () {
        for (var i = 0; i < this.MAX_UPLOADS; i++)
            this.removeImage(i);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], UploadComponent.prototype, "MAX_UPLOADS", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], UploadComponent.prototype, "fieldname", void 0);
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'upload',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/components/upload/upload.html"*/'<ion-content padding>\n<ion-item>\n        <ion-label color="primary">{{text}}\n        </ion-label>           \n</ion-item>\n<ng-template #letupload>\n    <ion-item>\n        <ion-label color="danger" stacked><h2>Natürlich nur, wenn sie angemeldet angemeldet sind.\n        </h2></ion-label> \n      </ion-item>\n  </ng-template>\n\n<ion-item>\n        <ion-label color="danger" text-wrap>Bitte verdecken Sie persönliche Daten wie Namen, Adressen, Telefonnummern, etc.</ion-label>\n</ion-item>\n      \n<ng-template [ngIf]="awri.isInRole(\'authenticated user\')" [ngIfElse]="letupload">\n\n\n        <div *ngFor="let image of files;index as i">\n                <ion-card><p>{{1+i}}.</p>         \n            \n                    <img fid="-1" id="{{this.fieldname+i}}" src="" name=""> \n                    <ion-label>{{image.name}}</ion-label>\n                    <ion-row>\n                            <span *ngIf="files[i].name!=\'\'">\n                    <ion-buttons>\n                    <button ion-button left [disabled]="files[i].name==\'\'">\n                    <ion-icon name="trash" (click)="removeImage(i)"></ion-icon>\n                </button>\n         \n                <button ion-button right  [disabled]="files[i].uploaded">\n                <ion-icon name="cloud-upload" (click)="uploadFile(i)"></ion-icon>            \n            </button>\n  \n        </ion-buttons>    \n    </span>\n        </ion-row>\n            </ion-card>\n        </div>\n\n\n      </ng-template>\n\n      <ng-template [ngIf]="awri.isBrowser()" [ngIfElse]="isApp">\n            <div showWhen="mobileweb"> \n                    <ion-label color="danger" text-wrap>Im Mobilen Browser können keine Dateien ausgewählt werden. </ion-label>\n                  </div>                      \n    <div hideWhen="mobileweb">\n            <button ion-button [(ngModel)]="toggleFiles" name="toggleFiles" ngDefaultControl (click)="toggleFil()" [disabled]="awri.isInRole(\'anonymous user\')">Dateien</button>\n        <div  *ngIf="toggleFiles">\n            <div *ngIf="!hideUpl">\n                <ion-input  id="filefield0"  type="file" accept="image/*" (change)="this.selectWebFile($event);"></ion-input>\n            </div>\n            </div>\n    </div>\n    \n     <button ion-button [(ngModel)]="toggleVideo" name="toggleVideo" ngDefaultControl (click)="toggleVid()" [disabled]="awri.isInRole(\'anonymous user\')">Kamera</button>\n                 <ion-card>\n                  <ion-item *ngIf="toggleVideo">\n                        <video id="video1" width="100%" height="100%" autoplay style="background-color:black;"></video>\n                        <button id="snap1" ion-button (click)="toggleCam($event)" block>Start Kamera</button>\n                        <canvas id="canvas1" width="640" height="480" style="display:none;"></canvas>\n                        <div *ngIf="!hideUpl">                        \n                        <button id="snap" [disabled]="!togglePhoto"  ion-button (click)="selectWebVideo(this)" block>Photo</button>\n                        </div>\n                  </ion-item>\n                </ion-card>\n            </ng-template>\n            <ng-template #isApp>\n                    <div *ngIf="!hideUpl">\n                     \n                        <button ion-button full (click)="nativeCamera()" [disabled]="awri.isInRole(\'anonymous user\')">Kamera</button>\n                        <button ion-button full (click)="nativeSelectFile()" [disabled]="awri.isInRole(\'anonymous user\')">Dateien</button>            \n                    </div>\n            </ng-template>\n\n            <button ion-button right (click)="uploadAllFiles()" [disabled]="awri.isInRole(\'anonymous user\')">Alle Hochladen</button>\n            \n        </ion-content>\n<!--\n    <button ion-button full (click)="uploadFile(\'image0\')">Dateien hochladen</button>\n    <ion-card><img id="image0" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(0)"></ion-icon></ion-card>\n    <ion-card><img id="image1" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(1)"></ion-icon></ion-card>\n<ion-card><img id="image2" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(2)"></ion-icon></ion-card>\n    <ion-card><img id="image3" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(3)"></ion-icon></ion-card>\n        <ion-card><img id="image4" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(4)"></ion-icon></ion-card>\n        <button ion-button class="submit-btn" full type="submit"\n        [disabled]="getImageID()==0">Dateien hochladen\n</button>\n-->\n\n\n<!--\n<ion-item *ngFor="let file of files;index as i">{{file.fid}} {{file.name}}\n    <ion-input  id="filefield{{i}}"  type="file" accept="image/*" (change)="this.test($event,i);"></ion-input>\n</ion-item>\n-->\n\n\n  \n\n\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/components/upload/upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], UploadComponent);
    return UploadComponent;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, plt, storage) {
        var _this = this;
        this.http = http;
        this.plt = plt;
        this.storage = storage;
        //  public  HOST='http://kimo2007.dnshome.de:8888/stage.awri.ch';
        //  public  ENDPOINT='drupalgap';
        //  public  HOST='http://localhost/stage.awri.ch';
        //  public  ENDPOINT='drupalgap';
        this.HOST = 'https://stage.awri.ch';
        this.ENDPOINT = 'drupalgap';
        this.loggedIn = false;
        this.help = true;
        /*
        token = new Observable<string>((observer: Observer<string>) => {
          this.http.get(this.HOST+'/?q=services/session/token', { responseType: 'text', withCredentials:true }).subscribe(token=>{
            console.log(token);
        return observer.next(token);
          })
      
        });
      */
        this.connect = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.HOST + '/?q=services/session/token', { responseType: 'text', withCredentials: true }).subscribe(function (token) {
                _this.token = token;
                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                    .set('Content-Type', 'application/json')
                    .set('X-CSRF-TOKEN', token);
                var options = {
                    headers: headers,
                    withCredentials: true
                };
                _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/system/connect.json', null, options).map(function (res) { return res; }).subscribe(function (data) {
                    var dat = data;
                    _this.user.uid = dat.user.uid;
                    _this.user.roles = dat.user.roles;
                    // this.set('session_name',dat.session_name);
                    // this.set('sessid',dat.sessid);      
                    // this.session=dat.session_name+'='+dat.sessid;
                    if (_this.user.uid > 0)
                        _this.loadUser(_this.user.uid).then(function (u) {
                            var vars = u;
                            _this.user.name = vars.name;
                            _this.user.uid = vars.uid;
                            _this.user.roles = vars.roles;
                            if (_this.user.uid > 0) {
                                _this.user.email = vars.mail;
                                _this.user.created = vars.created;
                                _this.loggedIn = true;
                                if (vars.field_fbid['und'])
                                    _this.user.fbid = vars.field_fbid['und'][0].value;
                                if (_this.user.fbid)
                                    _this.user.picture = "https://graph.facebook.com/" + _this.user.fbid + "/picture";
                                if (vars.picture)
                                    _this.user.picture = vars.picture.url;
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    console.log(_this.user);
                    return observer.next(_this.user);
                }, function (err) {
                    console.log(err);
                    return observer.next(_this.user);
                });
            }, function (err) {
                console.log(err);
            });
            //openFB.init({appId:'126766317359254',scope:'email'});
            //console.log(openFB);
        });
        this.help = true;
        this.user = {
            uid: 0,
            name: 'Unbekannt',
            email: '',
            picture: 'assets/imgs/anonymous.png',
            roles: [{ 0: 'anonymous user' }],
            fbid: -1,
            created: Date.now(),
        };
        this.connect.subscribe(function (data) {
            console.log("auth.connect:" + data.name);
        });
        this.get('help').then(function (col) {
            _this.help = col;
        }).catch(function (err) {
            _this.help = true;
            _this.set('help', _this.help);
            //console.log(err);
        });
        this.getStats();
    }
    AuthProvider.prototype.set = function (settingName, value) {
        return this.storage.set('setting:${ settingName }', value);
    };
    AuthProvider.prototype.get = function (settingName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('setting:${ settingName }')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthProvider.prototype.remove = function (settingName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove('setting:${ settingName }')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthProvider.prototype.setHelp = function (help) {
        var _this = this;
        this.set('help', help).then(function (res) {
            _this.help = res;
            return _this.help;
        }).catch(function (err) {
            console.log(err);
        });
    };
    AuthProvider.prototype.addComment = function (comment) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/comment.json', comment, options).map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                console.log(err);
            });
        });
    };
    AuthProvider.prototype.isFlagged = function (nid, flag) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            var is_flagged = {
                "flag_name": flag,
                "entity_id": nid,
                "uid": _this.user.uid,
            };
            _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/flag/is_flagged.json', is_flagged, options).subscribe(function (data) {
                var arr = data;
                console.log(arr[0]);
                resolve(arr[0]);
            }, function (err) {
                reject(false);
            });
        });
    };
    AuthProvider.prototype.getFlagCount = function (nid, flag_name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            var is_flagged = {
                "flag_name": flag_name,
                "entity_id": nid,
            };
            _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/flag/countall.json', is_flagged, options).subscribe(function (data) {
                var arr = data;
                resolve(arr.count);
            }, function (err) {
                reject(0);
            });
        });
    };
    AuthProvider.prototype.setFlag = function (nid, flag_name, flag) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            var is_flagged = {
                "flag_name": flag_name,
                "entity_id": nid,
                "action": flag,
                //  "skip_permission_check":1, 
                "uid": _this.user.uid,
            };
            _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/flag/flag.json', is_flagged, options).subscribe(function (data) {
                var arr = data;
                console.log("SETFLAG");
                console.log(arr[0]);
                resolve(flag == "flag" ? true : false);
            }, function (err) {
                reject(false);
            });
        });
    };
    AuthProvider.prototype.getBookmarks = function (page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //   this.showLoading("Suche, Bitte warten...");
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            _this.http.get(_this.HOST + '/user/bookmarks?page=' + page, options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.search = function (text) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //   this.showLoading("Suche, Bitte warten...");
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            _this.http.get(_this.HOST + '/' + _this.ENDPOINT + '/search_node/retrieve.json?keys=' + text, options).subscribe(function (data) {
                //  this.items=<Array<any>>data;
                //   var view=this.data.view;      
                //  this.page=view.page;
                //  this.pages=view.pages; 
                //  this.hideLoading(); 
                resolve(data);
            }, function (err) {
                //    this.hideLoading(); 
                reject(err);
            });
        });
    };
    AuthProvider.prototype.loadNode = function (nid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token).set('Content-Type', 'application/json');
            //.set('Authentication', <string>this.session);
            var options = {
                headers: headers,
                withCredentials: true,
            };
            _this.http.get(_this.HOST + '/' + _this.ENDPOINT + '/node/' + nid + '.json', options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.loadUser = function (uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token).set('Content-Type', 'application/json');
            //.set('Authentication', <string>this.session);
            var options = {
                headers: headers,
                withCredentials: true,
            };
            _this.http.get(_this.HOST + '/' + _this.ENDPOINT + '/user/' + uid + '.json', options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('Content-Type', 'application/json')
                .set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            var user = {
                username: username,
                password: password
            };
            _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/user/login', user, options).map(function (res) { return res; }).subscribe(function (data) {
                var vars = data;
                _this.token = vars.token;
                //  this.session=vars.session_name+'='+vars.sessid;
                //    this.user=vars.user;
                //  this.set('session_name',vars.session_name);
                //        this.set('sessid',vars.token);
                _this.user.uid = vars.user.uid;
                _this.user.roles = vars.user.roles;
                if (_this.user.uid > 0) {
                    _this.loadUser(_this.user.uid).then(function (u) {
                        var vars = u;
                        _this.user.name = vars.name;
                        _this.user.uid = vars.uid;
                        _this.user.roles = vars.roles;
                        if (_this.user.uid > 0) {
                            // this.username=vars.user.name;
                            if (vars.field_fbid['und'])
                                _this.user.fbid = vars.field_fbid['und'][0].value;
                            if (_this.user.fbid)
                                _this.user.picture = "https://graph.facebook.com/" + _this.user.fbid + "/picture";
                            if (vars.picture)
                                _this.user.picture = vars.picture.url;
                        }
                    });
                }
                //   console.log(this.session);
                console.log(_this.user);
                resolve(_this.user);
            }, function (err) {
                //     if(err.status==401)this.showError("Falscher Benutzername oder falsches Passwort!");
                //     else this.showError("Anmeldung fehlgeschlagen:"+err.status);
                reject(err);
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token).set('Content-Type', 'application/json');
            var options = {
                headers: headers,
                withCredentials: true,
            };
            _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/user/logout.json', null, options).subscribe(function (data) {
                //    console.log(data);
                // let res:any=data;
                _this.user = {
                    uid: 0,
                    name: 'Unbekannt',
                    email: '',
                    picture: 'assets/imgs/anonymous.png',
                    roles: [{ 0: 'anonymous user' }],
                    fbid: -1,
                    created: Date.now(),
                };
                _this.loggedIn = false;
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthProvider.prototype.register = function (username, password, email) {
        var _this = this;
        //  console.log('USER REGISTER'+username);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('Content-Type', 'application/json')
                .set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            var user = {
                mail: email,
                name: username,
                pass: password
            };
            _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/user/register', user, options).map(function (res) { return res; }).subscribe(function (data) {
                //    console.log(data);
                var vars = data;
                _this.user.uid = vars.uid;
                //   console.log(vars.uri);
                //    console.log(this.user.uid);      
                resolve(_this.user);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.fblogin = function () {
        return new Promise(function (resolve, reject) {
            openFB.login(function (response) {
                if (response.status === 'connected') {
                    resolve(response);
                }
                else if (response.error) {
                    reject(response.error);
                }
            }, { scope: "email" });
        });
    };
    AuthProvider.prototype.fboauth = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            var params = {
                access_token: token,
            };
            //console.log(headers);
            _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/fboauth/connect.json', params, options).map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                var vars = data;
                _this.token = vars.token;
                // this.session=vars.session_name+'='+vars.sessid;
                //  this.user=vars.user;
                _this.user.uid = vars.user.uid;
                _this.user.roles = vars.user.roles;
                _this.user.name = vars.user.name;
                if (vars.user.picture)
                    _this.user.picture = vars.user.picture.url;
                _this.loggedIn = true;
                //      if(vars.user.field_fbid['und'])this.user.fbid=vars.user.field_fbid['und'][0].value;
                // if(this.user.fbid)this.user.picture="https://graph.facebook.com/"+this.user.fbid+"/picture"
                //  console.log(this.user.fbid,"FBID");
                //   console.log(data.session_name+''+data.sessid);
                //   console.log(this);
                resolve(data);
            }, function (err) {
                //      console.log(err);
                reject(err);
            });
            //     console.log(this.token);
        });
    };
    AuthProvider.prototype.getKantons = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-CSRF-TOKEN', _this.token);
            var options = {
                headers: headers,
                withCredentials: true
            };
            _this.http.get(_this.HOST + '/' + _this.ENDPOINT + '/taxonomy_term?page=0&fields=vid,name&&parameters[vid]=3&pagesize=27&options[orderby][weight]=asc', options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.createFrage = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token).set('Content-Type', 'application/json');
            var options = {
                headers: headers,
                withCredentials: true
            };
            //console.log(JSON.stringify(data));
            _this.http.post(_this.HOST + '/connect/awri_fragen', JSON.stringify(data), options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.isInRole = function (role) {
        var ret = false;
        var obj = this.user.roles;
        Object.keys(obj).forEach(function (key) {
            if (obj[key] === role)
                ret = true;
        });
        return ret;
    };
    AuthProvider.prototype.isBrowser = function () {
        if (this.plt.is('core') || this.plt.is('mobileweb'))
            return true;
        else
            return false;
    };
    AuthProvider.prototype.uploadFile = function (filedata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set('X-CSRF-TOKEN', _this.token).set('Content-Type', 'application/json');
            var options = {
                headers: headers,
                withCredentials: true,
            };
            _this.http.post(_this.HOST + '/' + _this.ENDPOINT + '/file.json', filedata, options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.getImagePath = function (uri) {
        return uri.replace('public://attachments/', this.HOST + '/sites/default/files/attachments/');
    };
    ;
    AuthProvider.prototype.getStats = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.HOST + '/stats.txt?' + Date.now(), { responseType: 'text' })
                .subscribe(function (data) {
                _this.stats = JSON.parse(data);
                console.log(_this.stats, "getStatus");
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map