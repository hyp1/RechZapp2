webpackJsonp([1],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(41);
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
        this.awri.get('help').then(function (data) {
            _this.help = data;
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.helpChanged = function (evt) {
        //console.log(evt.help);
        this.awri.set('help', evt.help);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Hilfe</ion-label>\n    <ion-toggle [(ngModel)]="help" (ionChange)="helpChanged(this);"></ion-toggle>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object])
    ], SettingsPage);
    return SettingsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/settings/settings.module": [
		287,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_upload_upload__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_free__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var bannerConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    isTesting: true,
    autoShow: true,
};
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, upload, admobFree, httpClient, plt, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.admobFree = admobFree;
        this.httpClient = httpClient;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
            .map(function (res) { return res['results']; });
        this.upload = upload;
        this.auth = auth;
        /*
        console.log(auth);
        this.auth.connect.subscribe(data=>{
         alert("HOME"+data.name);
       });
       */
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare()
            .then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
            console.log("BannerConfig");
        })
            .catch(function (e) { return console.log(e); });
    }
    HomePage.prototype.checkPlatform = function () {
        var alert = this.alertCtrl.create({
            title: 'Platform',
            message: 'You are running on: ' + this.plt.platforms(),
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Home {{ auth.user?.name }}</ion-title>\n    </ion-navbar>\n   </ion-header>\n   \n   <ion-content padding>  \n    <drupal7-login></drupal7-login>\n\n     <upload></upload>\n    <hr>\n    <async-promise-pipe name=\'HALLO TEST\' host="http://localhost/druponic" endpoint="api"></async-promise-pipe>\n    <async-observable-pipe></async-observable-pipe>\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngFor="let user of users | async" col-12 col-xl-2 col-lg-3 col-md-4>\n          <ion-card>\n            <ion-item>\n              <ion-avatar item-start>\n                <img [src]="user.picture.medium">\n              </ion-avatar>\n              <h2 text-capitalize>{{ user.name?.first }} {{ user.name?.last }}</h2>\n            </ion-item>\n            <ion-card-content>\n              Bacon ipsum dolor amet salami prosciutto ham hock, strip steak buffalo ribeye pork chop. Beef ribs tenderloin tail shoulder.\n              Spare ribs ham shoulder brisket rump hamburger. Pork belly kevin shoulder prosciutto ribeye pork chop chicken\n              strip steak pig.\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-fab right bottom class="web-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n       </ion-fab>\n       \n       <ion-fab right top edge class="mobile-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n       </ion-fab>\n\n   </ion-content>'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__components_upload_upload__["a" /* UploadComponent */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(203);
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
    function UploadComponent(awri, camera) {
        this.camera = camera;
        this.MAX_UPLOADS = 5;
        this.hideUpl = false;
        this.toggleVideo = false;
        this.toggleFiles = false;
        this.toggleCamera = false;
        this.togglePhoto = false;
        this.text = 'Sie können bis zu 5 Bilddateien anhängen.';
        this.awri = awri;
        this.files = [];
        for (var i = 0; i < this.MAX_UPLOADS; i++)
            this.files.push({ fid: -1, name: '', src: '' });
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
            var input = document.getElementById('image' + id);
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
            var input = document.getElementById('image' + id);
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
        for (var i = 0; i < this.MAX_UPLOADS; i++) {
            var input = document.getElementById('image' + i);
            if (input.fid != -1 && input.name != '')
                f.push({ fid: input.fid });
        }
        return f;
    };
    UploadComponent.prototype.removeImage = function (index) {
        var input = document.getElementById('image' + index);
        input.src = '';
        this.files[index].fid = -1;
        this.files[index].name = '';
        this.files[index].src = '';
        this.hideUpl = false;
    };
    UploadComponent.prototype.selectWebFile = function (elem) {
        var _this = this;
        var i = this.getImageID();
        //webmedia.js
        webpreviewFile(elem.srcElement, 'img#image' + i).then(function (data) {
            _this.files[i].fid = -1;
            _this.files[i].src = data.src;
            _this.files[i].name = data.name;
            _this.hideUpload();
        }).catch(function (err) {
            console.log(err);
            //   this.awri.showError(err);
        });
    };
    UploadComponent.prototype.selectWebVideo = function (elem) {
        var i = this.getImageID();
        //webmedia.js
        var data = snapShot('image' + i);
        this.files[i].fid = -1;
        this.files[i].src = data.src;
        this.files[i].name = data.name;
        this.hideUpload();
    };
    UploadComponent.prototype.getImageID = function () {
        for (var i = 0; i < 5; i++)
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
            var input = document.getElementById('image' + imgid);
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
                //   this.awri.showLoading("Datei hochladen. Bitte warten...");
                _this.awri.uploadFile(filedata).then(function (data) {
                    var dat = data;
                    input.fid = dat.fid;
                    _this.files[imgid].name = input.name;
                    _this.files[imgid].fid = dat.fid;
                    resolve(_this.files[imgid]);
                    //     this.awri.hideLoading();
                }).catch(function (err) {
                    console.log(err);
                    reject(err);
                    //     this.awri.hideLoading();
                    //    this.awri.showError(err);
                });
            }
        });
    };
    UploadComponent.prototype.uploadAllFiles = function () {
        for (var i = 0; i < this.MAX_UPLOADS; i++)
            if (this.files[i].fid == -1 && this.files[i].name != '') {
                this.uploadFile(i);
                //      this.awri.loading.dismiss();
            }
    };
    UploadComponent.prototype.resetFiles = function () {
        for (var i = 0; i < this.MAX_UPLOADS; i++)
            this.removeImage(i);
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'upload',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/components/upload/upload.html"*/'<!-- Generated template for the UploadComponent component -->\n    <ion-item>\n        <ion-label id="profile_image" color="primary" stacked><h2>{{text}}</h2></ion-label> \n      </ion-item>\n\n      \n<ng-template [ngIf]="awri.isInRole(\'authenticated user\')" [ngIfElse]="letupload">\n\n        <ng-template [ngIf]="awri.isBrowser()" [ngIfElse]="isApp">\n                <div showWhen="mobileweb"> \n                        <ion-label color="danger" text-wrap>Im Mobilen Browser können keine Dateien ausgewählt werden. </ion-label>\n                      </div>                      \n        <div hideWhen="mobileweb">\n                <button ion-button [(ngModel)]="toggleFiles" name="toggleFiles" ngDefaultControl (click)="toggleFil()">Dateien</button>\n            <div  *ngIf="toggleFiles">\n                <div *ngIf="!hideUpl">\n                    <ion-input  id="filefield0"  type="file" accept="image/*" (change)="this.selectWebFile($event);"></ion-input>\n                </div>\n                </div>\n        </div>\n                <hr>\n                      <button ion-button [(ngModel)]="toggleVideo" name="toggleVideo" ngDefaultControl (click)="toggleVid()">Kamera</button>\n                     <ion-card>\n                      <ion-item *ngIf="toggleVideo">\n                            <video id="video1" width="100%" height="100%" autoplay style="background-color:black;"></video>\n                            <button id="snap1" ion-button (click)="toggleCam($event)" block>Start Kamera</button>\n                            <canvas id="canvas1" width="640" height="480" style="display:none;"></canvas>\n                            <div *ngIf="!hideUpl">                        \n                            <button id="snap" [disabled]="!togglePhoto"  ion-button (click)="selectWebVideo(this)" block>Photo</button>\n                            </div>\n                      </ion-item>\n                    </ion-card>\n                </ng-template>\n                <ng-template #isApp>\n                        <div *ngIf="!hideUpl">\n                         \n                            <button ion-button full (click)="nativeCamera()">Kamera</button>\n                            <button ion-button full (click)="nativeSelectFile()">Dateien</button>            \n                        </div>\n                </ng-template>\n        \n        <div *ngFor="let image of files;index as i">\n                <ion-card><p>{{1+i}}</p>\n                    <img id="image{{i}}" src="" name=""> \n                    <ion-label>{{image.name}}</ion-label>\n                    <ion-row>\n                    <ion-buttons>\n                    <button ion-button left>\n                    <ion-icon name="trash" (click)="removeImage(i)"></ion-icon>\n                </button>\n                <button ion-button right>\n                <ion-icon name="cloud-upload" (click)="uploadFile(i)"></ion-icon>\n            </button>\n        </ion-buttons>    \n        </ion-row>\n            </ion-card>\n        </div>\n        <button ion-button right (click)="uploadAllFiles()">Alle Hochladen</button>\n\n      </ng-template>\n\n      <ng-template #letupload>\n        <ion-item>\n            <ion-label id="profile_image" color="danger" stacked><h2>Natürlich nur, wenn sie angemeldet angemeldet sind! ;-)\n            </h2></ion-label> \n          </ion-item>\n\n      </ng-template>\n\n\n<!--\n    <button ion-button full (click)="uploadFile(\'image0\')">Dateien hochladen</button>\n    <ion-card><img id="image0" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(0)"></ion-icon></ion-card>\n    <ion-card><img id="image1" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(1)"></ion-icon></ion-card>\n<ion-card><img id="image2" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(2)"></ion-icon></ion-card>\n    <ion-card><img id="image3" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(3)"></ion-icon></ion-card>\n        <ion-card><img id="image4" src="assets/imgs/anonymous.png" name="test"> <ion-icon name="trash" (click)="removeImage(4)"></ion-icon></ion-card>\n        <button ion-button class="submit-btn" full type="submit"\n        [disabled]="getImageID()==0">Dateien hochladen\n</button>\n-->\n\n\n<!--\n<ion-item *ngFor="let file of files;index as i">{{file.fid}} {{file.name}}\n    <ion-input  id="filefield{{i}}"  type="file" accept="image/*" (change)="this.test($event,i);"></ion-input>\n</ion-item>\n-->\n\n\n  \n\n\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/components/upload/upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], UploadComponent);
    return UploadComponent;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_async_promise_pipe_async_promise_pipe__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_async_observable_pipe_async_observable_pipe__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_drupal7_login_drupal7_login__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_free__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_upload_upload__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(282);
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
                __WEBPACK_IMPORTED_MODULE_11__components_async_promise_pipe_async_promise_pipe__["a" /* AsyncPromisePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_async_observable_pipe_async_observable_pipe__["a" /* AsyncObservablePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_drupal7_login_drupal7_login__["a" /* Drupal7LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_upload_upload__["a" /* UploadComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_async_promise_pipe_async_promise_pipe__["a" /* AsyncPromisePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_async_observable_pipe_async_observable_pipe__["a" /* AsyncObservablePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_drupal7_login_drupal7_login__["a" /* Drupal7LoginComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_16__components_upload_upload__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.auth = auth;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Einstellungen', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/app/app.html"*/'<ion-split-pane when="sm">\n\n    <ion-menu [content]="content" side="right">\n      <ion-header>\n        <ion-toolbar color="secondary">\n          <ion-title>Menu {{auth.user.name}} </ion-title>\n        </ion-toolbar>\n      </ion-header>\n   \n      <ion-content class="menu-container">\n        <ion-list no-lines>\n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="transparent list-item">\n            {{p.title}} \n\n          </button>\n        </ion-list>\n      </ion-content>\n   \n    </ion-menu>\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n    </ion-split-pane>'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncPromisePipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the AsyncPromisePipeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AsyncPromisePipeComponent = /** @class */ (function () {
    function AsyncPromisePipeComponent() {
        this.greeting = null;
        this.arrived = false;
        this.resolve = null;
        this.reset();
    }
    AsyncPromisePipeComponent.prototype.reset = function () {
        var _this = this;
        this.arrived = false;
        this.greeting = new Promise(function (resolve, reject) { _this.resolve = resolve; });
    };
    AsyncPromisePipeComponent.prototype.clicked = function () {
        alert(this.host);
        console.log("name:" + this.name);
        console.log("host:" + this.host);
        console.log("endpoint:" + this.endpoint);
        if (this.arrived) {
            this.reset();
        }
        else {
            this.resolve('hi there!');
            this.arrived = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AsyncPromisePipeComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AsyncPromisePipeComponent.prototype, "endpoint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AsyncPromisePipeComponent.prototype, "host", void 0);
    AsyncPromisePipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'async-promise-pipe',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/components/async-promise-pipe/async-promise-pipe.html"*/'<!-- Generated template for the AsyncPromisePipeComponent component -->\n<h2>AsyncPromisePipeComponent</h2>\n<div>{{name}} {{host}}/{{endpoint}}\n  <code>promise|async</code>: \n  <button ion-button (click)="clicked()">{{ arrived ? \'Reset\' : \'Resolve\' }}</button>\n  \n  <span>Wait for it... {{ greeting | async }}</span>\n</div>\n\n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/components/async-promise-pipe/async-promise-pipe.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AsyncPromisePipeComponent);
    return AsyncPromisePipeComponent;
}());

//# sourceMappingURL=async-promise-pipe.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncObservablePipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the AsyncObservablePipeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AsyncObservablePipeComponent = /** @class */ (function () {
    function AsyncObservablePipeComponent() {
        this.time = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            setInterval(function () { return observer.next(new Date().toString()); }, 1000);
        });
    }
    AsyncObservablePipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'async-observable-pipe',
            template: '<div><code>observable|async</code>: Time: {{ time | async }}</div>'
        })
    ], AsyncObservablePipeComponent);
    return AsyncObservablePipeComponent;
}());

//# sourceMappingURL=async-observable-pipe.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drupal7LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(41);
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
    function Drupal7LoginComponent(auth) {
        console.log('Hello Drupal7LoginComponent Component');
        this.auth = auth;
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
    Drupal7LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'drupal7-login',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/components/drupal7-login/drupal7-login.html"*/'<!-- Generated template for the Drupal7LoginComponent component -->\n<div>\n<h1>drupal7-login</h1>\n<div *ngIf="this.auth.loggedIn; then loggedin else notloggedin">\n</div>\n\n<ng-template #loggedin>\n        <ion-item><ion-label color="primary"> {{this.auth.user.name}} </ion-label> </ion-item>\n        <ion-buttons><button ion-button (click)="logout()">Abmelden</button></ion-buttons>\n</ng-template>\n    \n\n    <ng-template #notloggedin>\n            <ion-item><ion-label color="danger"> Sie sind nicht auf AWRI angemeldet </ion-label> </ion-item>\n            <form #loginForm="ngForm" (ngSubmit)="dologin()" autocomplete="off">\n                    <ion-row>\n                      <ion-col>\n                        <ion-list inset>\n                          <ion-item>\n                            <ion-input placeholder="Benutzername" name="username" id="userField"\n                                       type="text" required [(ngModel)]="username" #userField></ion-input>\n                          </ion-item>\n                          <ion-item>\n                            <ion-input placeholder="Password" name="password" id="passwordField"\n                                       type="password" required [(ngModel)]="password"></ion-input>\n                          </ion-item>\n                        </ion-list>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col>\n                        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n                        <button ion-button class="submit-btn" full round type="submit"\n                                [disabled]="!loginForm.form.valid">Anmelden\n                        </button> \n                       </ion-col>\n                    </ion-row>    \n                      </form>  \n                      <button ion-button round  full  (click)="fblogin()"> <ion-icon name="logo-facebook"></ion-icon>Facebook</button>    \n                       \n    </ng-template>\n</div>  \n'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/components/drupal7-login/drupal7-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */]])
    ], Drupal7LoginComponent);
    return Drupal7LoginComponent;
}());

//# sourceMappingURL=drupal7-login.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(282);
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





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, plt, storage) {
        var _this = this;
        this.http = http;
        this.plt = plt;
        this.storage = storage;
        // public  HOST='http://localhost/druponic';
        //  public  ENDPOINT='api';
        this.HOST = 'https://stage.awri.ch';
        this.ENDPOINT = 'drupalgap';
        this.loggedIn = false;
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
                    // this.user=dat.user;
                    _this.user.uid = dat.user.uid;
                    _this.user.roles = dat.user.roles;
                    // this.set('session_name',dat.session_name);
                    // this.set('sessid',dat.sessid);      
                    // this.session=dat.session_name+'='+dat.sessid;
                    if (_this.user.uid > 0) {
                        _this.user.name = dat.user.name;
                        _this.user.email = dat.user.mail;
                        _this.user.created = dat.user.created;
                        _this.loggedIn = true;
                    }
                    console.log(data);
                    console.log(_this.user);
                    return observer.next(_this.user);
                }, function (err) {
                    return observer.next(_this.user);
                });
            }, function (err) {
                console.log(err);
            });
            //openFB.init({appId:'126766317359254',scope:'email'});
            console.log(openFB);
        });
        console.log('Hello AuthProvider Provider2');
        this.user = {
            uid: 0,
            name: 'Unbekannt',
            email: '',
            picture: 'assets/imgs/anonymous.png',
            roles: [{ 0: 'anonymous user' }],
            created: Date.now(),
        };
        this.connect.subscribe(function (data) {
            console.log("auth.connect:" + data.name);
        });
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
            //console.log(headers);
            _this.http.post(_this.HOST + '/?q=drupalgap/user/login', user, options).map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                var vars = data;
                _this.token = vars.token;
                //  this.session=vars.session_name+'='+vars.sessid;
                //    this.user=vars.user;
                //  this.set('session_name',vars.session_name);
                //        this.set('sessid',vars.token);
                _this.user.uid = vars.user.uid;
                _this.user.roles = vars.user.roles;
                if (_this.user.uid > 0) {
                    _this.user.name = vars.user.name;
                    _this.user.email = vars.user.mail;
                    _this.loggedIn = true;
                    //            if(vars.user.field_fbid['und'])this.user.fbid=vars.user.field_fbid['und'][0].value;
                    //   if(this.user.fbid)this.user.picture="https://graph.facebook.com/"+this.user.fbid+"/picture";
                    if (vars.user.picture != 0)
                        _this.user.picture = vars.user.picture.url;
                    //   console.log(this.user.fbid,"FBID");
                }
                //   console.log(this.session);
                console.log(_this.user.uid);
                return resolve(_this.user);
            }, function (err) {
                //     if(err.status==401)this.showError("Falscher Benutzername oder falsches Passwort!");
                //     else this.showError("Anmeldung fehlgeschlagen:"+err.status);
                return reject(err);
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
            _this.http.post(_this.HOST + '/drupalgap/user/logout.json', null, options).subscribe(function (data) {
                console.log(data);
                // let res:any=data;
                _this.user = {
                    uid: 0,
                    name: 'Unbekannt',
                    email: '',
                    picture: 'assets/imgs/anonymous.png',
                    roles: [{ 0: 'anonymous user' }],
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
    AuthProvider.prototype.fblogin = function () {
        return new Promise(function (resolve, reject) {
            console.log("awri.fblogin()");
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
            _this.http.post(_this.HOST + '/?q=drupalgap/fboauth/connect.json', params, options).map(function (res) { return res; }).subscribe(function (data) {
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
                console.log(_this);
                resolve(data);
            }, function (err) {
                //      console.log(err);
                reject(err);
            });
            //     console.log(this.token);
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
            _this.http.post(_this.HOST + '/drupalgap/file.json', filedata, options).subscribe(function (data) {
                console.log(data);
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

},[206]);
//# sourceMappingURL=main.js.map