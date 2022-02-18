(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["default-src_app_components_main-components_module_ts"],{

/***/ 37597:
/*!******************************************************!*\
  !*** ./src/app/components/main-components.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponentsModule": function() { return /* binding */ MainComponentsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _navigation_toolbar_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-toolbar/navigation-toolbar.component */ 41264);
/* harmony import */ var _top_navigation_toolbar_top_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-navigation-toolbar/top-navigation-toolbar.component */ 65351);
/* harmony import */ var _successfull_successfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./successfull/successfull */ 41709);
/* harmony import */ var _paypal_paypalPaymentOptions_paypalPaymentOptions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paypal/paypalPaymentOptions/paypalPaymentOptions.component */ 79308);







let MainComponentsModule = class MainComponentsModule {
};
MainComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule
        ],
        declarations: [_navigation_toolbar_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.NavigationToolbarComponent, _top_navigation_toolbar_top_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.TopNavigationToolbarComponent, _successfull_successfull__WEBPACK_IMPORTED_MODULE_2__.SuccessfullComponent, _paypal_paypalPaymentOptions_paypalPaymentOptions_component__WEBPACK_IMPORTED_MODULE_3__.PaypalPaymentOptionsComponent],
        exports: [_navigation_toolbar_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.NavigationToolbarComponent, _top_navigation_toolbar_top_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.TopNavigationToolbarComponent, _successfull_successfull__WEBPACK_IMPORTED_MODULE_2__.SuccessfullComponent, _paypal_paypalPaymentOptions_paypalPaymentOptions_component__WEBPACK_IMPORTED_MODULE_3__.PaypalPaymentOptionsComponent]
    })
], MainComponentsModule);



/***/ }),

/***/ 41264:
/*!*******************************************************************************!*\
  !*** ./src/app/components/navigation-toolbar/navigation-toolbar.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationToolbarComponent": function() { return /* binding */ NavigationToolbarComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_navigation_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./navigation-toolbar.component.html */ 43508);
/* harmony import */ var _navigation_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-toolbar.component.scss */ 18902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let NavigationToolbarComponent = class NavigationToolbarComponent {
    constructor() { }
    ngOnInit() { }
};
NavigationToolbarComponent.ctorParameters = () => [];
NavigationToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-navigation-toolbar',
        template: _raw_loader_navigation_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_navigation_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NavigationToolbarComponent);



/***/ }),

/***/ 79308:
/*!******************************************************************************************!*\
  !*** ./src/app/components/paypal/paypalPaymentOptions/paypalPaymentOptions.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalPaymentOptionsComponent": function() { return /* binding */ PaypalPaymentOptionsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_paypalPaymentOptions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./paypalPaymentOptions.component.html */ 66524);
/* harmony import */ var _paypalPaymentOptions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paypalPaymentOptions.component.scss */ 8256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/core */ 39519);
/* harmony import */ var src_app_services_paypal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/paypal.service */ 89902);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/paypalOrder */ 82636);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/token.service */ 65987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 31887);













let PaypalPaymentOptionsComponent = class PaypalPaymentOptionsComponent {
    constructor(paypalService, router, toastr, tokenService, httpClientModule) {
        this.paypalService = paypalService;
        this.router = router;
        this.toastr = toastr;
        this.tokenService = tokenService;
        this.httpClientModule = httpClientModule;
        this.amount = '';
        this.paidFor = false;
        this.product = {
            price: this.amount,
            description: 'Alcancia Service',
            img: '../../../../assets/Alcancía White.png'
        };
    }
    ngOnInit() {
        paypal
            .Buttons({
            createOrder: (data, actions) => {
                const createorder = new src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_4__.CreateOrder();
                createorder.amount = this.amount;
                // return this.paypalService.createOrder(createorder).then(resp => {
                //   return resp.json();
                // }).then(function(orderData){
                //   return orderData.id;
                // });
                const token = this.tokenService.getToken();
                return fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.ALCANCIA_SERVER_URL}/deposits/create-order`, {
                    method: 'POST',
                    body: JSON.stringify(createorder),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }).then(res => {
                    console.log(res.status);
                    return res.json();
                })
                    .then(function (orderData) {
                    return orderData.id;
                });
                // const orderDetails = actions.order.create({
                //   purchase_units: [
                //     {
                //       description: this.product.description,
                //       amount: {
                //         currency_code: 'USD',
                //         value: this.amount
                //       }
                //     }
                //   ]
                // }); 
                // 
            },
            onApprove: (data, orderDetails) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                const loading = yield _ionic_core__WEBPACK_IMPORTED_MODULE_2__.loadingController.create({
                    message: 'Realizando Deposito',
                    spinner: 'crescent',
                    showBackdrop: true
                });
                loading.present();
                this.orderToken = new src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_4__.ConfirmOrder();
                this.orderToken.orderToken = data.orderID;
                let Promise1 = new Promise((resolver) => {
                    this.httpClientModule.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.ALCANCIA_SERVER_URL + '/deposits/execute-order', this.orderToken)
                        .subscribe(response => {
                        resolver(Object.assign(response));
                        loading.dismiss();
                        this.router.navigate(['/paypalOrder/successfull'], { state: { data: { response } } });
                    }, (err) => {
                        loading.dismiss();
                        this.router.navigate(['/paymenterror']);
                        return err;
                    });
                });
                this.paidFor = true;
            }),
            onError: err => {
                console.log(err);
            }
        })
            .render(this.paypalElement.nativeElement);
    }
    toast(message, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastr.create({
                message: message,
                position: 'top',
                color: status,
                duration: 2000
            });
            toast.present();
        });
    }
};
PaypalPaymentOptionsComponent.ctorParameters = () => [
    { type: src_app_services_paypal_service__WEBPACK_IMPORTED_MODULE_3__.PaypalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_6__.TokenService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient }
];
PaypalPaymentOptionsComponent.propDecorators = {
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    paypalElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['paypal', { static: true },] }]
};
PaypalPaymentOptionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-paypalPaymentOptions',
        template: _raw_loader_paypalPaymentOptions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_paypalPaymentOptions_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaypalPaymentOptionsComponent);



/***/ }),

/***/ 41709:
/*!*******************************************************!*\
  !*** ./src/app/components/successfull/successfull.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessfullComponent": function() { return /* binding */ SuccessfullComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_successfull_successfull_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!../successfull/successfull.component.html */ 18239);
/* harmony import */ var _successfull_successfull_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../successfull/successfull.scss */ 66044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let SuccessfullComponent = class SuccessfullComponent {
    constructor() { }
    ngOnInit() { }
};
SuccessfullComponent.ctorParameters = () => [];
SuccessfullComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-successfull-component',
        template: _raw_loader_successfull_successfull_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_successfull_successfull_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SuccessfullComponent);



/***/ }),

/***/ 65351:
/*!***************************************************************************************!*\
  !*** ./src/app/components/top-navigation-toolbar/top-navigation-toolbar.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopNavigationToolbarComponent": function() { return /* binding */ TopNavigationToolbarComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_top_navigation_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./top-navigation-toolbar.component.html */ 65309);
/* harmony import */ var _top_navigation_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-navigation-toolbar.component.scss */ 90701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 9356);






let TopNavigationToolbarComponent = class TopNavigationToolbarComponent {
    constructor(alertController, authService) {
        this.alertController = alertController;
        this.authService = authService;
    }
    ngOnInit() { }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.presentAlertConfirm();
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cerrar Sesión',
                message: '¿Estas seguro de que quieres cerrar sesión?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    },
                    {
                        text: 'Confirmar',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.authService.logout();
                            sessionStorage.clear();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
TopNavigationToolbarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
TopNavigationToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-top-navigation-toolbar',
        template: _raw_loader_top_navigation_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_top_navigation_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TopNavigationToolbarComponent);



/***/ }),

/***/ 82636:
/*!***************************************!*\
  !*** ./src/app/models/paypalOrder.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateOrder": function() { return /* binding */ CreateOrder; },
/* harmony export */   "PaymentUrl": function() { return /* binding */ PaymentUrl; },
/* harmony export */   "ConfirmOrder": function() { return /* binding */ ConfirmOrder; }
/* harmony export */ });
class CreateOrder {
}
class PaymentUrl {
}
class ConfirmOrder {
}


/***/ }),

/***/ 33762:
/*!**************************************************!*\
  !*** ./src/app/repository/paypal.respository.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalRepository": function() { return /* binding */ PaypalRepository; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);




let PaypalRepository = class PaypalRepository {
    constructor(httpClientModule) {
        this.httpClientModule = httpClientModule;
    }
    createOrder(theOrder) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolver) => {
                this.httpClientModule.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.ALCANCIA_SERVER_URL + '/deposits/create-order', theOrder)
                    .subscribe(reponse => {
                    return reponse;
                });
            });
        });
    }
};
PaypalRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
PaypalRepository = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], PaypalRepository);



/***/ }),

/***/ 89902:
/*!********************************************!*\
  !*** ./src/app/services/paypal.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalService": function() { return /* binding */ PaypalService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _repository_paypal_respository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/paypal.respository */ 33762);



let PaypalService = class PaypalService {
    constructor(paypalRespository) {
        this.paypalRespository = paypalRespository;
    }
    createOrder(theOrder) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.paypalRespository.createOrder(theOrder);
        });
    }
};
PaypalService.ctorParameters = () => [
    { type: _repository_paypal_respository__WEBPACK_IMPORTED_MODULE_0__.PaypalRepository }
];
PaypalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PaypalService);



/***/ }),

/***/ 18902:
/*!*********************************************************************************!*\
  !*** ./src/app/components/navigation-toolbar/navigation-toolbar.component.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-buttons {\n  text-align: center;\n}\n\n.content {\n  position: absolute;\n  background-color: #F6F6F6;\n}\n\n.content ion-buttons {\n  text-align: center;\n}\n\nspan {\n  font-size: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtBQUNSOztBQUdBO0VBQ0ksY0FBQTtBQUFKIiwiZmlsZSI6Im5hdmlnYXRpb24tdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b25ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnR7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjZGNkY2O1xuXG4gICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbnNwYW57XG4gICAgZm9udC1zaXplOiA4cHg7XG59Il19 */");

/***/ }),

/***/ 8256:
/*!********************************************************************************************!*\
  !*** ./src/app/components/paypal/paypalPaymentOptions/paypalPaymentOptions.component.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlwYWxQYXltZW50T3B0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 66044:
/*!*********************************************************!*\
  !*** ./src/app/components/successfull/successfull.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzZnVsbC5zY3NzIn0= */");

/***/ }),

/***/ 90701:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/top-navigation-toolbar/top-navigation-toolbar.component.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtbmF2aWdhdGlvbi10b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 43508:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation-toolbar/navigation-toolbar.component.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"home\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n        <span>Home</span>\n      </ion-tab-button>\n      <!-- <ion-tab-button >\n        <ion-icon  name=\"search-outline\"></ion-icon>\n        <span [navPush]=\"products\">Productos</span>\n      </ion-tab-button> -->\n      <ion-tab-button tab=\"transactions\">\n        <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\n        <span>Transacciones</span>\n      </ion-tab-button>\n      <!-- <ion-tab-button tab=\"status\">\n        <ion-icon name=\"trending-up-outline\"></ion-icon>\n              <span>Estado</span>\n      </ion-tab-button>  -->\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content> \n  ");

/***/ }),

/***/ 66524:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/paypal/paypalPaymentOptions/paypalPaymentOptions.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #paypal></div> ");

/***/ }),

/***/ 18239:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/successfull/successfull.component.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <img class=\"arrow-img\" src=\"/src/assets/checkmarkIcon.png\" alt=\"CheckMark Icon\">\n</section>");

/***/ }),

/***/ 65309:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-navigation-toolbar/top-navigation-toolbar.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button autoHide=\"false\"></ion-menu-button>\n  </ion-buttons>\n  <ion-buttons slot=\"start\">\n    <ion-button>\n      <ion-icon slot=\"icon-only\" name=\"person-circle\" color=\"dark\"></ion-icon>\n    </ion-button> \n  </ion-buttons>\n  <ion-buttons slot=\"primary\">\n    <ion-button color=\"secondary\" (click)=\"logout()\">\n      <ion-icon slot=\"icon-only\" name=\"log-out-outline\" color=\"dark\"></ion-icon> \n    </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"start\">\n    \n    <!-- <ion-button> //TODO: add hamburger when this component has given a functionalty,\n      <ion-icon slot=\"icon-only\" ios=\"menu-outline\" md=\"menu-outline\"></ion-icon>\n    </ion-button> -->\n  </ion-buttons>\n</ion-toolbar>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_main-components_module_ts-es2015.js.map