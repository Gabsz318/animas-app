(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-readonly-home-readonly-module"],{

/***/ "XYeR":
/*!*****************************************************!*\
  !*** ./src/app/home-readonly/home-readonly.page.ts ***!
  \*****************************************************/
/*! exports provided: HomeReadonlyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeReadonlyPage", function() { return HomeReadonlyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_readonly_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-readonly.page.html */ "qvWh");
/* harmony import */ var _home_readonly_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-readonly.page.scss */ "mkrb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");





let HomeReadonlyPage = class HomeReadonlyPage {
    constructor(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    ngOnInit() { }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.angularFireAuth.signOut();
        });
    }
};
HomeReadonlyPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
HomeReadonlyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-readonly',
        template: _raw_loader_home_readonly_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_readonly_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeReadonlyPage);



/***/ }),

/***/ "goft":
/*!*******************************************************!*\
  !*** ./src/app/home-readonly/home-readonly.module.ts ***!
  \*******************************************************/
/*! exports provided: HomeReadonlyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeReadonlyPageModule", function() { return HomeReadonlyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_readonly_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-readonly-routing.module */ "uV8p");
/* harmony import */ var _home_readonly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-readonly.page */ "XYeR");







let HomeReadonlyPageModule = class HomeReadonlyPageModule {
};
HomeReadonlyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_readonly_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeReadonlyPageRoutingModule"]
        ],
        declarations: [_home_readonly_page__WEBPACK_IMPORTED_MODULE_6__["HomeReadonlyPage"]]
    })
], HomeReadonlyPageModule);



/***/ }),

/***/ "mkrb":
/*!*******************************************************!*\
  !*** ./src/app/home-readonly/home-readonly.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXJlYWRvbmx5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "qvWh":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-readonly/home-readonly.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>home-readonly</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button href=\"./home-admin\">\n        <ion-label>Inicio</ion-label>\n        <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"./cabins\">\n        <ion-label>Cabañas</ion-label>\n        <ion-icon name=\"cabin\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"./bookings\">\n        <ion-label>Reservas</ion-label>\n        <ion-icon name=\"ticket-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"./clients\">\n        <ion-label>Clientes</ion-label>\n        <ion-icon name=\"people-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"./disccounts\">\n        <ion-label>Promos</ion-label>\n        <ion-icon name=\"disccount\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"logout()\">\n        <ion-label>Salir</ion-label>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>");

/***/ }),

/***/ "uV8p":
/*!***************************************************************!*\
  !*** ./src/app/home-readonly/home-readonly-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HomeReadonlyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeReadonlyPageRoutingModule", function() { return HomeReadonlyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_readonly_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-readonly.page */ "XYeR");




const routes = [
    {
        path: '',
        component: _home_readonly_page__WEBPACK_IMPORTED_MODULE_3__["HomeReadonlyPage"]
    }
];
let HomeReadonlyPageRoutingModule = class HomeReadonlyPageRoutingModule {
};
HomeReadonlyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeReadonlyPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=home-readonly-home-readonly-module.js.map