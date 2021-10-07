(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_login_login_module_ts"],{

/***/ 90795:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 93721);




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

/***/ 77641:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 90795);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 93721);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 39258);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 93721:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 9356);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 60010);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/auth.guard */ 47316);
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/core */ 39519);








//Local storage



let LoginPage = class LoginPage {
    constructor(formBuilder, authService, alertController, router, loadingController, storageService, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.getUsername();
    }
    getUsername() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const username = yield this.storageService.getData(src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.USER_NAME);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.email && this.password) {
                const loading = yield _ionic_core__WEBPACK_IMPORTED_MODULE_5__.loadingController.create({
                    message: 'Iniciando Seccion...',
                    spinner: 'crescent',
                    showBackdrop: true
                });
                loading.present();
                this.authService.login(this.email, this.password)
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-align: center;\n  width: 100%;\n}\n\n.welcome-msg {\n  padding-top: 3%;\n  position: relative;\n  text-align: left;\n  font-size: 30px;\n}\n\n.sign-toolbard {\n  position: relative;\n  text-align: left;\n}\n\n.perfile-pic {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: #FECE2F;\n  float: right;\n  right: 5%;\n}\n\nion-item {\n  position: relative;\n  width: 90%;\n  padding-top: 5%;\n}\n\n.arrow-btn {\n  float: right;\n  bottom: 0;\n  margin: 25px;\n}\n\n.forgotpassword-btn {\n  color: #000000;\n  font-size: 16px;\n  float: left;\n}\n\n.action-content {\n  background: #FECE2F;\n  background-color: aliceblue;\n}\n\naction-buttons {\n  position: relative;\n  padding-top: 5%;\n}\n\nion-row {\n  display: block;\n  margin: auto;\n  width: 50%;\n}\n\n@media only screen and (max-width: 960px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  ion-row {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFFRjs7RUFBRDtJQUNFLGVBQUE7RUFHRDs7RUFEQTtJQUNFLGVBQUE7RUFJRjtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VsY29tZS1tc2d7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uc2lnbi10b29sYmFyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucGVyZmlsZS1waWN7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjojRkVDRTJGO1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiA1JTtcbn1cblxuaW9uLWl0ZW17XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uYXJyb3ctYnRue1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiAyNXB4O1xufVxuXG4uZm9yZ290cGFzc3dvcmQtYnRue1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmFjdGlvbi1jb250ZW50e1xuICBiYWNrZ3JvdW5kOiAjRkVDRTJGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbmFjdGlvbi1idXR0b25ze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuaW9uLXJvd3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICBpb24tY29udGVudHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAucHtcbiAgIGZvbnQtc2l6ZTogNjBweDtcbiB9XG4gIGlvbi1yb3d7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59XG5cblxuIl19 */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-card-header>\n        <div class=\"sign-toolbard\">\n          <ion-button fill=\"clear\" color=\"dark\" size=\"small\">\n            <b><p>Login</p></b>\n          </ion-button>\n          <ion-button fill=\"clear\" color=\"dark\" size=\"small\" (click)=\"singupPage()\">\n            <b><p>Regístrate</p></b>\n          </ion-button>\n          <div class=\"perfile-pic\"></div>\n        </div>\n        <div class=\"welcome-msg\">\n          Que gusto verte<b><br>{{aUsername}}</b>,\n      </div>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n         <ion-item>\n           <ion-input position=\"floating\" placeholder=\"Correo electrónico\" type=\"text\" [(ngModel)]=\"email\"></ion-input>\n         </ion-item>\n         <ion-item>\n           <ion-input position=\"floating\" placeholder=\"Contraseña\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\n         </ion-item>\n       </ion-list>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <div class=\"action-buttons\">\n        <ion-button class=\"forgotpassword-btn\" type=\"button\" fill=\"clear\" (click)=\"forgot()\">¿Olvidaste tu contraseña?</ion-button>\n        <app-arrow-button class=\"arrow-btn\" type=\"submit\" expand=\"block\" shape=\"round\" color=\"warning\" (click)=\"login()\"></app-arrow-button>\n      </div>\n     </ion-card-content>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map