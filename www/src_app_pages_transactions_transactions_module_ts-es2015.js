(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_transactions_transactions_module_ts"],{

/***/ 12752:
/*!*******************************************************************!*\
  !*** ./src/app/pages/transactions/transactions-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsPageRoutingModule": function() { return /* binding */ TransactionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions.page */ 47593);




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_0__.TransactionsPage
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ 34307:
/*!***********************************************************!*\
  !*** ./src/app/pages/transactions/transactions.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsPageModule": function() { return /* binding */ TransactionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions-routing.module */ 12752);
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.page */ 47593);
/* harmony import */ var src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/main-components.module */ 37597);








let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionsPageRoutingModule,
            src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_2__.MainComponentsModule
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_1__.TransactionsPage]
    })
], TransactionsPageModule);



/***/ }),

/***/ 47593:
/*!*********************************************************!*\
  !*** ./src/app/pages/transactions/transactions.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsPage": function() { return /* binding */ TransactionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_transactions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./transactions.page.html */ 5705);
/* harmony import */ var _transactions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.page.scss */ 69766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/transaction.service */ 7565);





let TransactionsPage = class TransactionsPage {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    ngOnInit() {
        this.doFetch();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.doFetch();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    doFetch() {
        this.getUserTransactions();
    }
    getUserTransactions() {
        this.transactionService.getUserTransactions().then((response) => {
            console.log(response);
            response.forEach(function (item) {
                const createdDate = new Date(item.create_time);
                item.create_time = createdDate.toString().replace('GMT-0400 (Atlantic Standard Time)', '');
            });
            this.transationHistory = response;
        }).catch((error) => {
            console.log(error);
        });
    }
};
TransactionsPage.ctorParameters = () => [
    { type: src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_2__.TransactionService }
];
TransactionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-transactions',
        template: _raw_loader_transactions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_transactions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TransactionsPage);



/***/ }),

/***/ 69766:
/*!***********************************************************!*\
  !*** ./src/app/pages/transactions/transactions.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5705:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transactions/transactions.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header> \n    <app-top-navigation-toolbar>Historial Transaciones</app-top-navigation-toolbar> \n</ion-header>\n \n<!-- List of Text Items -->\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher> \n  <li style=\"list-style: none;\" *ngFor=\"let transation  of transationHistory\">\n    <ion-card>\n      <ion-item> \n          <h3> <img src=\"../../../assets/Icon awesome-coins.png\"> {{transation.id}}  </h3>\n        <ion-label></ion-label>\n        <!-- <ion-button fill=\"outline\" slot=\"end\">Ver</ion-button> -->\n      </ion-item>\n      <ion-item>\n        Fecha: {{transation.create_time}} <br/>\n        Monto Total: {{transation.gross_amount}} $ <br/>\n        <!-- Monto Neto: {{transation.net_amount}} $ -->\n      </ion-item>\n    \n      <ion-card-content>\n        {{transation.status}}\n      </ion-card-content>\n    </ion-card>\n  </li>\n</ion-content> \n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transactions_transactions_module_ts-es2015.js.map