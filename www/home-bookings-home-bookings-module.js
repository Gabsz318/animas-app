(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-bookings-home-bookings-module"],{

/***/ "9yK5":
/*!*******************************************************!*\
  !*** ./src/app/home-bookings/home-bookings.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWJvb2tpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "KIcy":
/*!*****************************************************!*\
  !*** ./src/app/home-bookings/home-bookings.page.ts ***!
  \*****************************************************/
/*! exports provided: HomeBookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBookingsPage", function() { return HomeBookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_bookings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-bookings.page.html */ "lw1x");
/* harmony import */ var _home_bookings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-bookings.page.scss */ "9yK5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");





let HomeBookingsPage = class HomeBookingsPage {
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
HomeBookingsPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
HomeBookingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-bookings',
        template: _raw_loader_home_bookings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_bookings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeBookingsPage);



/***/ }),

/***/ "Srj9":
/*!*******************************************************!*\
  !*** ./src/app/home-bookings/home-bookings.module.ts ***!
  \*******************************************************/
/*! exports provided: HomeBookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBookingsPageModule", function() { return HomeBookingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-bookings-routing.module */ "eF2q");
/* harmony import */ var _home_bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-bookings.page */ "KIcy");







let HomeBookingsPageModule = class HomeBookingsPageModule {
};
HomeBookingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeBookingsPageRoutingModule"]
        ],
        declarations: [_home_bookings_page__WEBPACK_IMPORTED_MODULE_6__["HomeBookingsPage"]]
    })
], HomeBookingsPageModule);



/***/ }),

/***/ "eF2q":
/*!***************************************************************!*\
  !*** ./src/app/home-bookings/home-bookings-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HomeBookingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBookingsPageRoutingModule", function() { return HomeBookingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-bookings.page */ "KIcy");




const routes = [
    {
        path: '',
        component: _home_bookings_page__WEBPACK_IMPORTED_MODULE_3__["HomeBookingsPage"]
    }
];
let HomeBookingsPageRoutingModule = class HomeBookingsPageRoutingModule {
};
HomeBookingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeBookingsPageRoutingModule);



/***/ }),

/***/ "lw1x":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-bookings/home-bookings.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>home-bookings</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button href=\"./home-admin\">\n        <ion-label>Inicio</ion-label>\n        <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"./cabins\">\n        <ion-label>Cabañas</ion-label>\n        <ion-icon name=\"cabin\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"./bookings\">\n        <ion-label>Reservas</ion-label>\n        <ion-icon name=\"ticket-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"./clients\">\n        <ion-label>Clientes</ion-label>\n        <ion-icon name=\"people-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"./disccounts\">\n        <ion-label>Promos</ion-label>\n        <ion-icon name=\"disccount\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"logout()\">\n        <ion-label>Salir</ion-label>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>");

/***/ })

}]);
//# sourceMappingURL=home-bookings-home-bookings-module.js.map