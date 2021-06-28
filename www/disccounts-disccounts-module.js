(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disccounts-disccounts-module"],{

/***/ "+B2b":
/*!*********************************************************!*\
  !*** ./src/app/disccounts/disccounts-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DisccountsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisccountsPageRoutingModule", function() { return DisccountsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _disccounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disccounts.page */ "54uo");




const routes = [
    {
        path: '',
        component: _disccounts_page__WEBPACK_IMPORTED_MODULE_3__["DisccountsPage"]
    },
    {
        path: 'disccount-form',
        loadChildren: () => __webpack_require__.e(/*! import() | disccount-form-disccount-form-module */ "disccount-form-disccount-form-module").then(__webpack_require__.bind(null, /*! ./disccount-form/disccount-form.module */ "NfKZ")).then(m => m.DisccountFormPageModule)
    }
];
let DisccountsPageRoutingModule = class DisccountsPageRoutingModule {
};
DisccountsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisccountsPageRoutingModule);



/***/ }),

/***/ "54uo":
/*!***********************************************!*\
  !*** ./src/app/disccounts/disccounts.page.ts ***!
  \***********************************************/
/*! exports provided: DisccountsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisccountsPage", function() { return DisccountsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_disccounts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./disccounts.page.html */ "Gi3l");
/* harmony import */ var _disccounts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disccounts.page.scss */ "9oPx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let DisccountsPage = class DisccountsPage {
    constructor(ngFirestore, angularFireAuth, router) {
        this.ngFirestore = ngFirestore;
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.status = {
            Activa: {
                icon: 'checkmark-circle',
                color: 'green'
            },
            Caducada: {
                icon: 'lock-closed',
                color: 'red'
            }
        };
    }
    ngOnInit() {
        this.ngFirestore
            .collection('disccounts')
            .snapshotChanges()
            .subscribe((d) => (this.disccounts = d.map((t) => (Object.assign({ id: t.payload.doc.id }, t.payload.doc.data())))));
    }
    createCabin() {
        this.router.navigate(['disccounts/disccount-form']);
    }
    editCabin(disccountId) {
        this.router.navigate([`disccount/disccount-form/${disccountId}`]);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.angularFireAuth.signOut();
        });
    }
};
DisccountsPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
DisccountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-disccounts',
        template: _raw_loader_disccounts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_disccounts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DisccountsPage);



/***/ }),

/***/ "9oPx":
/*!*************************************************!*\
  !*** ./src/app/disccounts/disccounts.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjY291bnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Gi3l":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disccounts/disccounts.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"custom-background\">\n        <ion-title>Promociones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"createCabin()\">\n        <ion-fab-button color=\"tertiary\">\n            <ion-icon class=\"white\" name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor=\"let disccount of disccounts\" size=\"6\">\n                <ion-card (click)=\"editCabin(disccount.id)\">\n                    <ion-card-header>\n                        <ion-icon name=\"disccount\"></ion-icon>\n                        <ion-card-title class=\"flex-center\">\n                            Promo {{disccount.percentage}} %</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-subtitle class=\"flex-center\">Valida de:<br> {{disccount?.formattedStartDate}} - {{disccount?.formattedEndDate}}\n                    </ion-card-subtitle>\n                    <ion-card-content class=\"flex ion-align-items-center ion-justify-content-center\">\n                        <ion-icon [style.font-size]=\"'1.5rem'\" [style.color]=\"status && status[disccount.status] ? status[disccount.status]?.color:''\" [name]=\"status && status[disccount.status] ? status[disccount.status]?.icon :''\">\n                        </ion-icon>\n                        &nbsp;{{disccount.status}}\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button href=\"home-admin\">\n        <ion-label>Inicio</ion-label>\n        <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"cabins\">\n        <ion-label>Cabañas</ion-label>\n        <ion-icon name=\"cabin\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"bookings\">\n        <ion-label>Reservas</ion-label>\n        <ion-icon name=\"ticket-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"clients\">\n        <ion-label>Clientes</ion-label>\n        <ion-icon name=\"people-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"disccounts\">\n        <ion-label>Promos</ion-label>\n        <ion-icon name=\"disccount\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"logout()\">\n        <ion-label>Salir</ion-label>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>");

/***/ }),

/***/ "u763":
/*!*************************************************!*\
  !*** ./src/app/disccounts/disccounts.module.ts ***!
  \*************************************************/
/*! exports provided: DisccountsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisccountsPageModule", function() { return DisccountsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _disccounts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disccounts-routing.module */ "+B2b");
/* harmony import */ var _disccounts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disccounts.page */ "54uo");







let DisccountsPageModule = class DisccountsPageModule {
};
DisccountsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _disccounts_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisccountsPageRoutingModule"]
        ],
        declarations: [_disccounts_page__WEBPACK_IMPORTED_MODULE_6__["DisccountsPage"]]
    })
], DisccountsPageModule);



/***/ })

}]);
//# sourceMappingURL=disccounts-disccounts-module.js.map