webpackJsonp([0],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, httpClient, plt, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
            .map(function (res) { return res['results']; });
        this.auth = auth;
        /*
        console.log(auth);
        this.auth.connect.subscribe(data=>{
         alert("HOME"+data.name);
       });
       */
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
            selector: 'page-home',template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Home {{ auth.user?.name }}</ion-title>\n    </ion-navbar>\n   </ion-header>\n   \n   <ion-content>  \n     <h1>Loggedin?  {{this.auth.loggedIn}}</h1>\n     <drupal7-login></drupal7-login>\n    <hr>\n    <async-promise-pipe name=\'HALLO TEST\' host="http://localhost/druponic" endpoint="api"></async-promise-pipe>\n    <async-observable-pipe></async-observable-pipe>\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngFor="let user of users | async" col-12 col-xl-2 col-lg-3 col-md-4>\n          <ion-card>\n            <ion-item>\n              <ion-avatar item-start>\n                <img [src]="user.picture.medium">\n              </ion-avatar>\n              <h2 text-capitalize>{{ user.name?.first }} {{ user.name?.last }}</h2>\n            </ion-item>\n            <ion-card-content>\n              Bacon ipsum dolor amet salami prosciutto ham hock, strip steak buffalo ribeye pork chop. Beef ribs tenderloin tail shoulder.\n              Spare ribs ham shoulder brisket rump hamburger. Pork belly kevin shoulder prosciutto ribeye pork chop chicken\n              strip steak pig.\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-fab right bottom class="web-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n       </ion-fab>\n       \n       <ion-fab right top edge class="mobile-fab">\n        <button ion-fab icon-only color="primary" (click)="checkPlatform()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n       </ion-fab>\n\n   </ion-content>'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_async_promise_pipe_async_promise_pipe__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_async_observable_pipe_async_observable_pipe__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_drupal7_login_drupal7_login__ = __webpack_require__(279);
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
                __WEBPACK_IMPORTED_MODULE_10__components_async_promise_pipe_async_promise_pipe__["a" /* AsyncPromisePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_async_observable_pipe_async_observable_pipe__["a" /* AsyncObservablePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_drupal7_login_drupal7_login__["a" /* Drupal7LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_async_promise_pipe_async_promise_pipe__["a" /* AsyncPromisePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_async_observable_pipe_async_observable_pipe__["a" /* AsyncObservablePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_drupal7_login_drupal7_login__["a" /* Drupal7LoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(50);
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
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/robert/Volume1/www/2018/RechZapp2/src/app/app.html"*/'<ion-split-pane when="sm">\n\n    <ion-menu [content]="content">\n      <ion-header>\n        <ion-toolbar color="secondary">\n          <ion-title>Menu {{auth.user.name}} </ion-title>\n        </ion-toolbar>\n      </ion-header>\n   \n      <ion-content class="menu-container">\n        <ion-list no-lines>\n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="transparent list-item">\n            {{p.title}} \n\n          </button>\n        </ion-list>\n      </ion-content>\n   \n    </ion-menu>\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n    </ion-split-pane>'/*ion-inline-end:"/media/robert/Volume1/www/2018/RechZapp2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
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

/***/ 278:
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drupal7LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(50);
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
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
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        var _this = this;
        this.http = http;
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
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map