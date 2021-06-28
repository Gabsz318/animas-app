(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cabin-cabin-module"],{

/***/ "6g35":
/*!***********************************************!*\
  !*** ./src/app/cabin/cabin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CabinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinPageRoutingModule", function() { return CabinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cabin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cabin.page */ "Uv5i");




const routes = [
    {
        path: '',
        component: _cabin_page__WEBPACK_IMPORTED_MODULE_3__["CabinPage"]
    },
    {
        path: 'cabin-form',
        loadChildren: () => __webpack_require__.e(/*! import() | cabin-form-cabin-form-module */ "cabin-form-cabin-form-module").then(__webpack_require__.bind(null, /*! ./cabin-form/cabin-form.module */ "hP8J")).then(m => m.CabinFormPageModule)
    }
];
let CabinPageRoutingModule = class CabinPageRoutingModule {
};
CabinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CabinPageRoutingModule);



/***/ }),

/***/ "8SGh":
/*!***************************************!*\
  !*** ./src/app/cabin/cabin.module.ts ***!
  \***************************************/
/*! exports provided: CabinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinPageModule", function() { return CabinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cabin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cabin-routing.module */ "6g35");
/* harmony import */ var _cabin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cabin.page */ "Uv5i");







let CabinPageModule = class CabinPageModule {
};
CabinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cabin_routing_module__WEBPACK_IMPORTED_MODULE_5__["CabinPageRoutingModule"]
        ],
        declarations: [_cabin_page__WEBPACK_IMPORTED_MODULE_6__["CabinPage"]]
    })
], CabinPageModule);



/***/ }),

/***/ "Az5E":
/*!***************************************!*\
  !*** ./src/app/cabin/cabin.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-center {\n  display: flex;\n  justify-content: center;\n  padding: 0 1rem;\n}\n\nion-img {\n  height: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhYmluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJjYWJpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "HLRh":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cabin/cabin.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"custom-background\">\n        <ion-title>Cabañas</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor=\"let cabin of cabins\" size=\"6\">\n                <ion-card (click)=\"editCabin(cabin.id)\">\n                    <ion-card-header>\n                        <ion-img src=\"assets/icon/cabin.svg\"></ion-img>\n                        <ion-card-title>\n                            Cabaña {{cabin.cabin_name}}</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-subtitle class=\"flex-center\">Capacidad:&nbsp; {{cabin.quantity_persons}} personas</ion-card-subtitle>\n                    <ion-card-content class=\"flex ion-align-items-center ion-justify-content-center\">\n                        <ion-icon [style.font-size]=\"'1.5rem'\" [style.color]=\"status && status[cabin.status] ? status[cabin.status]?.color:''\" [name]=\"status && status[cabin.status] ? status[cabin.status]?.icon:''\"></ion-icon>\n                        &nbsp;{{CabinStatus[cabin.status]}}\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n        <ion-fab-button color=\"tertiary\" (click)=\"addCabin()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button href=\"home-admin\">\n        <ion-label>Inicio</ion-label>\n        <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"cabins\">\n        <ion-label>Cabañas</ion-label>\n        <ion-icon name=\"cabin\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"bookings\">\n        <ion-label>Reservas</ion-label>\n        <ion-icon name=\"ticket-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"clients\">\n        <ion-label>Clientes</ion-label>\n        <ion-icon name=\"people-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"disccounts\">\n        <ion-label>Promos</ion-label>\n        <ion-icon name=\"disccount\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"logout()\">\n        <ion-label>Salir</ion-label>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>");

/***/ }),

/***/ "Uv5i":
/*!*************************************!*\
  !*** ./src/app/cabin/cabin.page.ts ***!
  \*************************************/
/*! exports provided: CabinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinPage", function() { return CabinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cabin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cabin.page.html */ "HLRh");
/* harmony import */ var _cabin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cabin.page.scss */ "Az5E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cabin_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cabin-status */ "7f/p");








let CabinPage = class CabinPage {
    constructor(ngFirestore, angularFireAuth, router) {
        this.ngFirestore = ngFirestore;
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.CabinStatus = _cabin_status__WEBPACK_IMPORTED_MODULE_7__["CabinStatus"];
        this.status = {
            0: {
                icon: 'checkmark-circle',
                color: 'green',
            },
            1: {
                icon: 'lock-closed',
                color: 'red',
            },
            2: {
                icon: 'bookmarks',
                color: 'orange',
            },
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ngFirestore
                .collection('cabins')
                .snapshotChanges()
                .subscribe((d) => (this.cabins = d.map((t) => (Object.assign({ id: t.payload.doc.id }, t.payload.doc.data())))));
        });
    }
    addCabin() {
        this.router.navigate(['cabins/cabin-form']);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.angularFireAuth.signOut();
        });
    }
    editCabin(cabinId) {
        this.router.navigate([`cabins/cabin-form/${cabinId}`]);
    }
};
CabinPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
CabinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cabin',
        template: _raw_loader_cabin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cabin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CabinPage);



/***/ })

}]);
//# sourceMappingURL=cabin-cabin-module.js.map