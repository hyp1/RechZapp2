webpackJsonp([0],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_comment_comment__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_bookmark_bookmark__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ViewPageModule = /** @class */ (function () {
    function ViewPageModule() {
    }
    ViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_4__components_comment_comment__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_bookmark_bookmark__["a" /* BookmarkComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view__["a" /* ViewPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__components_comment_comment__["a" /* CommentComponent */], __WEBPACK_IMPORTED_MODULE_5__components_bookmark_bookmark__["a" /* BookmarkComponent */]]
        })
    ], ViewPageModule);
    return ViewPageModule;
}());

//# sourceMappingURL=view.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(12);
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
    function BookmarkComponent(auth) {
        this.auth = auth;
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
        if (this.auth.isInRole('anonymous user'))
            return alert("Nur angemeldete Benutzer können Lesezeichen setzen");
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */]])
    ], BookmarkComponent);
    return BookmarkComponent;
}());

//# sourceMappingURL=bookmark.js.map

/***/ })

});
//# sourceMappingURL=0.js.map