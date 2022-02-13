(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_swap_swap_module_ts"],{

/***/ 87967:
/*!************************************!*\
  !*** ./src/app/models/exchange.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exchange": function() { return /* binding */ Exchange; },
/* harmony export */   "ExchangeResult": function() { return /* binding */ ExchangeResult; }
/* harmony export */ });
class Exchange {
}
class ExchangeResult {
}


/***/ }),

/***/ 26843:
/*!***************************************************!*\
  !*** ./src/app/pages/swap/swap-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapPageRoutingModule": function() { return /* binding */ SwapPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _swap_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swap.page */ 83330);




const routes = [
    {
        path: '',
        component: _swap_page__WEBPACK_IMPORTED_MODULE_0__.SwapPage
    }
];
let SwapPageRoutingModule = class SwapPageRoutingModule {
};
SwapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SwapPageRoutingModule);



/***/ }),

/***/ 17233:
/*!*******************************************!*\
  !*** ./src/app/pages/swap/swap.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapPageModule": function() { return /* binding */ SwapPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _swap_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swap-routing.module */ 26843);
/* harmony import */ var src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/main-components.module */ 37597);
/* harmony import */ var _swap_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap.page */ 83330);








let SwapPageModule = class SwapPageModule {
};
SwapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _swap_routing_module__WEBPACK_IMPORTED_MODULE_0__.SwapPageRoutingModule,
            src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_1__.MainComponentsModule
        ],
        declarations: [_swap_page__WEBPACK_IMPORTED_MODULE_2__.SwapPage]
    })
], SwapPageModule);



/***/ }),

/***/ 83330:
/*!*****************************************!*\
  !*** ./src/app/pages/swap/swap.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapPage": function() { return /* binding */ SwapPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_swap_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./swap.page.html */ 7787);
/* harmony import */ var _swap_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swap.page.scss */ 29724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var src_app_services_paypal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/paypal.service */ 89902);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/paypalOrder */ 82636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var src_app_services_exchange_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/exchange.service */ 65591);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42045);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);
/* harmony import */ var _models_exchange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/exchange */ 87967);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ 11000);













let SwapPage = class SwapPage {
    constructor(toastr, alertController, loadingController, PaypalService, router, exchangeService, firestore, fireAuth, userService) {
        this.toastr = toastr;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.PaypalService = PaypalService;
        this.router = router;
        this.exchangeService = exchangeService;
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.userService = userService;
        this.ToCurrencyCode = "USD";
        this.ExchangeTotal = '0';
        this.Fee = .06;
        this.originAmout = '0';
    }
    ngOnInit() {
        this.updateUserSwapInteraction();
    }
    updateUserSwapInteraction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.userService.getUser().then(user => {
                if (!user.swapScreenLoaded || user.swapScreenLoaded === false) {
                    this.firestore.collection('users').doc(user.userId).update({
                        'swapScreenLoaded': true,
                    });
                }
            });
        });
    }
    openInNewTab(href) {
        Object.assign(document.createElement('a'), {
            href: href,
        }).click();
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
    backtoMenu() {
        this.router.navigate(['/']);
    }
    calculateExchange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.Amount && this.FromCurrencyCode && this.ToCurrencyCode && this.FromCurrencyCode !== "BTC") {
                const exchange = new _models_exchange__WEBPACK_IMPORTED_MODULE_5__.Exchange();
                exchange.FromCurrency = this.FromCurrencyCode;
                exchange.ToCurrency = this.ToCurrencyCode;
                this.exchangeService.exchangeCurrency(exchange).then((response) => {
                    const result = this.Amount * response.conversion_rate;
                    this.originAmout = result.toString();
                    const withFee = result * this.Fee;
                    const finalResult = Number.parseFloat(result.toString()).toFixed(2);
                    this.ExchangeTotal = finalResult.toString();
                }).catch((error) => {
                    console.log(error);
                });
            }
        });
    }
    createPaypalOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.Amount && this.FromCurrencyCode !== "BTC" && this.ToCurrencyCode === "USD" && this.ExchangeTotal !== '0') {
                const loading = yield this.loadingController.create({
                    message: 'Realizando Deposito!',
                    spinner: 'crescent',
                    showBackdrop: true
                });
                loading.present();
                const newPaypalOrder = new src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_3__.CreateOrder();
                newPaypalOrder.amount = Number.parseFloat(this.originAmout.toString()).toFixed(2);
                console.log(newPaypalOrder.amount);
                newPaypalOrder.currency_code = this.ToCurrencyCode;
                this.router.navigate(['/nav/paypalpaymentoptions'], { state: { data: { newPaypalOrder } } });
                this.Amount = 0;
                this.FromCurrencyCode = '';
                this.ExchangeTotal = '';
                loading.dismiss();
            }
            else if (this.Amount && this.FromCurrencyCode === "BTC" && this.ToCurrencyCode) {
                this.router.navigate(['/bitcoin-deposit'], { replaceUrl: true });
            }
            else {
                this.toast('Porfavor seleccionar el tipo de moneda y el monto', 'danger');
            }
        });
    }
};
SwapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: src_app_services_paypal_service__WEBPACK_IMPORTED_MODULE_2__.PaypalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_exchange_service__WEBPACK_IMPORTED_MODULE_4__.ExchangeService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService }
];
SwapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-swap',
        template: _raw_loader_swap_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_swap_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SwapPage);



/***/ }),

/***/ 15754:
/*!***************************************************!*\
  !*** ./src/app/repository/exchange.repository.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeRepository": function() { return /* binding */ ExchangeRepository; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);




let ExchangeRepository = class ExchangeRepository {
    constructor(httpClientModule) {
        this.httpClientModule = httpClientModule;
    }
    exchangeCurrency(theExchangeValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolver) => {
                let subscription;
                subscription = this.httpClientModule.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.EXCHANGE_RATE_URL + `/pair/${theExchangeValue.FromCurrency}/${theExchangeValue.ToCurrency}`)
                    .subscribe(reponse => {
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                    resolver(Object.assign(reponse));
                    return reponse;
                });
            });
        });
    }
};
ExchangeRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ExchangeRepository = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], ExchangeRepository);



/***/ }),

/***/ 65591:
/*!**********************************************!*\
  !*** ./src/app/services/exchange.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeService": function() { return /* binding */ ExchangeService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _repository_exchange_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/exchange.repository */ 15754);



let ExchangeService = class ExchangeService {
    constructor(exchangeRepository) {
        this.exchangeRepository = exchangeRepository;
    }
    exchangeCurrency(theExchangeCurrency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.exchangeRepository.exchangeCurrency(theExchangeCurrency);
        });
    }
};
ExchangeService.ctorParameters = () => [
    { type: _repository_exchange_repository__WEBPACK_IMPORTED_MODULE_0__.ExchangeRepository }
];
ExchangeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ExchangeService);



/***/ }),

/***/ 29724:
/*!*******************************************!*\
  !*** ./src/app/pages/swap/swap.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --background:#FEDC56;\n}\n\n.welcome-msg {\n  padding-left: 5%;\n  font-size: 38px;\n}\n\n.inputs-section {\n  text-align: right;\n  margin-left: 60%;\n  width: 41%;\n  margin-top: 3%;\n}\n\n.box-shadow {\n  width: 98.9%;\n  height: 95%;\n  background: linear-gradient(#1B2A62, #355BC4);\n  border-radius: 25px;\n  left: 10px;\n  position: absolute;\n  filter: blur(0.1px);\n}\n\n.ion-card-body {\n  text-align: left;\n  border-radius: 25px;\n  --background: #171622;\n}\n\n.ion-card-content {\n  height: 75px;\n  border-radius: 25px;\n  --background: #171622;\n  border: 2px solid #3453C3;\n  margin: -10px 10px;\n}\n\n.dropdown-content {\n  color: #FFFF;\n  font-weight: 800;\n  width: 25%;\n}\n\n.card-tittle p {\n  color: #FFF;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  font-size: 18px;\n}\n\nspan {\n  float: right;\n}\n\n.backMainMenuBtn {\n  --background: #3453C3;\n}\n\n.backarrow {\n  height: 100px;\n}\n\n.convert-btn {\n  color: #FFFF;\n  --background: linear-gradient(#355BC4, #1B2A62);\n  float: right;\n  padding-right: 5%;\n}\n\n.whattodo-btn {\n  color: #FFF;\n  --background: none;\n}\n\n.whattodo-btn p {\n  border-bottom: 1px solid #FFFF;\n}\n\n.elipse-arrow {\n  z-index: 1;\n  position: relative;\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  background-color: #3554C4;\n  left: 50%;\n}\n\nion-icon {\n  color: #FFFF;\n  padding-top: 15%;\n  padding-left: 16%;\n}\n\nion-select {\n  display: flex;\n  width: 18%;\n  justify-content: center;\n  border-radius: 15px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: #3554C4;\n  left: 5%;\n  top: 20.5%;\n}\n\n.currency-value {\n  position: relative;\n  color: #ffff;\n  font-size: 24px;\n  padding-right: 15%;\n  top: -49%;\n}\n\nion-select::part(icon) {\n  color: #ffff;\n  opacity: 1;\n}\n\n@media only screen and (max-width: 960px) {\n  .box-shadow {\n    width: 96.5%;\n    height: 95%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    left: 10px;\n    position: absolute;\n    filter: blur(0.1px);\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  .box-shadow {\n    width: 90.5%;\n    height: 86%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    left: 10px;\n    position: absolute;\n    filter: blur(0.1px);\n  }\n}\n\n@media only screen and (max-width: 412px) {\n  .box-shadow {\n    width: 90.5%;\n    height: 87%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    left: 10px;\n    position: absolute;\n    filter: blur(0.1px);\n  }\n}\n\n@media only screen and (max-width: 393px) {\n  .box-shadow {\n    width: 89.5%;\n    height: 87%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    left: 10px;\n    position: absolute;\n    filter: blur(0.1px);\n  }\n}\n\n@media only screen and (max-width: 390px) {\n  .box-shadow {\n    width: 89.5%;\n    height: 86%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    left: 10px;\n    position: absolute;\n    filter: blur(0.1px);\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  .box-shadow {\n    width: 89.5%;\n    height: 86%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    left: 10px;\n    position: absolute;\n    filter: blur(0.1px);\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .box-shadow {\n    width: 88.5%;\n    height: 86%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    left: 10px;\n    position: absolute;\n    filter: blur(0.1px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3YXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0kscUJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUE7RUFDSSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQURKOztBQUlFO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFETjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQURKOztBQUtBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLDZDQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUZOO0FBQ0Y7O0FBS0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsNkNBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBSE47QUFDRjs7QUFNQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSw2Q0FBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFKTjtBQUNGOztBQU9BO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLDZDQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUxOO0FBQ0Y7O0FBU0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsNkNBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBUE47QUFDRjs7QUFVQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSw2Q0FBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFSTjtBQUNGOztBQVlBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLDZDQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQVZOO0FBQ0YiLCJmaWxlIjoic3dhcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pb24tYnV0dG9ueyBcbiAgICAtLWJhY2tncm91bmQ6I0ZFREM1Njtcbn1cblxuLndlbGNvbWUtbXNne1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAzOHB4O1xufVxuXG4uaW5wdXRzLXNlY3Rpb257XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgICB3aWR0aDogNDElO1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uYm94LXNoYWRvd3sgXG4gICAgd2lkdGg6IDk4LjklO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQoIzFCMkE2MiwgIzM1NUJDNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBsZWZ0OiAxMHB4OyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcbiAgICBmaWx0ZXI6IGJsdXIoMC4xcHgpO1xufVxuXG4uaW9uLWNhcmQtYm9keXsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC0tYmFja2dyb3VuZDogIzE3MTYyMjsgXG4gICAgLy8gYm94LXNoYWRvdzogOHB4IDhweCAgIzFCMkE2Mjtcbn0gXG5cbiBcbi5pb24tY2FyZC1jb250ZW50eyBcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsgXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTcxNjIyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDUzQzM7XG4gICAgbWFyZ2luOiAtMTBweCAxMHB4O1xufVxuXG4uZHJvcGRvd24tY29udGVudHtcbiAgICBjb2xvcjogI0ZGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4uY2FyZC10aXR0bGUgcHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHNvbGlkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuc3BhbntcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5iYWNrTWFpbk1lbnVCdG57XG4gICAgLS1iYWNrZ3JvdW5kOiAjMzQ1M0MzO1xufVxuXG4uYmFja2Fycm93e1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5jb252ZXJ0LWJ0bnsgXG4gICAgY29sb3I6ICNGRkZGO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNTVCQzQsICMxQjJBNjIpO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTsgXG59XG5cbi53aGF0dG9kby1idG57XG4gICAgY29sb3I6ICNGRkY7IFxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cbi53aGF0dG9kby1idG4gcCB7IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGRjsgXG59XG4gXG4uZWxpcHNlLWFycm93eyAgIFxuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDsgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTU0QzQ7ICAgIFxuICAgIGxlZnQ6IDUwJTsgXG4gIH0gXG5cbiAgaW9uLWljb257XG4gICAgICBjb2xvcjogI0ZGRkY7XG4gICAgICBwYWRkaW5nLXRvcDogMTUlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNiU7XG4gIH1cbmlvbi1zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDE4JTsgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7ICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU1NEM0O1xuICAgIGxlZnQ6IDUlO1xuICAgIHRvcDogMjAuNSU7XG59ICBcblxuLmN1cnJlbmN5LXZhbHVleyAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7IFxuICAgIHRvcDogLTQ5JTsgXG4gICAgXG59XG4gXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgICBjb2xvcjogI2ZmZmY7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAuYm94LXNoYWRvd3sgXG4gICAgICAgIHdpZHRoOiA5Ni41JTtcbiAgICAgICAgaGVpZ2h0OiA5NSU7XG4gICAgICAgIGJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQoIzFCMkE2MiwgIzM1NUJDNCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxuICAgICAgICBmaWx0ZXI6IGJsdXIoMC4xcHgpO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIC5ib3gtc2hhZG93eyBcbiAgICAgICAgd2lkdGg6IDkwLjUlO1xuICAgICAgICBoZWlnaHQ6IDg2JTtcbiAgICAgICAgYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgjMUIyQTYyLCAjMzU1QkM0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXG4gICAgICAgIGZpbHRlcjogYmx1cigwLjFweCk7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMnB4KSB7XG4gICAgLmJveC1zaGFkb3d7IFxuICAgICAgICB3aWR0aDogOTAuNSU7XG4gICAgICAgIGhlaWdodDogODclO1xuICAgICAgICBiYWNrZ3JvdW5kOiAgbGluZWFyLWdyYWRpZW50KCMxQjJBNjIsICMzNTVCQzQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcbiAgICAgICAgZmlsdGVyOiBibHVyKDAuMXB4KTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkzcHgpIHtcbiAgICAuYm94LXNoYWRvd3sgXG4gICAgICAgIHdpZHRoOiA4OS41JTtcbiAgICAgICAgaGVpZ2h0OiA4NyU7XG4gICAgICAgIGJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQoIzFCMkE2MiwgIzM1NUJDNCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxuICAgICAgICBmaWx0ZXI6IGJsdXIoMC4xcHgpO1xuICAgIH1cbiBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xuICAgIC5ib3gtc2hhZG93eyBcbiAgICAgICAgd2lkdGg6IDg5LjUlO1xuICAgICAgICBoZWlnaHQ6IDg2JTtcbiAgICAgICAgYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgjMUIyQTYyLCAjMzU1QkM0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXG4gICAgICAgIGZpbHRlcjogYmx1cigwLjFweCk7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgLmJveC1zaGFkb3d7IFxuICAgICAgICB3aWR0aDogODkuNSU7XG4gICAgICAgIGhlaWdodDogODYlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAgbGluZWFyLWdyYWRpZW50KCMxQjJBNjIsICMzNTVCQzQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcbiAgICAgICAgZmlsdGVyOiBibHVyKDAuMXB4KTtcbiAgICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC5ib3gtc2hhZG93eyBcbiAgICAgICAgd2lkdGg6IDg4LjUlO1xuICAgICAgICBoZWlnaHQ6IDg2JTtcbiAgICAgICAgYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgjMUIyQTYyLCAjMzU1QkM0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXG4gICAgICAgIGZpbHRlcjogYmx1cigwLjFweCk7XG4gICAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ 7787:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/swap/swap.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app> \n  <ion-header  no-border>\n    <app-top-navigation-toolbar></app-top-navigation-toolbar>\n  </ion-header>\n  <ion-content> \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p class=\"welcome-msg\">¡Empecemos!</p> \n        </ion-col> \n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"box-shadow\">\n            <ion-card-content></ion-card-content>\n          </ion-card>\n          <ion-card class=\"ion-card-body\"> \n            <ion-card-content>\n              <div class=\"card-tittle\">\n                <p>¿Cuánto deseas convertir hoy?</p>\n              </div>   \n            </ion-card-content> \n              <div class=\"form-content\">\n                <ion-card class=\"ion-card-content\"  >\n                  <ion-select class=\"dropdown-content\"  value=\"brown\" okText=\"Okay\" cancelText=\"Cancelar\" [(ngModel)]=\"FromCurrencyCode\" (ionChange)=\"calculateExchange();\">\n                    <ion-select-option value=\"MXN\">$MXN 🇲🇽</ion-select-option>  \n                    <ion-select-option value=\"DOP\">$DOP 🇩🇴</ion-select-option>  \n                    <!-- <ion-select-option value=\"BTC\">$BTC ₿</ion-select-option>  -->\n                  </ion-select>  \n                  <span class=\"currency-value\" ><ion-input class=\"inputs-section\" position=\"floating\" placeholder=\"0\" type=\"text\"  [(ngModel)]=\"Amount\" (ionChange)=\"calculateExchange();\" ></ion-input></span>   \n                </ion-card>     \n              </div>\n                  \n             <div class=\"elipse-arrow\"><ion-icon name=\"arrow-down-outline\"></ion-icon></div> \n           \n           <ion-card class=\"ion-card-content\">\n            <ion-select class=\"dropdown-content\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" [(ngModel)]=\"ToCurrencyCode\" (ionChange)=\"calculateExchange();\">\n              <ion-select-option value=\"USD\" [selected]=\"ToCurrencyCode\" >$USDT</ion-select-option>\n            </ion-select>  <br/>\n            <span class=\"currency-value\">{{ExchangeTotal}}</span>   \n           </ion-card>\n                     \n                  <br/>\n                  <br/>\n              <ion-button class=\"convert-btn\" type=\"submit\" (click)=\"createPaypalOrder()\" shape=\"round\">Pagar</ion-button>\n              <br>\n              <br>  \n              <br>  \n              <br>  \n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button fill=\"clear\" class=\"whattodo-btn\"><p>¿Qué me toca hacer aca?</p></ion-button> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"backMainMenuBtn\" shape=\"round\" (click)=\"backtoMenu()\" >Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </ion-content> \n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_swap_swap_module_ts-es2015.js.map