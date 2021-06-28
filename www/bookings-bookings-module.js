(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"],{

/***/ "GatT":
/*!*****************************************************!*\
  !*** ./src/app/bookings/bookings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BookingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageRoutingModule", function() { return BookingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.page */ "RiBf");




const routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
    },
    {
        path: 'booking-form',
        loadChildren: () => Promise.all(/*! import() | booking-form-booking-form-module */[__webpack_require__.e("common"), __webpack_require__.e("booking-form-booking-form-module")]).then(__webpack_require__.bind(null, /*! ./booking-form/booking-form.module */ "VItk")).then(m => m.BookingFormPageModule)
    }
];
let BookingsPageRoutingModule = class BookingsPageRoutingModule {
};
BookingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingsPageRoutingModule);



/***/ }),

/***/ "RiBf":
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bookings.page.html */ "RvsI");
/* harmony import */ var _bookings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookings.page.scss */ "tI7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let BookingsPage = class BookingsPage {
    constructor(ngFirestore, angularFireAuth, router) {
        this.ngFirestore = ngFirestore;
        this.angularFireAuth = angularFireAuth;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let clients;
            let cabins;
            this.ngFirestore
                .collection('cabins')
                .snapshotChanges()
                .subscribe((d) => (cabins = d.map((t) => (Object.assign({ id: t.payload.doc.id }, t.payload.doc.data())))));
            this.ngFirestore
                .collection('clients')
                .snapshotChanges()
                .subscribe((d) => (clients = d.map((t) => (Object.assign({ id: t.payload.doc.id }, t.payload.doc.data())))));
            this.ngFirestore
                .collection('bookings')
                .snapshotChanges()
                .subscribe((d) => {
                console.log(cabins, clients);
                this.bookings = d.map((t) => (Object.assign({ id: t.payload.doc.id, cabinName: cabins.find(d => d.$key === t.payload.doc.data().cabin_id), clientName: clients.find(d => d.$key === t.payload.doc.data().client_id), formattedStartDate: new Date(t.payload.doc.data().start_date).toLocaleDateString(), formattedEndDate: new Date(t.payload.doc.data().end_date).toLocaleDateString() }, t.payload.doc.data())));
            });
        });
    }
    addBooking() {
        this.router.navigate(['bookings/booking-form']);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.angularFireAuth.signOut();
        });
    }
    editBooking(bookingId) {
        this.router.navigate([`bookings/booking-form/${bookingId}`]);
    }
};
BookingsPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
BookingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bookings',
        template: _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bookings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookingsPage);



/***/ }),

/***/ "RvsI":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"custom-background\">\n        <ion-title>Reservas</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let booking of bookings\" (click)=\"editBooking(booking.id)\">\n            <ion-label>\n                {{booking.clientName}}\n                <br> {{booking.formattedStartDate}} - {{booking.formattedEndDate}}\n                <br> Cabaña {{booking.cabinName}}\n                <br>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n        <ion-fab-button color=\"tertiary\" (click)=\"addBooking()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button href=\"home-admin\">\n        <ion-label>Inicio</ion-label>\n        <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"cabins\">\n        <ion-label>Cabañas</ion-label>\n        <ion-icon name=\"cabin\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"bookings\">\n        <ion-label>Reservas</ion-label>\n        <ion-icon name=\"ticket-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"clients\">\n        <ion-label>Clientes</ion-label>\n        <ion-icon name=\"people-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button href=\"disccounts\">\n        <ion-label>Promos</ion-label>\n        <ion-icon name=\"disccount\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"logout()\">\n        <ion-label>Salir</ion-label>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>");

/***/ }),

/***/ "tI7M":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "tx+c":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/*! exports provided: BookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings-routing.module */ "GatT");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.page */ "RiBf");







let BookingsPageModule = class BookingsPageModule {
};
BookingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsPageRoutingModule"]
        ],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
    })
], BookingsPageModule);



/***/ })

}]);
//# sourceMappingURL=bookings-bookings-module.js.map