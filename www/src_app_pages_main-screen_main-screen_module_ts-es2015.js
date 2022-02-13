(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_main-screen_main-screen_module_ts"],{

/***/ 38381:
/*!*****************************************************************!*\
  !*** ./src/app/pages/main-screen/main-screen-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainScreenPageRoutingModule": function() { return /* binding */ MainScreenPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _main_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-screen.page */ 53874);




const routes = [
    {
        path: '',
        component: _main_screen_page__WEBPACK_IMPORTED_MODULE_0__.MainScreenPage
    }
];
let MainScreenPageRoutingModule = class MainScreenPageRoutingModule {
};
MainScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainScreenPageRoutingModule);



/***/ }),

/***/ 76597:
/*!*********************************************************!*\
  !*** ./src/app/pages/main-screen/main-screen.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainScreenPageModule": function() { return /* binding */ MainScreenPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-screen-routing.module */ 38381);
/* harmony import */ var _main_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-screen.page */ 53874);
/* harmony import */ var _components_main_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/main-components.module */ 37597);








let MainScreenPageModule = class MainScreenPageModule {
};
MainScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_main_components_module__WEBPACK_IMPORTED_MODULE_2__.MainComponentsModule,
            _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainScreenPageRoutingModule
        ],
        declarations: [_main_screen_page__WEBPACK_IMPORTED_MODULE_1__.MainScreenPage]
    })
], MainScreenPageModule);



/***/ }),

/***/ 53874:
/*!*******************************************************!*\
  !*** ./src/app/pages/main-screen/main-screen.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainScreenPage": function() { return /* binding */ MainScreenPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main-screen.page.html */ 53866);
/* harmony import */ var _main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-screen.page.scss */ 27097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ 9356);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 60010);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 11000);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);
/* harmony import */ var _services_appcookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/appcookie.service */ 85559);
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/transaction.service */ 7565);
/* harmony import */ var _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/sectionStorage.service */ 14314);













let MainScreenPage = class MainScreenPage {
    constructor(authService, afAuth, storageService, router, userService, alertController, appCookie, transactionService, sectionStorageService) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.storageService = storageService;
        this.router = router;
        this.userService = userService;
        this.alertController = alertController;
        this.appCookie = appCookie;
        this.transactionService = transactionService;
        this.sectionStorageService = sectionStorageService;
        this.aTotalInvestment = 0;
        this.transactionAvailable = true;
    }
    ngOnInit() {
        this.doFetch();
    }
    //Everytime the page is opened this is runned 
    ionViewWillEnter() {
        this.doFetch();
    }
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.aUsername = this.sectionStorageService.getData("Username");
            yield this.userService.getUser().then(user => {
                this.aTotalInvestment = user.balance;
            });
        });
    }
    deposit() {
        this.router.navigate(['/nav/swap']);
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.presentAlertConfirm();
        });
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
        this.getUserData();
        this.getUserTransactions();
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getUser().then(data => console.log('user data from the Main-screen' + data));
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.authService.logout();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    goToTransactionPage() {
        this.router.navigate(['/nav/transaction']);
    }
    getUserTransactions() {
        this.transactionService.getUserTransactions().then((response) => {
            if (response.length == 0) {
                this.transactionAvailable = false;
                ;
            }
            else {
                response.forEach(function (item) {
                    const createdDate = new Date(item.create_time);
                    item.create_time = createdDate.toString().replace('GMT-0400 (Atlantic Standard Time)', '');
                });
                this.transationHistory = response;
            }
        }).catch((error) => {
            console.log(error);
        });
    }
};
MainScreenPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _services_appcookie_service__WEBPACK_IMPORTED_MODULE_5__.AppCookieService },
    { type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_6__.TransactionService },
    { type: _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_7__.SectionStorageService }
];
MainScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-main-screen',
        template: _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainScreenPage);



/***/ }),

/***/ 27097:
/*!*********************************************************!*\
  !*** ./src/app/pages/main-screen/main-screen.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-align: center;\n  width: 100%;\n}\n\nion-col {\n  text-align: center;\n}\n\n.heading {\n  margin-top: 10vh;\n  text-align: center;\n}\n\n.heading .image {\n  width: 30%;\n}\n\n.notransactionMessage {\n  font-size: 16px;\n  text-align: center;\n}\n\n.welcome-msg {\n  left: 12px;\n}\n\n.deposit-btn {\n  text-align: left;\n  float: left;\n  margin-top: 5px;\n  --background: #FFFF;\n  color: #3554C4;\n  margin-left: -30px;\n}\n\n.deposit-time {\n  color: gray;\n  margin-left: 3%;\n}\n\n.last-movement {\n  float: left;\n  font-size: 16px;\n  color: #ffff;\n}\n\n.transaction-amount {\n  font-size: 16px;\n}\n\n.ver-todos {\n  float: right;\n  font-size: 14px;\n}\n\n.Tittle {\n  font-size: 16px;\n}\n\n.welcome-msg {\n  position: relative;\n  text-align: left;\n  font-size: 30px;\n}\n\nion-list {\n  text-align: left;\n}\n\n.action-content {\n  background: #3554C4;\n  background-color: aliceblue;\n}\n\n.insta-icon {\n  float: right;\n  right: 50px;\n  width: 10%;\n}\n\n.investment-card {\n  background: #3554C4;\n  color: white;\n  height: 100px;\n}\n\n.investment-card .investment-card-subtitle {\n  padding-top: 2%;\n  padding-left: 2%;\n  float: left;\n  color: white;\n}\n\n.card-tittle {\n  float: left;\n  margin-top: 14px;\n  margin-left: 3%;\n  font-size: 18px;\n}\n\n.btn-container {\n  display: flex;\n  margin-top: 20%;\n  margin-left: 10%;\n  left: 5%;\n}\n\n.details-btn {\n  margin-left: 0px;\n  width: 100px;\n  height: 38px;\n  --background: #ffff;\n  color: #3554C4;\n}\n\n.total-investment-value {\n  font-size: 34px;\n  margin-left: -115px;\n  margin-top: 3px;\n}\n\n.content-investment-container {\n  display: inline;\n}\n\n.Ver-btn {\n  --background: #ffff;\n  color: #3554C4;\n  float: right;\n}\n\n@media only screen and (max-width: 960px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .image {\n    width: 90%;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .image {\n    width: 90%;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  .deposit-btn {\n    text-align: left;\n    float: left;\n    margin-top: -85px;\n    --background: #FFFF;\n    color: #3554C4;\n    margin-left: 5px;\n  }\n\n  .total-investment-value {\n    font-size: 34px;\n    margin-left: -207px;\n    margin-top: 3px;\n  }\n}\n\n@media only screen and (max-width: 393px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .image {\n    width: 90%;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  .deposit-btn {\n    text-align: left;\n    float: left;\n    margin-top: -82px;\n    --background: #FFFF;\n    color: #3554C4;\n    margin-left: -12px;\n  }\n\n  .total-investment-value {\n    font-size: 34px;\n    margin-left: -207px;\n    margin-top: 3px;\n  }\n}\n\n@media only screen and (max-width: 390px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .image {\n    width: 90%;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  .deposit-btn {\n    text-align: left;\n    float: left;\n    margin-top: -87px;\n    --background: #FFFF;\n    color: #3554C4;\n    margin-left: 5px;\n  }\n\n  .total-investment-value {\n    font-size: 34px;\n    margin-left: -207px;\n    margin-top: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFERTtFQUNFLFVBQUE7QUFHSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFIRjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBT0E7RUFDRSxXQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFVQTtFQUNFO0lBQ0UsZUFBQTtFQVBGOztFQVNBO0lBQ0UsVUFBQTtFQU5GOztFQVFEO0lBQ0UsZUFBQTtFQUxEO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLGVBQUE7RUFMRjs7RUFPQTtJQUNFLFVBQUE7RUFKRjs7RUFNRDtJQUNFLGVBQUE7RUFIRDs7RUFNRDtJQUNDLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFIQTs7RUFLRjtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFGQTtBQUNGOztBQUlBO0VBQ0U7SUFDRSxlQUFBO0VBRkY7O0VBSUE7SUFDRSxVQUFBO0VBREY7O0VBR0Q7SUFDRSxlQUFBO0VBQUQ7O0VBR0Q7SUFDQyxnQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBQUE7O0VBRUY7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBQ0E7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQUNGOztFQUNBO0lBQ0UsVUFBQTtFQUVGOztFQUFEO0lBQ0UsZUFBQTtFQUdEOztFQUFEO0lBQ0MsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQUdBOztFQURGO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQUlBO0FBQ0YiLCJmaWxlIjoibWFpbi1zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29sIHsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLmltYWdle1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiBcbn1cblxuXG4ubm90cmFuc2FjdGlvbk1lc3NhZ2V7XG4gIGZvbnQtc2l6ZTogMTZweDsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGNvbWUtbXNne1xuICBsZWZ0OiAxMnB4O1xufSBcblxuLmRlcG9zaXQtYnRue1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDsgXG4gIG1hcmdpbi10b3A6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGRjtcbiAgY29sb3I6ICMzNTU0QzQ7IFxuICBtYXJnaW4tbGVmdDogLTMwcHg7XG59XG5cbi5kZXBvc2l0LXRpbWV7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5sYXN0LW1vdmVtZW50e1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmY7IFxufVxuXG4udHJhbnNhY3Rpb24tYW1vdW50e1xuICBmb250LXNpemU6IDE2cHg7IFxufVxuIFxuLnZlci10b2Rvc3tcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE0cHg7IFxufVxuXG4uVGl0dGxle1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi53ZWxjb21lLW1zZ3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1saXN0e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWN0aW9uLWNvbnRlbnR7XG4gIGJhY2tncm91bmQ6ICMzNTU0QzQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuICAuaW5zdGEtaWNvbntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuIFxuXG5cblxuLmludmVzdG1lbnQtY2FyZHtcbiAgYmFja2dyb3VuZDogIzM1NTRDNDtcbiAgY29sb3I6IHdoaXRlOyAgXG4gIGhlaWdodDogMTAwcHg7ICAgXG4gIC5pbnZlc3RtZW50LWNhcmQtc3VidGl0bGV7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gXG59XG5cbi5jYXJkLXRpdHRsZXtcbiAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuXG59IFxuXG4uYnRuLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBsZWZ0OiA1JTtcbn1cblxuLmRldGFpbHMtYnRueyBcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmY7XG4gIGNvbG9yOiAjMzU1NEM0O1xufVxuXG4udG90YWwtaW52ZXN0bWVudC12YWx1ZXtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBtYXJnaW4tbGVmdDogLTExNXB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5jb250ZW50LWludmVzdG1lbnQtY29udGFpbmVye1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5WZXItYnRue1xuICAtLWJhY2tncm91bmQ6ICNmZmZmO1xuICBjb2xvcjogIzM1NTRDNDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICBpb24tY29udGVudHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmltYWdle1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAucHtcbiAgIGZvbnQtc2l6ZTogNjBweDtcbiB9IFxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICBpb24tY29udGVudHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmltYWdle1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAucHtcbiAgIGZvbnQtc2l6ZTogNjBweDtcbiB9IFxuXG4gLmRlcG9zaXQtYnRue1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDsgXG4gIG1hcmdpbi10b3A6IC04NXB4O1xuICAtLWJhY2tncm91bmQ6ICNGRkZGO1xuICBjb2xvcjogIzM1NTRDNDsgXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4udG90YWwtaW52ZXN0bWVudC12YWx1ZXtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBtYXJnaW4tbGVmdDogLTIwN3B4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5M3B4KSB7XG4gIGlvbi1jb250ZW50e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuaW1hZ2V7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuIC5we1xuICAgZm9udC1zaXplOiA2MHB4O1xuIH0gXG5cbiAuZGVwb3NpdC1idG57XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0OyBcbiAgbWFyZ2luLXRvcDogLTgycHg7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkY7XG4gIGNvbG9yOiAjMzU1NEM0OyBcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xufVxuLnRvdGFsLWludmVzdG1lbnQtdmFsdWV7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMDdweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xuICBpb24tY29udGVudHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmltYWdle1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAucHtcbiAgIGZvbnQtc2l6ZTogNjBweDtcbiB9IFxuXG4gLmRlcG9zaXQtYnRue1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDsgXG4gIG1hcmdpbi10b3A6IC04N3B4O1xuICAtLWJhY2tncm91bmQ6ICNGRkZGO1xuICBjb2xvcjogIzM1NTRDNDsgXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4udG90YWwtaW52ZXN0bWVudC12YWx1ZXtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBtYXJnaW4tbGVmdDogLTIwN3B4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG59XG5cblxuIl19 */");

/***/ }),

/***/ 53866:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-screen/main-screen.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>  \n   \n  <ion-header  no-border>\n    <app-top-navigation-toolbar></app-top-navigation-toolbar>\n  </ion-header>\n  <ion-content> \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher> \n  <ion-grid [fixed]=\"true\">\n      <ion-row>\n        <ion-col>\n          <h1 class=\"welcome-msg\">Bienvenido, {{aUsername}}.</h1>\n        </ion-col>\n        \n      </ion-row>\n      <ion-row> \n        <ion-col>\n          <ion-card class=\"investment-card\"> \n            <ion-grid>\n            <ion-card-tittle>\n              <h5 class=\"card-tittle\">Ahorro Total</h5>\n            </ion-card-tittle> \n            <ion-col>\n\n              <div   style=\"width: 100px; float:left; margin:10px; padding-top: 25px;\">\n               <span class=\"total-investment-value\" >{{aTotalInvestment}}$</span> \n              </div> \n            </ion-col>\n            <ion-col>\n\n              <div class=\" \" style=\"width: 100px; float:right; margin:10px; margin-right: 25px; margin-top: 35px\">\n                <ion-button class=\"deposit-btn\"  (click)=\"deposit()\">Depositar</ion-button>\n              </div> \n            </ion-col>\n          </ion-grid>\n          </ion-card>\n        </ion-col> \n    </ion-row>\n    <ion-row>  \n      <ion-col>\n        <ion-card class=\" \">   \n          <ion-card-header>\n            <ion-card-subtittle>\n              <ion-item >\n                <ion-label class=\"last-movement\">Últimos movimientos</ion-label>\n                <ion-note slot=\"end\" color=\"primary\" (click)=\"goToTransactionPage()\" ><ion-button class=\"ver-todos\" fill=\"clear\">ver todos <ion-icon name=\"arrow-forward-outline\"></ion-icon></ion-button></ion-note>\n              </ion-item>     \n            </ion-card-subtittle>\n          </ion-card-header>\n          <ion-card-content> \n            \n              <ion-list [scrollEvents]=\"true\" style=\"list-style: none;\" *ngFor=\"let transation  of transationHistory\">\n                <ion-scroll direction=\"y\">\n                  <ng-container *ngIf=\"!transactionAvailable\" >\n                    <p class=\"notransactionMessage\">No hay transacciones para mostrar</p>\n                  </ng-container>\n                  <ion-item>\n                    <ion-label class=\"transaction-tittle\"><img src=\"../../../assets/Icon awesome-coins.png\"> Depósito<br/><small class=\"deposit-time\">{{transation.create_time}}</small></ion-label>\n                    <ion-note class=\"transaction-amount\" slot=\"end\" color=\"primary\">{{transation.gross_amount}}$</ion-note>\n                  </ion-item> \n                </ion-scroll> \n              </ion-list>     \n          </ion-card-content> \n        </ion-card>  \n      </ion-col> \n  </ion-row>\n  </ion-grid>\n</ion-content>\n  <!--  \n  <section class=\"ion-padding\">\n  \n   \n   \n  </section>\n \n  -->\n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_main-screen_main-screen_module_ts-es2015.js.map