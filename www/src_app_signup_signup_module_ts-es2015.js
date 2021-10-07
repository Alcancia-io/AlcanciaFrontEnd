(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 69376:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": function() { return /* binding */ SignupPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 36727);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 56650:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": function() { return /* binding */ SignupPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 69376);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 36727);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 39258);








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 36727:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": function() { return /* binding */ SignupPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 21355);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 74194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42045);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ 60010);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/auth.guard */ 47316);










let SignupPage = class SignupPage {
    constructor(afs, fireAuth, loadingCtrl, toastr, router, storageService) {
        this.afs = afs;
        this.fireAuth = fireAuth;
        this.loadingCtrl = loadingCtrl;
        this.toastr = toastr;
        this.router = router;
        this.storageService = storageService;
    }
    ngOnInit() {
    }
    signup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.name && this.email && this.password) {
                const loading = yield this.loadingCtrl.create({
                    message: 'Loading...',
                    spinner: 'crescent',
                    showBackdrop: true
                });
                loading.present();
                this.fireAuth.createUserWithEmailAndPassword(this.email, this.password).then((resp) => {
                    this.afs.collection('users').doc(resp.user.uid).set({
                        'userId': resp.user.uid,
                        'name': this.name,
                        'email': this.email,
                        'createdAt': Date.now()
                    });
                    resp.user.sendEmailVerification();
                }).then(() => {
                    loading.dismiss();
                    this.storageService.addData({ key: src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.USER_NAME, value: `${this.name}` }, src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.USER_NAME);
                    this.toast('Usuario registrado correctamente!', 'success');
                    this.router.navigate(['/login']);
                })
                    .catch((error) => {
                    loading.dismiss();
                    this.toast(error.message, 'danger');
                });
            }
            else {
                this.toast('Favor completar los campos!', 'danger');
            }
        });
    } //end of signup
    checkPassword() {
        if (this.password == this.confirmPassword) {
            this.passwordMatch = true;
        }
        else {
            this.passwordMatch = false;
        }
    }
    toast(message, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastr.create({
                message: message,
                position: 'top',
                color: status,
                duration: 2000
            });
            toast.present();
        });
    } //end of toast
    loginPage() {
        this.router.navigate(['/login']);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 74194:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: absolute;\n  text-align: center;\n}\n\nion-grid {\n  width: 100%;\n}\n\n.welcome-msg {\n  position: relative;\n  text-align: left;\n  font-size: 30px;\n}\n\n.button-action {\n  position: relative;\n  text-align: left;\n}\n\n.perfile-pic {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: #FECE2F;\n  float: right;\n  right: 5%;\n}\n\nion-item {\n  position: relative;\n  width: 90%;\n  padding-top: 5%;\n}\n\n.arrow-btn {\n  float: right;\n  margin: 25px;\n}\n\nion-row {\n  display: block;\n  margin: auto;\n  width: 50%;\n}\n\n@media only screen and (max-width: 960px) {\n  ion-row {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsZUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWdyaWR7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndlbGNvbWUtbXNne1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5idXR0b24tYWN0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wZXJmaWxlLXBpY3tcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRUNFMkY7XG4gIGZsb2F0OiByaWdodDtcbiAgcmlnaHQ6IDUlO1xufVxuXG5pb24taXRlbXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5hcnJvdy1idG57XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAyNXB4O1xufVxuXG5pb24tcm93e1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIGlvbi1yb3d7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 21355:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n        <ion-grid>\n          <ion-row >\n            <ion-col size=\"auto\">\n              <div class=\"button-action\">\n                <ion-button fill=\"clear\" color=\"dark\" size=\"small\" (click)=\"loginPage()\">\n                  <b><p>Login</p></b>\n                </ion-button>\n                <ion-button fill=\"clear\" color=\"dark\" size=\"small\" >\n                  <b><p>Regístrate</p></b>\n                </ion-button>\n                <div class=\"perfile-pic\"></div>\n              </div>\n            </ion-col>\n            <ion-col size=\"auto\">\n              <ion-card-header class=\"welcome-msg\">\n                <div>\n                  <!-- class=\"welcome-msg\" -->\n                  Hola <b>Usuario,</b> <br>\n                  <small>Ingresa la información que se le pide en los campos debajo.</small>\n                </div>\n              </ion-card-header>\n            </ion-col>\n            <ion-col size=\"auto\">\n              <ion-card-content>\n                 <ion-list>\n                  <ion-item>\n                    <ion-input position=\"floating\" placeholder=\"Nombre\" type=\"text\" [(ngModel)]=\"name\"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-input position=\"floating\" placeholder=\"Correo electrónico\" type=\"text\" [(ngModel)]=\"email\"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-input position=\"floating\" placeholder=\"Contraseña\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-input position=\"floating\" placeholder=\"Repite tu contraseña\" type=\"password\" [(ngModel)]=\"confirmPassword\" (ionChange)=\"checkPassword()\"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-card-content>\n            </ion-col>\n            <ion-col size=\"auto\">\n              <div>\n                <ion-text *ngIf=\"password && !passwordMatch\" color=\"danger\" >La constraseña no coninsiden!</ion-text>\n                <app-arrow-button class=\"arrow-btn\" expand=\"block\" shape=\"round\" color=\"warning\" (click)=\"signup()\"></app-arrow-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts-es2015.js.map