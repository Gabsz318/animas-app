(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-admin-home-admin-module"],{

/***/ "60n2":
/*!*********************************************************!*\
  !*** ./src/app/home-admin/home-admin-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HomeAdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminPageRoutingModule", function() { return HomeAdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-admin.page */ "FyEX");




const routes = [
    {
        path: '',
        component: _home_admin_page__WEBPACK_IMPORTED_MODULE_3__["HomeAdminPage"]
    }
];
let HomeAdminPageRoutingModule = class HomeAdminPageRoutingModule {
};
HomeAdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeAdminPageRoutingModule);



/***/ }),

/***/ "FyEX":
/*!***********************************************!*\
  !*** ./src/app/home-admin/home-admin.page.ts ***!
  \***********************************************/
/*! exports provided: HomeAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminPage", function() { return HomeAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-admin.page.html */ "jKWR");
/* harmony import */ var _home_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-admin.page.scss */ "GVlO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cabin_cabin_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cabin/cabin-status */ "7f/p");








let HomeAdminPage = class HomeAdminPage {
    constructor(angularFireAuth, ngFirestore, router) {
        this.angularFireAuth = angularFireAuth;
        this.ngFirestore = ngFirestore;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.angularFireAuth.authState.subscribe((authState) => {
                this.user = authState.email
                    .replace('@admin.com', '')
                    .replace(/^\w/, (c) => c.toUpperCase());
            });
            this.ngFirestore
                .collection('cabins')
                .snapshotChanges()
                .subscribe((d) => {
                console.log(d);
                this.cabinsOccupated = d.filter((d) => d.payload.doc.data().status === _cabin_cabin_status__WEBPACK_IMPORTED_MODULE_7__["CabinStatus"].Reservada).length;
            });
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.angularFireAuth.signOut();
        });
    }
    addBooking() {
        this.router.navigate(['bookings/booking-form']);
    }
    addCabin() {
        this.router.navigate(['cabins/cabin-form']);
    }
};
HomeAdminPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HomeAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-admin',
        template: _raw_loader_home_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeAdminPage);



/***/ }),

/***/ "GVlO":
/*!*************************************************!*\
  !*** ./src/app/home-admin/home-admin.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-admin__cabins {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFBUiIsImZpbGUiOiJob21lLWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWFkbWluIHtcclxuICAgICZfX2NhYmlucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "jKWR":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-admin/home-admin.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"custom-background\">\n        <ion-title>Bienvenido {{user}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-text color=\"dark\">\n                    <h2>Las cabañas rentadas hoy son:</h2>\n                </ion-text>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-align-items-end\">\n            <ion-col>\n                <div class=\"home-admin__cabins\">\n                    <ion-text color=\"primary\">\n                        <h1>{{cabinsOccupated}}</h1>\n                    </ion-text>\n                    <img src=\"assets/icon/cabin.svg\" height=\"150\">\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <div class=\"home-admin__cabins\">\n                    <ion-button color=\"secondary\" tappable (click)=\"addBooking()\">\n                        Reservar cabaña\n                        <ion-ripple-effect></ion-ripple-effect>\n                    </ion-button>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <div class=\"home-admin__cabins\">\n                    <ion-button color=\"secondary\" tappable (click)=\"addCabin()\">\n                        Crear cabaña\n                        <ion-ripple-effect></ion-ripple-effect>\n                    </ion-button>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button href=\"home-admin\">\n        <ion-label>Inicio</ion-label>\n        <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"cabins\">\n        <ion-label>Cabañas</ion-label>\n        <ion-icon name=\"cabin\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"bookings\">\n        <ion-label>Reservas</ion-label>\n        <ion-icon name=\"ticket-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"clients\">\n        <ion-label>Clientes</ion-label>\n        <ion-icon name=\"people-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"disccounts\">\n        <ion-label>Promos</ion-label>\n        <ion-icon name=\"disccount\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"logout()\">\n        <ion-label>Salir</ion-label>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>");

/***/ }),

/***/ "oMCS":
/*!*************************************************!*\
  !*** ./src/app/home-admin/home-admin.module.ts ***!
  \*************************************************/
/*! exports provided: HomeAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminPageModule", function() { return HomeAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-admin-routing.module */ "60n2");
/* harmony import */ var _home_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-admin.page */ "FyEX");







let HomeAdminPageModule = class HomeAdminPageModule {
};
HomeAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeAdminPageRoutingModule"]
        ],
        declarations: [_home_admin_page__WEBPACK_IMPORTED_MODULE_6__["HomeAdminPage"]]
    })
], HomeAdminPageModule);



/***/ })

}]);
//# sourceMappingURL=home-admin-home-admin-module.js.map