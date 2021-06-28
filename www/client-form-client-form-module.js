(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-form-client-form-module"],{

/***/ "8dn7":
/*!*******************************************************************!*\
  !*** ./src/app/clients/client-form/client-form-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ClientFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormPageRoutingModule", function() { return ClientFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _client_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-form.page */ "FsXs");




const routes = [
    {
        path: '',
        component: _client_form_page__WEBPACK_IMPORTED_MODULE_3__["ClientFormPage"]
    },
    {
        path: ':clientId',
        component: _client_form_page__WEBPACK_IMPORTED_MODULE_3__["ClientFormPage"]
    }
];
let ClientFormPageRoutingModule = class ClientFormPageRoutingModule {
};
ClientFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientFormPageRoutingModule);



/***/ }),

/***/ "FsXs":
/*!*********************************************************!*\
  !*** ./src/app/clients/client-form/client-form.page.ts ***!
  \*********************************************************/
/*! exports provided: ClientFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormPage", function() { return ClientFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-form.page.html */ "ud+w");
/* harmony import */ var _client_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-form.page.scss */ "XGl7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _client_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-fields */ "eyw8");







let ClientFormPage = class ClientFormPage {
    constructor(ngFirestore, route, router) {
        this.ngFirestore = ngFirestore;
        this.route = route;
        this.router = router;
        this.clientFields = _client_fields__WEBPACK_IMPORTED_MODULE_6__["clientFields"];
        this.client = {
            name: '',
            telphone: '',
            address: '',
            email: '',
        };
    }
    ngOnInit() {
        this.clientId = this.route.snapshot.params.clientId;
        if (this.clientId) {
            this.ngFirestore
                .collection('clients')
                .doc(this.clientId)
                .valueChanges()
                .subscribe((d) => (this.client = d));
        }
    }
    save() {
        if (!this.clientId) {
            this.ngFirestore.collection('clients').add(this.client);
            this.router.navigate(['clients']);
        }
        else {
            this.ngFirestore
                .collection('clients')
                .doc(this.clientId)
                .update(this.client)
                .then(() => {
                this.router.navigate(['clients']);
            })
                .catch((error) => console.log(error));
        }
    }
    delete() {
        this.ngFirestore.doc('clients/' + this.clientId).delete();
        this.router.navigate(['clients']);
    }
};
ClientFormPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ClientFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-client-form',
        template: _raw_loader_client_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_client_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClientFormPage);



/***/ }),

/***/ "P8Cf":
/*!***********************************************************!*\
  !*** ./src/app/clients/client-form/client-form.module.ts ***!
  \***********************************************************/
/*! exports provided: ClientFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormPageModule", function() { return ClientFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _client_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-form-routing.module */ "8dn7");
/* harmony import */ var _client_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-form.page */ "FsXs");







let ClientFormPageModule = class ClientFormPageModule {
};
ClientFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _client_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientFormPageRoutingModule"]
        ],
        declarations: [_client_form_page__WEBPACK_IMPORTED_MODULE_6__["ClientFormPage"]]
    })
], ClientFormPageModule);



/***/ }),

/***/ "XGl7":
/*!***********************************************************!*\
  !*** ./src/app/clients/client-form/client-form.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "eyw8":
/*!******************************************************!*\
  !*** ./src/app/clients/client-form/client-fields.ts ***!
  \******************************************************/
/*! exports provided: clientFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientFields", function() { return clientFields; });
const clientFields = [
    { fieldName: 'name', label: 'Nombre', required: true, type: 'text' },
    { fieldName: 'telphone', label: 'Teléfono', required: true, type: 'text' },
    { fieldName: 'address', label: 'Dirección', required: true, type: 'text' },
    { fieldName: 'email', label: 'Correo', required: true, type: 'email' }
];


/***/ }),

/***/ "ud+w":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-form/client-form.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"custom-background\">\n        <ion-title>{{clientId ?'Editar ': 'Crear '}}Cliente {{client?.name}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab *ngIf=\"clientId\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"delete()\">\n        <ion-fab-button color=\"danger\">\n            <ion-icon class=\"danger\" name=\"trash\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <!-- fab placed to the bottom end-->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"save()\">\n        <ion-fab-button color=\"tertiary\">\n            <ion-icon class=\"white\" name=\"checkmark-done-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-list>\n        <ion-item *ngIf=\"missingFields\">\n            <ion-badge style=\"width: 100%;\" color=\"danger\">\n                Tienes campos sin completar:\n                <p *ngFor=\"let field of missingFields\">\n                    {{field}}\n                </p>\n            </ion-badge>\n        </ion-item>\n        <ion-item *ngFor=\"let field of clientFields\">\n            <ion-label>{{field.label}}</ion-label>\n            <ion-input [disabled]=\"field.fieldName === 'cabin_name'\" [type]=\"field.type\" [(ngModel)]=\"client[field.fieldName]\"></ion-input>\n        </ion-item>\n    </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=client-form-client-form-module.js.map