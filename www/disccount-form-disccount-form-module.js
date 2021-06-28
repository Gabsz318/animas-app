(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disccount-form-disccount-form-module"],{

/***/ "AYKm":
/*!***************************************************************!*\
  !*** ./src/app/disccounts/disccount-form/disccount-fields.ts ***!
  \***************************************************************/
/*! exports provided: disccountFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disccountFields", function() { return disccountFields; });
const disccountFields = [
    {
        fieldName: 'percentage',
        label: 'Prcentaje',
        required: true,
        type: 'number'
    },
    {
        fieldName: 'start_date',
        label: 'Fecha inicio',
        required: true,
        type: 'date'
    },
    { fieldName: 'end_date', label: 'Fecha final', required: true, type: 'date' }
];


/***/ }),

/***/ "Kq9T":
/*!********************************************************************!*\
  !*** ./src/app/disccounts/disccount-form/disccount-form.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjY291bnQtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "NfKZ":
/*!********************************************************************!*\
  !*** ./src/app/disccounts/disccount-form/disccount-form.module.ts ***!
  \********************************************************************/
/*! exports provided: DisccountFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisccountFormPageModule", function() { return DisccountFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _disccount_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disccount-form-routing.module */ "nC1U");
/* harmony import */ var _disccount_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disccount-form.page */ "paLK");







let DisccountFormPageModule = class DisccountFormPageModule {
};
DisccountFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _disccount_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisccountFormPageRoutingModule"]
        ],
        declarations: [_disccount_form_page__WEBPACK_IMPORTED_MODULE_6__["DisccountFormPage"]]
    })
], DisccountFormPageModule);



/***/ }),

/***/ "nC1U":
/*!****************************************************************************!*\
  !*** ./src/app/disccounts/disccount-form/disccount-form-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DisccountFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisccountFormPageRoutingModule", function() { return DisccountFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _disccount_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disccount-form.page */ "paLK");




const routes = [
    {
        path: '',
        component: _disccount_form_page__WEBPACK_IMPORTED_MODULE_3__["DisccountFormPage"]
    },
    {
        path: ':disccountId',
        component: _disccount_form_page__WEBPACK_IMPORTED_MODULE_3__["DisccountFormPage"]
    }
];
let DisccountFormPageRoutingModule = class DisccountFormPageRoutingModule {
};
DisccountFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisccountFormPageRoutingModule);



/***/ }),

/***/ "paLK":
/*!******************************************************************!*\
  !*** ./src/app/disccounts/disccount-form/disccount-form.page.ts ***!
  \******************************************************************/
/*! exports provided: DisccountFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisccountFormPage", function() { return DisccountFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_disccount_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./disccount-form.page.html */ "uWjJ");
/* harmony import */ var _disccount_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disccount-form.page.scss */ "Kq9T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _disccount_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disccount-fields */ "AYKm");







let DisccountFormPage = class DisccountFormPage {
    constructor(ngFirestore, route, router) {
        this.ngFirestore = ngFirestore;
        this.route = route;
        this.router = router;
        this.disccountFields = _disccount_fields__WEBPACK_IMPORTED_MODULE_6__["disccountFields"];
        this.disccount = {
            percentage: 0,
            start_date: new Date(),
            end_date: new Date(),
            status: 'Disponible',
        };
        this.status = {
            Activa: {
                icon: 'checkmark-circle',
                color: 'green',
            },
            Caducada: {
                icon: 'lock-closed',
                color: 'red',
            },
        };
    }
    ngOnInit() {
        this.disccountId = this.route.snapshot.params.disccountId;
        if (this.disccountId) {
            this.ngFirestore
                .collection('disccounts')
                .doc(this.disccountId)
                .valueChanges()
                .subscribe((d) => (this.disccount = d));
        }
    }
    save() {
        if (!this.disccountId) {
            this.ngFirestore.collection('disccounts').add(this.disccount);
            this.router.navigate(['disccounts']);
        }
        else {
            this.ngFirestore
                .collection('disccounts')
                .doc(this.disccountId)
                .update(this.disccount)
                .then(() => {
                this.router.navigate(['disccounts']);
            })
                .catch((error) => console.log(error));
        }
    }
    delete() {
        this.ngFirestore.doc('disccounts/' + this.disccountId).delete();
        this.router.navigate(['disccounts']);
    }
};
DisccountFormPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DisccountFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-disccount-form',
        template: _raw_loader_disccount_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_disccount_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DisccountFormPage);



/***/ }),

/***/ "uWjJ":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disccounts/disccount-form/disccount-form.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"custom-background\">\n        <ion-title>{{disccountId ?'Editar ': 'Crear '}}Promoción {{disccount?.percentage ? disccount?.percentage+ '%': ''}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab *ngIf=\"disccountId\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"delete()\">\n        <ion-fab-button color=\"danger\">\n            <ion-icon class=\"danger\" name=\"trash\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <!-- fab placed to the bottom end-->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"save()\">\n        <ion-fab-button color=\"tertiary\">\n            <ion-icon class=\"white\" name=\"checkmark-done-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-list>\n        <ion-item *ngIf=\"missingFields\">\n            <ion-badge style=\"width: 100%;\" color=\"danger\">\n                Tienes campos sin completar:\n                <p *ngFor=\"let field of missingFields\">\n                    {{field}}\n                </p>\n            </ion-badge>\n        </ion-item>\n        <ion-item *ngFor=\"let field of disccountFields\">\n            <ion-label>{{field.label}}</ion-label>\n            <ng-container [ngSwitch]=\"true\">\n                <ng-container *ngSwitchCase=\"field.type === 'date'\">\n                    <ion-datetime [name]=\"field.fieldName\" [required]=\"field.required\" [(ngModel)]=\"disccount[field.fieldName]\"></ion-datetime>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"field.type === 'number' || field.type === 'text'\">\n                    <ion-input [disabled]=\"field.fieldName === 'cabin_name'\" [type]=\"field.type\" [(ngModel)]=\"disccount[field.fieldName]\"></ion-input>\n                </ng-container>\n            </ng-container>\n        </ion-item>\n        <ion-text>\n            <ion-icon [style.color]=\"status && status[disccount?.status] ? status[disccount?.status]?.color:''\" [name]=\"status && status[disccount?.status] ? status[disccount?.status]?.icon:''\">\n            </ion-icon>\n            &nbsp;{{disccount.status}}\n        </ion-text>\n    </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=disccount-form-disccount-form-module.js.map