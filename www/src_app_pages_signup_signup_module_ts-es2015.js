(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 71542:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": function() { return /* binding */ SignupPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 9483);




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

/***/ 5415:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
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
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 71542);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 9483);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 39258);








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 9483:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": function() { return /* binding */ SignupPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 32788);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 69233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42045);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/appcookie.service */ 85559);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/auth.guard */ 47316);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 11000);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);












let SignupPage = class SignupPage {
    constructor(afs, fireAuth, loadingCtrl, toastr, router, appCookie, userService, formBuilder) {
        this.afs = afs;
        this.fireAuth = fireAuth;
        this.loadingCtrl = loadingCtrl;
        this.toastr = toastr;
        this.router = router;
        this.appCookie = appCookie;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.errorMessages = {
            name: [
                { type: 'required', message: 'Nombre es requerido' }
            ],
            email: [
                { type: 'required', message: 'Email es requerido' },
                { type: 'pattern', message: 'El formato de email no es correcto' }
            ],
            password: [
                { type: 'required', message: 'Una contraseña es requerida' },
                { type: 'minlength', message: 'Debe tener una longitud minima de 8 caracteres' }
            ],
            confirmPassword: [
                { type: 'required', message: 'La confirmacion de contraseña es requerida' },
                { type: 'mustMatch', message: 'La contraseña de confirmacion debe coincidir con la contraseña' }
            ]
        };
    }
    ngOnInit() {
        this.exform = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]),
            'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]),
        });
    }
    signup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.exform.value.name && this.exform.value.email && this.exform.value.password) {
                const loading = yield this.loadingCtrl.create({
                    message: 'Loading...',
                    spinner: 'crescent',
                    showBackdrop: true
                });
                loading.present();
                this.fireAuth.createUserWithEmailAndPassword(this.exform.value.email, this.exform.value.password).then((resp) => {
                    this.afs.collection('users').doc(resp.user.uid).set({
                        'userId': resp.user.uid,
                        'name': this.exform.value.name,
                        'email': this.exform.value.email,
                        'swapScreenLoaded': false,
                        'balance': 0,
                        'createdAt': Date.now()
                    });
                    resp.user.sendEmailVerification();
                }).then(() => {
                    loading.dismiss();
                    this.appCookie.set(src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.USER_NAME, `${this.exform.value.name}`);
                    this.toast('Se envio un email de confirmacion a su correo electrónico', 'success');
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
    // async addUserData(theUser: UserModel){
    //   await this.userService.addUserData(theUser);
    // }
    checkPassword() {
        if (this.exform.value.password === this.exform.value.confirmPassword) {
            this.passwordMatch = false;
        }
        else {
            this.passwordMatch = true;
        }
    }
    toast(message, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastr.create({
                message: message,
                position: 'top',
                color: status,
                duration: 5000
            });
            toast.present();
        });
    } //end of toast
    loginPage() {
        this.router.navigate(['/login']);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__.AppCookieService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 69233:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: absolute;\n  text-align: center;\n}\n\nion-grid {\n  width: 100%;\n}\n\n.welcome-msg {\n  position: relative;\n  text-align: left;\n  font-size: 30px;\n}\n\n.button-action {\n  position: relative;\n  text-align: left;\n}\n\n.perfile-pic {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: #3554C4;\n  float: right;\n}\n\nion-item {\n  --highlight-color-valid: #3554C4;\n}\n\n.item-content {\n  --ion-item-background:#121212;\n}\n\n.arrow-btn {\n  float: right;\n  margin: 25px;\n}\n\nion-row {\n  display: block;\n  margin: auto;\n  width: 50%;\n}\n\n.register {\n  border-bottom: solid 3.5px #3554C4;\n}\n\n@media only screen and (max-width: 960px) {\n  ion-row {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQVUsZ0NBQUE7QUFJVjs7QUFIQTtFQUNFLDZCQUFBO0FBTUY7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBS0Y7O0FBRkE7RUFDRSxrQ0FBQTtBQUtGOztBQUZBO0VBQ0U7SUFDRSxlQUFBO0VBS0Y7QUFDRiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZ3JpZHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud2VsY29tZS1tc2d7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmJ1dHRvbi1hY3Rpb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBlcmZpbGUtcGlje1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IzM1NTRDNDtcbiAgZmxvYXQ6IHJpZ2h0OyBcbn1cbiBcbmlvbi1pdGVteyAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzM1NTRDNDsgfVxuLml0ZW0tY29udGVudHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiMxMjEyMTI7IFxufVxuIFxuXG4uYXJyb3ctYnRue1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMjVweDtcbn1cblxuaW9uLXJvd3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnJlZ2lzdGVyeyBcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMy41cHggIzM1NTRDNDtcbn0gXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgaW9uLXJvd3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cblxuIl19 */");

/***/ }),

/***/ 32788:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n        <ion-grid>\n          <ion-row >\n            <ion-col size=\"auto\">\n              <div class=\"button-action\">\n                <ion-button fill=\"clear\" color=\"dark\" size=\"small\" (click)=\"loginPage()\">\n                  <p>Login</p>\n                </ion-button>\n                <ion-button fill=\"clear\" color=\"dark\" size=\"small\" >\n                   <p class=\"register\"><b>Regístrate</b></p> \n                </ion-button>\n                <div class=\"perfile-pic\"></div>\n              </div>\n            </ion-col>\n            <ion-col size=\"auto\">\n              <ion-card-header class=\"welcome-msg\">\n                <div>\n                  <!-- class=\"welcome-msg\" -->\n                  Hola <b>Usuario,</b> <br>\n                  <small>Ingresa la información que se pide en los campos debajo.</small>\n                </div>\n              </ion-card-header>\n            </ion-col>\n            <ion-col size=\"auto\">\n              <ion-card-content> \n                <form [formGroup]=\"exform\">\n                  <ion-item class=\"item-content form-group\"> \n                    <ion-input formControlName=\"name\" position=\"floating\" placeholder=\"Nombre\" type=\"text\" ></ion-input>\n                  </ion-item>\n                  <div *ngFor=\"let error of errorMessages.name\">\n                    <ng-container *ngIf=\"exform.get('name').hasError(error.type) && (exform.get('name').dirty || exform.get('name').touched)\">\n                      <small class=\"error-message\">{{error.message}}</small>\n                    </ng-container>\n                  </div>\n                  <br/>\n                  <br/>\n                  <ion-item class=\"item-content\">\n                    <ion-input formControlName=\"email\" position=\"floating\" placeholder=\"Correo electrónico\" type=\"text\" ></ion-input>\n                  </ion-item>\n                  <div *ngFor=\"let error of errorMessages.email\">\n                    <ng-container *ngIf=\"exform.get('email').hasError(error.type) && (exform.get('email').dirty || exform.get('email').touched)\">\n                      <small class=\"error-message\">{{error.message}}</small>\n                    </ng-container>\n                  </div>\n                  <br/>\n                  <br/>\n                  <ion-item class=\"item-content\">\n                    <ion-input formControlName=\"password\" position=\"floating\" placeholder=\"Contraseña\" type=\"password\"></ion-input>\n                  </ion-item> \n                  <div *ngFor=\"let error of errorMessages.password\">\n                    <ng-container *ngIf=\"exform.get('password').hasError(error.type) && (exform.get('password').dirty || exform.get('password').touched)\">\n                      <small class=\"error-message\">{{error.message}}</small>\n                    </ng-container>\n                  </div>\n                   \n                  <br/>\n                  <br/>\n                  <ion-item class=\"item-content\">\n                    <ion-input  formControlName=\"confirmPassword\" position=\"floating\" placeholder=\"Repite tu contraseña\" type=\"password\"  (ionChange)=\"checkPassword()\"></ion-input>\n                  </ion-item> \n                  <div *ngFor=\"let error of errorMessages.confirmPassword\">\n                    <ng-container *ngIf=\"exform.get('confirmPassword').hasError(error.type) && (exform.get('confirmPassword').dirty || exform.get('confirmPassword').touched)\">\n                      <small class=\"error-message\">{{error.message}}</small>\n                    </ng-container>\n                  </div>\n                </form> \n              </ion-card-content>\n            </ion-col>\n            <ion-col size=\"auto\">\n              <div>\n                <ion-text *ngIf=\"passwordMatch\" color=\"danger\" >La constraseña no coincide!</ion-text>\n                <app-arrow-button class=\"arrow-btn\" expand=\"block\" shape=\"round\" color=\"warning\" (click)=\"signup()\"></app-arrow-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts-es2015.js.map