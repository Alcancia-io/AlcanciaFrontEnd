(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_sidenav_sidenav_module_ts"],{

/***/ 76245:
/*!*********************************************************!*\
  !*** ./src/app/pages/sidenav/sidenav-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavPageRoutingModule": function() { return /* binding */ SidenavPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var src_app_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/authorize.guard */ 33874);
/* harmony import */ var _sidenav_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.page */ 58123);





const routes = [
    {
        path: 'nav',
        component: _sidenav_page__WEBPACK_IMPORTED_MODULE_1__.SidenavPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_main-screen_main-screen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../main-screen/main-screen.module */ 76597)).then(m => m.MainScreenPageModule)
            },
            {
                path: 'transaction',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_transactions_transactions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../transactions/transactions.module */ 34307)).then(m => m.TransactionsPageModule)
            },
            {
                path: 'swap',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("src_app_pages_swap_swap_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../swap/swap.module */ 17233)).then(m => m.SwapPageModule)
            },
            {
                path: 'paypalpaymentoptions',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("src_app_pages_paypalpaymentoptions_paypalpaymentoptions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../paypalpaymentoptions/paypalpaymentoptions.module */ 77292)).then(m => m.PaypalpaymentoptionsPageModule)
            },
            {
                path: '',
                redirectTo: '/nav/home',
                pathMatch: 'full',
                canLoad: [src_app_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/nav/home',
        pathMatch: 'full',
        canLoad: [src_app_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard]
    }
];
let SidenavPageRoutingModule = class SidenavPageRoutingModule {
};
SidenavPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], SidenavPageRoutingModule);



/***/ }),

/***/ 69145:
/*!*************************************************!*\
  !*** ./src/app/pages/sidenav/sidenav.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavPageModule": function() { return /* binding */ SidenavPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-routing.module */ 76245);
/* harmony import */ var _sidenav_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.page */ 58123);







let SidenavPageModule = class SidenavPageModule {
};
SidenavPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_0__.SidenavPageRoutingModule
        ],
        declarations: [_sidenav_page__WEBPACK_IMPORTED_MODULE_1__.SidenavPage]
    })
], SidenavPageModule);



/***/ }),

/***/ 58123:
/*!***********************************************!*\
  !*** ./src/app/pages/sidenav/sidenav.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavPage": function() { return /* binding */ SidenavPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_sidenav_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sidenav.page.html */ 4942);
/* harmony import */ var _sidenav_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.page.scss */ 77232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);





let SidenavPage = class SidenavPage {
    constructor(router) {
        this.router = router;
        this.active = '';
        this.NAV = [
            {
                name: 'Menu Principal',
                link: '/nav/home',
                icon: 'home-outline'
            },
            {
                name: 'Movimientos',
                link: '/nav/transaction',
                icon: 'swap-horizontal-outline'
            }
        ];
        this.router.events.subscribe((event) => {
            this.active = event.url;
        });
    }
    ngOnInit() { }
};
SidenavPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SidenavPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sidenav',
        template: _raw_loader_sidenav_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sidenav_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SidenavPage);



/***/ }),

/***/ 77232:
/*!*************************************************!*\
  !*** ./src/app/pages/sidenav/sidenav.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlbmF2LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4942:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sidenav/sidenav.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu contentId=\"main-content\" side=\"start\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Alcancia.io</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let nav of NAV\">\n          <ion-item \n            routerDirection=\"root\" \n             [routerLink]=\"nav.link\" \n             [class.active-menu]=\"active === nav.link\">\n              {{nav.name}}\n              <ion-icon slot=\"start\" [ios]=\"nav.icon\" [md]=\"nav.icon\"></ion-icon>              \n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main-content\" main></ion-router-outlet>\n\n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sidenav_sidenav_module_ts-es2015.js.map