(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_paypalpaymentoptions_paypalpaymentoptions_module_ts"],{

/***/ 80860:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/paypalpaymentoptions/paypalpaymentoptions-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalpaymentoptionsPageRoutingModule": function() { return /* binding */ PaypalpaymentoptionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _paypalpaymentoptions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypalpaymentoptions.page */ 69465);




const routes = [
    {
        path: '',
        component: _paypalpaymentoptions_page__WEBPACK_IMPORTED_MODULE_0__.PaypalpaymentoptionsPage
    }
];
let PaypalpaymentoptionsPageRoutingModule = class PaypalpaymentoptionsPageRoutingModule {
};
PaypalpaymentoptionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaypalpaymentoptionsPageRoutingModule);



/***/ }),

/***/ 77292:
/*!***************************************************************************!*\
  !*** ./src/app/pages/paypalpaymentoptions/paypalpaymentoptions.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalpaymentoptionsPageModule": function() { return /* binding */ PaypalpaymentoptionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _paypalpaymentoptions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypalpaymentoptions-routing.module */ 80860);
/* harmony import */ var _paypalpaymentoptions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paypalpaymentoptions.page */ 69465);
/* harmony import */ var src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/main-components.module */ 37597);








let PaypalpaymentoptionsPageModule = class PaypalpaymentoptionsPageModule {
};
PaypalpaymentoptionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _paypalpaymentoptions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaypalpaymentoptionsPageRoutingModule,
            src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_2__.MainComponentsModule
        ],
        declarations: [_paypalpaymentoptions_page__WEBPACK_IMPORTED_MODULE_1__.PaypalpaymentoptionsPage]
    })
], PaypalpaymentoptionsPageModule);



/***/ }),

/***/ 69465:
/*!*************************************************************************!*\
  !*** ./src/app/pages/paypalpaymentoptions/paypalpaymentoptions.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalpaymentoptionsPage": function() { return /* binding */ PaypalpaymentoptionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_paypalpaymentoptions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./paypalpaymentoptions.page.html */ 78946);
/* harmony import */ var _paypalpaymentoptions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paypalpaymentoptions.page.scss */ 94690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);





let PaypalpaymentoptionsPage = class PaypalpaymentoptionsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        const paymentInfo = history.state.data;
        this.depositAmount = paymentInfo.newPaypalOrder.amount;
    }
    backToSwap() {
        this.router.navigate(['/nav/swap']);
    }
};
PaypalpaymentoptionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PaypalpaymentoptionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-paypalpaymentoptions',
        template: _raw_loader_paypalpaymentoptions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_paypalpaymentoptions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaypalpaymentoptionsPage);



/***/ }),

/***/ 94690:
/*!***************************************************************************!*\
  !*** ./src/app/pages/paypalpaymentoptions/paypalpaymentoptions.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tittle {\n  text-align: center;\n}\n\n.paymentoption {\n  text-align: center;\n}\n\n.option-content {\n  height: 50%;\n}\n\n.cancel-content {\n  --offset-top: -240px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXBhbHBheW1lbnRvcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQWdCLG9CQUFBO0VBQ1osa0JBQUE7QUFFSiIsImZpbGUiOiJwYXlwYWxwYXltZW50b3B0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aXR0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBheW1lbnRvcHRpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3B0aW9uLWNvbnRlbnR7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5jYW5jZWwtY29udGVudHstLW9mZnNldC10b3A6IC0yNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59ICJdfQ== */");

/***/ }),

/***/ 78946:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paypalpaymentoptions/paypalpaymentoptions.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<ion-app>\n  <ion-header  no-border>\n    <app-top-navigation-toolbar></app-top-navigation-toolbar>\n  </ion-header>\n  <ion-content class=\"option-content\">\n    <h1 class=\"tittle\">Seleccione una de las siguientes opciones: </h1><br/>\n    <app-paypalPaymentOptions class=\"paymentoption\" [amount]='depositAmount'></app-paypalPaymentOptions>\n   \n    \n  </ion-content>  \n  <ion-content class=\"cancel-content\">\n    \n    <ion-button class=\"cancelbtn\" shape=\"round\" (click)=\"backToSwap()\" >Cancelar</ion-button>\n  </ion-content>\n  \n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_paypalpaymentoptions_paypalpaymentoptions_module_ts-es2015.js.map