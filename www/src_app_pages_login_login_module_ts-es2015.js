(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 25926:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 84418);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 60441:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 25926);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 84418);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 39258);
/* harmony import */ var src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/main-components.module */ 37597);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_3__.MainComponentsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 84418:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ 9356);
/* harmony import */ var _services_appcookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/appcookie.service */ 85559);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/auth.guard */ 47316);
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/core */ 39519);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);







//Local storage




let LoginPage = class LoginPage {
    constructor(authService, alertController, router, loadingController, appCookie, toastr, formBuilder) {
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.appCookie = appCookie;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.errorMessages = {
            email: [
                { type: 'required', message: 'Email es requerido' },
                { type: 'pattern', message: 'El formato de email no es correcto' }
            ],
            password: [
                { type: 'required', message: 'Una contraseña es requerida' }
            ],
        };
    }
    ngOnInit() {
        this.exform = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)])
        });
        this.getUsername();
    }
    getUsername() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const username = yield this.appCookie.get(src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.USER_NAME);
            if (username.length > 0 && username[0]) {
                this.aUsername = username[0].value;
            }
        });
    }
    forgot() {
        this.router.navigate(['/forgot-password']);
    }
    singupPage() {
        this.router.navigate(['/signup']);
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
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.exform.value.email && this.exform.value.password) {
                const loading = yield _ionic_core__WEBPACK_IMPORTED_MODULE_5__.loadingController.create({
                    message: 'Iniciando Seccion...',
                    spinner: 'crescent',
                    showBackdrop: true
                });
                loading.present();
                this.authService.login(this.exform.value.email, this.exform.value.password)
                    .then(() => {
                    loading.dismiss();
                })
                    .catch((error) => {
                    loading.dismiss();
                    this.toast(error.message, 'danger');
                });
            }
            else {
                this.toast('Porfavor ingresar tu correo y contraseña', 'danger');
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _services_appcookie_service__WEBPACK_IMPORTED_MODULE_3__.AppCookieService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-align: center;\n  width: 100%;\n}\n\n.welcome-msg {\n  padding-top: 3%;\n  position: relative;\n  text-align: left;\n  font-size: 30px;\n}\n\n.sign-toolbard {\n  position: relative;\n  text-align: left;\n}\n\n.login {\n  border-bottom: solid 3.5px #3554C4;\n}\n\n.perfile-pic {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: #3554C4;\n  float: right;\n  right: 5%;\n}\n\n.form-content {\n  padding-top: 5%;\n  text-align: left;\n}\n\nion-item {\n  --highlight-color-valid: #3554C4;\n}\n\n.item-content {\n  --ion-item-background:#121212;\n}\n\n.arrow-btn {\n  float: right;\n  bottom: 0;\n  margin: 25px;\n}\n\n.forgotpassword-btn {\n  color: #ffff;\n  font-size: 16px;\n  float: left;\n  cursor: pointer;\n}\n\n.forgotpassword-btn:hover {\n  color: #ababab;\n  font-size: 16px;\n  float: left;\n}\n\n.action-content {\n  background: #FECE2F;\n  background-color: aliceblue;\n}\n\naction-buttons {\n  position: relative;\n  padding-top: 5%;\n}\n\nion-row {\n  display: block;\n  margin: auto;\n  width: 50%;\n}\n\n@media only screen and (max-width: 960px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  ion-row {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQ0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQVUsZ0NBQUE7QUFHVjs7QUFGQTtFQUNFLDZCQUFBO0FBS0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQUVGOztFQUFEO0lBQ0UsZUFBQTtFQUdEOztFQURBO0lBQ0UsZUFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZWxjb21lLW1zZ3tcbiAgcGFkZGluZy10b3A6IDMlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zaWduLXRvb2xiYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5sb2dpbnsgXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDMuNXB4ICMzNTU0QzQ7XG59IFxuXG4ucGVyZmlsZS1waWN7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NTRDNDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogNSU7XG59XG4gXG4uZm9ybS1jb250ZW50eyBcbiAgcGFkZGluZy10b3A6IDUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyBcbn0gXG5cbmlvbi1pdGVteyAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzM1NTRDNDsgfVxuLml0ZW0tY29udGVudHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiMxMjEyMTI7XG4gIFxufVxuXG4uYXJyb3ctYnRue1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiAyNXB4O1xufVxuXG4uZm9yZ290cGFzc3dvcmQtYnRue1xuICBjb2xvcjogI2ZmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcmdvdHBhc3N3b3JkLWJ0bjpob3ZlcntcbiAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuXG5cbi5hY3Rpb24tY29udGVudHtcbiAgYmFja2dyb3VuZDogI0ZFQ0UyRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG5hY3Rpb24tYnV0dG9uc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogNSU7XG59IFxuXG5pb24tcm93e1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIGlvbi1jb250ZW50e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuIC5we1xuICAgZm9udC1zaXplOiA2MHB4O1xuIH1cbiAgaW9uLXJvd3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cblxuXG4iXX0= */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-card-header>\n        <div class=\"sign-toolbard\">\n          <ion-button fill=\"clear\" color=\"dark\" size=\"small\">\n            <p class=\"login\"><b>Login</b></p>\n          </ion-button>\n          <ion-button fill=\"clear\" color=\"dark\" size=\"small\" (click)=\"singupPage()\">\n             <p>Regístrate</p> \n          </ion-button>\n          <div class=\"perfile-pic\"></div>\n        </div>\n        <div class=\"welcome-msg\">\n          Qué gusto verte<b><br>{{aUsername}}<b *ngIf=\"aUsername\" >,</b></b>\n      </div>\n      </ion-card-header>\n      <ion-card-content>  \n        <form [formGroup]=\"exform\">\n          <div class=\"form-content\">\n            <ion-item class=\"item-content\">\n            <ion-input  formControlName=\"email\" position=\"floating\" placeholder=\"Correo electrónico\" type=\"text\" ></ion-input>\n            </ion-item> \n            <div *ngFor=\"let error of errorMessages.email\">\n              <ng-container *ngIf=\"exform.get('email').hasError(error.type) && (exform.get('email').dirty || exform.get('email').touched)\">\n                <small class=\"error-message\">{{error.message}}</small>\n              </ng-container>\n            </div>\n            <br/>\n            <ion-item class=\"item-content\">\n              <ion-input formControlName=\"password\" position=\"floating\" placeholder=\"Contraseña\" type=\"password\"></ion-input>\n            </ion-item> \n            <div *ngFor=\"let error of errorMessages.password\">\n              <ng-container *ngIf=\"exform.get('password').hasError(error.type) && (exform.get('password').dirty || exform.get('password').touched)\">\n                <small class=\"error-message\">{{error.message}}</small>\n              </ng-container>\n            </div>\n          </div>\n        </form> \n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <div class=\"action-buttons\"> \n        <ion-button class=\"forgotpassword-btn\" type=\"button\" fill=\"clear\" (click)=\"forgot()\">¿Olvidaste tu contraseña?</ion-button>\n        <app-arrow-button class=\"arrow-btn\" type=\"submit\" expand=\"block\" shape=\"round\"  (click)=\"login()\"></app-arrow-button>\n      </div>\n     </ion-card-content>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts-es2015.js.map