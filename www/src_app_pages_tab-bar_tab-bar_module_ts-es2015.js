(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_tab-bar_tab-bar_module_ts"],{

/***/ 58351:
/*!*********************************************************!*\
  !*** ./src/app/pages/tab-bar/tab-bar-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabBarPageRoutingModule": function() { return /* binding */ TabBarPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _tab_bar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-bar.page */ 76024);




const routes = [
    {
        path: 'tabs',
        component: _tab_bar_page__WEBPACK_IMPORTED_MODULE_0__.TabBarPage,
        children: [
            {
                path: 'fdafadf',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_main-screen_main-screen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../main-screen/main-screen.module */ 76597)).then(m => m.MainScreenPageModule)
                    }
                ]
            },
            {
                path: 'sdfsfsdff',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_transactions_transactions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../transactions/transactions.module */ 34307)).then(m => m.TransactionsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabs/adsfadf',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/asdfsd',
        pathMatch: 'full'
    }
];
let TabBarPageRoutingModule = class TabBarPageRoutingModule {
};
TabBarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabBarPageRoutingModule);



/***/ }),

/***/ 58965:
/*!*************************************************!*\
  !*** ./src/app/pages/tab-bar/tab-bar.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabBarPageModule": function() { return /* binding */ TabBarPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _tab_bar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-bar-routing.module */ 58351);
/* harmony import */ var _tab_bar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-bar.page */ 76024);







let TabBarPageModule = class TabBarPageModule {
};
TabBarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab_bar_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabBarPageRoutingModule
        ],
        declarations: [_tab_bar_page__WEBPACK_IMPORTED_MODULE_1__.TabBarPage]
    })
], TabBarPageModule);



/***/ }),

/***/ 76024:
/*!***********************************************!*\
  !*** ./src/app/pages/tab-bar/tab-bar.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabBarPage": function() { return /* binding */ TabBarPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_tab_bar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab-bar.page.html */ 74516);
/* harmony import */ var _tab_bar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-bar.page.scss */ 33002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let TabBarPage = class TabBarPage {
    constructor() { }
    ngOnInit() {
    }
};
TabBarPage.ctorParameters = () => [];
TabBarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab-bar',
        template: _raw_loader_tab_bar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab_bar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabBarPage);



/***/ }),

/***/ 33002:
/*!*************************************************!*\
  !*** ./src/app/pages/tab-bar/tab-bar.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItYmFyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 74516:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab-bar/tab-bar.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"transaction\">\n      <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\n      <ion-label>Transaction</ion-label>\n    </ion-tab-button>\n \n\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tab-bar_tab-bar_module_ts-es2015.js.map