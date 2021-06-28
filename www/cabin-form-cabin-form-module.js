(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cabin-form-cabin-form-module"],{

/***/ "2nOi":
/*!*****************************************************!*\
  !*** ./src/app/cabin/cabin-form/cabin-form.page.ts ***!
  \*****************************************************/
/*! exports provided: CabinFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinFormPage", function() { return CabinFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cabin_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cabin-form.page.html */ "HoFe");
/* harmony import */ var _cabin_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cabin-form.page.scss */ "jyit");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cabin_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cabin-status */ "7f/p");
/* harmony import */ var _cabin_fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cabin-fields */ "wMU4");








let CabinFormPage = class CabinFormPage {
    constructor(ngFirestore, route, router) {
        this.ngFirestore = ngFirestore;
        this.route = route;
        this.router = router;
        this.cabin = {
            cabin_name: '1',
            quantity_persons: 0,
            matrimonial_bed_quantity: 0,
            king_size_quantity: 0,
            individual_quantity: 0,
            bath_quantity: 0,
            chicken_quantity: 0,
            living_room_quantity: 0,
            price: 0,
            plants_quantity: 0,
            status: _cabin_status__WEBPACK_IMPORTED_MODULE_6__["CabinStatus"].Ocupada,
        };
        this.cabinFields = _cabin_fields__WEBPACK_IMPORTED_MODULE_7__["cabinFields"];
    }
    ngOnInit() {
        this.cabinId = this.route.snapshot.params.cabinId;
        if (this.cabinId) {
            this.ngFirestore
                .collection('cabins')
                .doc(this.cabinId)
                .valueChanges()
                .subscribe((d) => {
                this.cabin = d;
            });
        }
    }
    addCabin() {
        this.ngFirestore.collection('cabins').add(this.cabin);
        this.router.navigate(['cabins']);
    }
    editCabin() {
        this.ngFirestore
            .collection('cabins')
            .doc(this.cabinId)
            .update(this.cabin)
            .then(() => {
            this.router.navigate(['cabins']);
        })
            .catch((error) => console.log(error));
    }
    delete() {
        this.ngFirestore.doc('cabins/' + this.cabinId).delete();
        this.router.navigate(['cabins']);
    }
};
CabinFormPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CabinFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cabin-form',
        template: _raw_loader_cabin_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cabin_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CabinFormPage);



/***/ }),

/***/ "HoFe":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cabin/cabin-form/cabin-form.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"custom-background\">\n        <ion-title>Crear cabaña</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-button *ngIf=\"cabinId\" color=\"danger\" (click)=\"delete()\">\n        Eliminar\n    </ion-button>\n    <ion-button *ngIf=\"!cabinId\" color=\"success\" tappable (click)=\"addCabin()\">\n        Crear\n        <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n    <ion-button *ngIf=\"cabinId\" color=\"success\" tappable (click)=\"editCabin()\">\n        Guardar\n        <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n    <ion-list>\n        <ion-item *ngFor=\"let field of cabinFields\">\n            <ion-label>{{field.label}}</ion-label>\n            <ng-container [ngSwitch]=\"true\">\n                <ng-container *ngSwitchCase=\"field.type === 'number' || field.type === 'text'\">\n                    <ion-input [disabled]=\"field.fieldName === 'cabin_name'\" [type]=\"field.type\" [(ngModel)]=\"cabin[field.fieldName]\"></ion-input>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"field.type === 'select'\">\n                    <ion-select placeholder=\"{{'Select' + field.label}}\" [(ngModel)]=\"cabin[field.fieldName]\">\n                        <ion-select-option *ngFor=\"let option of field.options; let i = index\" [value]=\"i\">\n                            {{option}}\n                        </ion-select-option>\n                    </ion-select>\n                </ng-container>\n            </ng-container>\n        </ion-item>\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "Vm01":
/*!***************************************************************!*\
  !*** ./src/app/cabin/cabin-form/cabin-form-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CabinFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinFormPageRoutingModule", function() { return CabinFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cabin_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cabin-form.page */ "2nOi");




const routes = [
    {
        path: '',
        component: _cabin_form_page__WEBPACK_IMPORTED_MODULE_3__["CabinFormPage"]
    },
    {
        path: ':cabinId',
        component: _cabin_form_page__WEBPACK_IMPORTED_MODULE_3__["CabinFormPage"]
    }
];
let CabinFormPageRoutingModule = class CabinFormPageRoutingModule {
};
CabinFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CabinFormPageRoutingModule);



/***/ }),

/***/ "hP8J":
/*!*******************************************************!*\
  !*** ./src/app/cabin/cabin-form/cabin-form.module.ts ***!
  \*******************************************************/
/*! exports provided: CabinFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinFormPageModule", function() { return CabinFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cabin_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cabin-form-routing.module */ "Vm01");
/* harmony import */ var _cabin_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cabin-form.page */ "2nOi");







let CabinFormPageModule = class CabinFormPageModule {
};
CabinFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cabin_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["CabinFormPageRoutingModule"]
        ],
        declarations: [_cabin_form_page__WEBPACK_IMPORTED_MODULE_6__["CabinFormPage"]]
    })
], CabinFormPageModule);



/***/ }),

/***/ "jyit":
/*!*******************************************************!*\
  !*** ./src/app/cabin/cabin-form/cabin-form.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWJpbi1mb3JtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "wMU4":
/*!**************************************************!*\
  !*** ./src/app/cabin/cabin-form/cabin-fields.ts ***!
  \**************************************************/
/*! exports provided: cabinFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cabinFields", function() { return cabinFields; });
const cabinFields = [
    {
        label: '# de cabaña',
        type: 'number',
        required: false,
        fieldName: 'cabin_name',
    },
    {
        label: '# de personas',
        type: 'number',
        required: true,
        fieldName: 'quantity_persons',
    },
    {
        label: '# de camas matrimoniales',
        type: 'number',
        required: false,
        fieldName: 'matrimonial_bed_quantity',
    },
    {
        label: '# de camas king size',
        type: 'number',
        required: false,
        fieldName: 'king_size_quantity',
    },
    {
        label: '# de camas individual',
        type: 'number',
        required: false,
        fieldName: 'individual_quantity',
    },
    {
        label: '# de baños',
        type: 'number',
        required: true,
        fieldName: 'bath_quantity',
    },
    {
        label: '# de cocinetas',
        type: 'number',
        required: true,
        fieldName: 'chicken_quantity',
    },
    {
        label: '# de salas',
        type: 'number',
        required: true,
        fieldName: 'living_room_quantity',
    },
    {
        label: 'Precio por noche',
        type: 'number',
        required: true,
        fieldName: 'price',
    },
    {
        label: '# de plantas',
        type: 'number',
        required: true,
        fieldName: 'plants_quantity',
    },
    {
        label: 'Estatus',
        type: 'select',
        required: true,
        options: ['Disponible', 'Ocupada', 'Reservando', 'Reservada'],
        fieldName: 'status',
    },
];


/***/ })

}]);
//# sourceMappingURL=cabin-form-cabin-form-module.js.map