(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "9bfK":
/*!*****************************************!*\
  !*** ./src/app/clients/clients.page.ts ***!
  \*****************************************/
/*! exports provided: ClientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPage", function() { return ClientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clients_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clients.page.html */ "NXgi");
/* harmony import */ var _clients_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients.page.scss */ "NfJl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let ClientsPage = class ClientsPage {
    constructor(ngFirestore, angularFireAuth, router) {
        this.ngFirestore = ngFirestore;
        this.angularFireAuth = angularFireAuth;
        this.router = router;
    }
    ngOnInit() {
        this.ngFirestore
            .collection('clients')
            .snapshotChanges()
            .subscribe((d) => (this.clients = d.map((t) => (Object.assign({ id: t.payload.doc.id }, t.payload.doc.data())))));
    }
    createCabin() {
        this.router.navigate(['clients/client-form']);
    }
    editCabin(clientId) {
        this.router.navigate([`clients/client-form/${clientId}`]);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.angularFireAuth.signOut();
        });
    }
};
ClientsPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ClientsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-clients',
        template: _raw_loader_clients_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clients_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClientsPage);



/***/ }),

/***/ "9iw0":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/*! exports provided: ClientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageModule", function() { return ClientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients-routing.module */ "f2Yv");
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients.page */ "9bfK");







let ClientsPageModule = class ClientsPageModule {
};
ClientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clients_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientsPageRoutingModule"]
        ],
        declarations: [_clients_page__WEBPACK_IMPORTED_MODULE_6__["ClientsPage"]]
    })
], ClientsPageModule);



/***/ }),

/***/ "NXgi":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"custom-background\">\n        <ion-title>Clientes</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"createCabin()\">\n        <ion-fab-button color=\"tertiary\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor=\"let client of clients\" size=\"6\">\n                <ion-card (click)=\"editCabin(client.id)\">\n                    <ion-card-header>\n                        <ion-icon name=\"person-outline\"></ion-icon>\n                        <ion-card-title class=\"flex-center\">\n                            {{client.name}}</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content class=\"flex ion-align-items-center ion-justify-content-center\">\n                        Correo:<br> {{client.email}}\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button href=\"home-admin\">\n        <ion-label>Inicio</ion-label>\n        <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"cabins\">\n        <ion-label>Cabañas</ion-label>\n        <ion-icon name=\"cabin\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"bookings\">\n        <ion-label>Reservas</ion-label>\n        <ion-icon name=\"ticket-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"clients\">\n        <ion-label>Clientes</ion-label>\n        <ion-icon name=\"people-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"disccounts\">\n        <ion-label>Promos</ion-label>\n        <ion-icon name=\"disccount\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"logout()\">\n        <ion-label>Salir</ion-label>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>");

/***/ }),

/***/ "NfJl":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "f2Yv":
/*!***************************************************!*\
  !*** ./src/app/clients/clients-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ClientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageRoutingModule", function() { return ClientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients.page */ "9bfK");




const routes = [
    {
        path: '',
        component: _clients_page__WEBPACK_IMPORTED_MODULE_3__["ClientsPage"]
    },
    {
        path: 'client-form',
        loadChildren: () => __webpack_require__.e(/*! import() | client-form-client-form-module */ "client-form-client-form-module").then(__webpack_require__.bind(null, /*! ./client-form/client-form.module */ "P8Cf")).then(m => m.ClientFormPageModule)
    }
];
let ClientsPageRoutingModule = class ClientsPageRoutingModule {
};
ClientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=clients-clients-module.js.map