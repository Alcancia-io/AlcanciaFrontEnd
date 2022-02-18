(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 24294:
/*!********************************************!*\
  !*** ./src/app/UniversalAppInterceptor.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversalAppInterceptor": function() { return /* binding */ UniversalAppInterceptor; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/token.service */ 65987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);




let UniversalAppInterceptor = class UniversalAppInterceptor {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    intercept(req, next) {
        const token = this.tokenService.getToken();
        if (req.url.includes(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL)) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
};
UniversalAppInterceptor.ctorParameters = () => [
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService }
];
UniversalAppInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], UniversalAppInterceptor);



/***/ }),

/***/ 70809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/authorize.guard */ 33874);
/* harmony import */ var _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/recoveruser.guard */ 15331);





const routes = [
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 60441)).then(m => m.LoginPageModule),
        // canLoad: [IntroGuard], //Checking if we should show the introduction or forward to inside.
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.NegateAuthorizeGuard]
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 5415)).then(m => m.SignupPageModule),
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.NegateAuthorizeGuard]
    },
    {
        path: 'intro',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_intro_intro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/intro/intro.module */ 16104)).then(m => m.IntroPageModule),
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.NegateAuthorizeGuard]
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_forgot-password_forgot-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgot-password/forgot-password.module */ 42380)).then(m => m.ForgotPasswordPageModule),
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.NegateAuthorizeGuard]
    },
    // {
    //   path: '',
    //   redirectTo: '/login',
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'swap',
    //   loadChildren: () => import('./pages/swap/swap.module').then( m => m.SwapPageModule),
    //   canLoad: [SwapGuard,AuthorizeGuard]
    // },
    {
        path: 'bitcoin-deposit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_bitcoin-deposit_bitcoin-deposit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/bitcoin-deposit/bitcoin-deposit.module */ 68929)).then(m => m.BitcoinDepositPageModule),
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
    },
    {
        path: 'paypalOrder/successfull',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_Paypal_SuccessfulDeposit_SuccessfulDeposit-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Paypal/SuccessfulDeposit/SuccessfulDeposit-routing.module */ 79054)).then(m => m.SuccefulDepositRoutingModule),
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
    },
    // {
    //   path: 'paypalpaymentoptions',
    //   loadChildren: () => import('./pages/paypalpaymentoptions/paypalpaymentoptions.module').then( m => m.PaypalpaymentoptionsPageModule),
    //   canLoad: [AuthorizeGuard]
    // },
    {
        path: 'tabbar',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tab-bar_tab-bar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tab-bar/tab-bar.module */ 58965)).then(m => m.TabBarPageModule),
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sidenav_sidenav_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sidenav/sidenav.module */ 69145)).then(m => m.SidenavPageModule),
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
    },
    {
        path: 'paymenterror',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_paymenterror_paymenterror_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/paymenterror/paymenterror.module */ 26685)).then(m => m.PaymenterrorPageModule),
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
    },
    {
        path: 'recoveruser',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_recoveruser_recoveruser_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recoveruser/recoveruser.module */ 97233)).then(m => m.RecoveruserPageModule),
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 20721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 50023:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 93220);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 20721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 70809);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/storage-angular */ 32966);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat */ 49106);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42045);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ 9356);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ 47316);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/token.service */ 65987);
/* harmony import */ var _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/authorize.guard */ 33874);
/* harmony import */ var _guards_swap_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/swap.guard */ 27956);
/* harmony import */ var _UniversalAppInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UniversalAppInterceptor */ 24294);









//firebase



//env

// services

// guards





let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_16__.AngularFireAuthModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestoreModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_18__.IonicStorageModule.forRoot({
                name: "AlcanciaLocalStorage"
            })
        ],
        providers: [
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService,
            _services_token_service__WEBPACK_IMPORTED_MODULE_5__.TokenService,
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard,
            _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_6__.AuthorizeGuard,
            _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_6__.NegateAuthorizeGuard,
            _guards_swap_guard__WEBPACK_IMPORTED_MODULE_7__.SwapGuard,
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS, useClass: _UniversalAppInterceptor__WEBPACK_IMPORTED_MODULE_8__.UniversalAppInterceptor, multi: true, }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 47316:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_NAME": function() { return /* binding */ USER_NAME; },
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 14089);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 9356);





const USER_NAME = 'user-name';
let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canLoad(route, segments) {
        return this.auth.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => user ? true : false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isloggedIn => {
            if (!isloggedIn) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 33874:
/*!*******************************************!*\
  !*** ./src/app/guards/authorize.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizeGuard": function() { return /* binding */ AuthorizeGuard; },
/* harmony export */   "NegateAuthorizeGuard": function() { return /* binding */ NegateAuthorizeGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/token.service */ 65987);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);





let currentUser;
let AuthorizeGuard = class AuthorizeGuard {
    constructor(tokenService, router, fireAuth) {
        this.tokenService = tokenService;
        this.router = router;
        this.fireAuth = fireAuth;
        this.isLogIn = false;
    }
    canLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const token = this.tokenService.getToken();
            if (token !== null) {
                return true;
            }
            else {
                this.router.navigate(['/login']);
            }
        });
    }
};
AuthorizeGuard.ctorParameters = () => [
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth }
];
AuthorizeGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthorizeGuard);

let NegateAuthorizeGuard = class NegateAuthorizeGuard {
    constructor(tokenService, router, fireAuth) {
        this.tokenService = tokenService;
        this.router = router;
        this.fireAuth = fireAuth;
    }
    canLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const token = this.tokenService.getToken();
            if (token === null) {
                return true;
            }
            else {
                this.router.navigate(['/']);
            }
        });
    }
};
NegateAuthorizeGuard.ctorParameters = () => [
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth }
];
NegateAuthorizeGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], NegateAuthorizeGuard);



/***/ }),

/***/ 15331:
/*!*********************************************!*\
  !*** ./src/app/guards/recoveruser.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverUserGuard": function() { return /* binding */ RecoverUserGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 11000);



//local storage

let RecoverUserGuard = class RecoverUserGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.userService.getUser().then(user => {
                if (user.name == undefined || user.surname == undefined) {
                    this.router.navigate(['/recoveruser']);
                }
                else {
                    return true;
                }
            });
            return true;
        });
    }
};
RecoverUserGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService }
];
RecoverUserGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RecoverUserGuard);



/***/ }),

/***/ 27956:
/*!**************************************!*\
  !*** ./src/app/guards/swap.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapGuard": function() { return /* binding */ SwapGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 11000);



//local storage

let SwapGuard = class SwapGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.userService.getUser().then(user => {
                if (this.user.swapScreenLoaded && this.user.swapScreenLoaded === true) {
                    return this.router.navigate[('/tabbar')];
                }
                else {
                    return true;
                }
            });
            return true;
        });
    }
};
SwapGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService }
];
SwapGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SwapGuard);



/***/ }),

/***/ 74088:
/*!*************************************!*\
  !*** ./src/app/models/csrftoken.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSRFToken": function() { return /* binding */ CSRFToken; }
/* harmony export */ });
class CSRFToken {
}


/***/ }),

/***/ 54462:
/*!*************************************!*\
  !*** ./src/app/models/userModel.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": function() { return /* binding */ UserModel; }
/* harmony export */ });
class UserModel {
}


/***/ }),

/***/ 15088:
/*!*********************************************************!*\
  !*** ./src/app/repository/Authentication.repository.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRepository": function() { return /* binding */ AuthenticationRepository; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userModel */ 54462);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42045);
/* harmony import */ var _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/appcookie.service */ 85559);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);
/* harmony import */ var _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sectionStorage.service */ 14314);
/* harmony import */ var _models_csrftoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/csrftoken */ 74088);










const username = new _models_userModel__WEBPACK_IMPORTED_MODULE_0__.UserModel();
let AuthenticationRepository = class AuthenticationRepository {
    constructor(firestore, fireAuth, appCookie, sectionStorageService, httpClientModule) {
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.appCookie = appCookie;
        this.sectionStorageService = sectionStorageService;
        this.httpClientModule = httpClientModule;
    }
    getCookieToken(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolver) => {
                let subscription;
                const payload = new _models_csrftoken__WEBPACK_IMPORTED_MODULE_4__.CSRFToken();
                payload.idToken = token;
                subscription = this.httpClientModule.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL + '/login/', payload)
                    .subscribe(user => {
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                    resolver(Object.assign(user));
                    return user;
                });
            });
        });
    }
};
AuthenticationRepository.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth },
    { type: _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__.AppCookieService },
    { type: _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_3__.SectionStorageService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient }
];
AuthenticationRepository = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root',
    })
], AuthenticationRepository);



/***/ }),

/***/ 66359:
/*!***********************************************!*\
  !*** ./src/app/repository/user.repository.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRepository": function() { return /* binding */ UserRepository; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userModel */ 54462);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42045);
/* harmony import */ var _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/appcookie.service */ 85559);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);
/* harmony import */ var _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sectionStorage.service */ 14314);









const username = new _models_userModel__WEBPACK_IMPORTED_MODULE_0__.UserModel();
let UserRepository = class UserRepository {
    constructor(firestore, fireAuth, appCookie, sectionStorageService, httpClientModule) {
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.appCookie = appCookie;
        this.sectionStorageService = sectionStorageService;
        this.httpClientModule = httpClientModule;
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const userId = this.sectionStorageService.getData("UserId");
            return new Promise((resolver) => {
                let subscription;
                subscription = this.httpClientModule.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL + '/users/' + userId)
                    .subscribe(user => {
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                    resolver(Object.assign(user));
                    return user;
                });
            });
        });
    }
    recoverUserInfo(theUser) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.httpClientModule.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL + '/users', theUser).subscribe(user => {
                return true;
            }, error => {
                console.log('ErrorMessage', error);
            });
        });
    }
    getUserBalance(userId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolver) => {
                let subscription;
                return this.httpClientModule.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL}/users/${userId}/balance`).subscribe(balance => {
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                    resolver(Object.assign(balance));
                    return balance;
                });
            });
        });
    }
};
UserRepository.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth },
    { type: _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__.AppCookieService },
    { type: _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_3__.SectionStorageService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient }
];
UserRepository = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root',
    })
], UserRepository);



/***/ }),

/***/ 85559:
/*!***********************************************!*\
  !*** ./src/app/services/appcookie.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCookieService": function() { return /* binding */ AppCookieService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 42741);


let AppCookieService = class AppCookieService {
    constructor() {
        this.cookieStore = {};
        this.parseCookies(document.cookie);
    }
    parseCookies(cookies = document.cookie) {
        this.cookieStore = {};
        if (!!cookies === false) {
            return;
        }
        const cookiesArr = cookies.split(';');
        for (const cookie of cookiesArr) {
            const cookieArr = cookie.split('=');
            this.cookieStore[cookieArr[0].trim()] = cookieArr[1];
        }
    }
    get(key) {
        // this.set(key, '');
        this.parseCookies();
        return !!this.cookieStore[key] ? this.cookieStore[key] : null;
    }
    remove(key) {
        document.cookie = `${key} = ; expires=Thu, 1 jan 1990 12:00:00 UTC; path=/`;
    }
    set(key, value) {
        document.cookie = key + '=' + (value || '');
    }
};
AppCookieService.ctorParameters = () => [];
AppCookieService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], AppCookieService);



/***/ }),

/***/ 9356:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* binding */ AuthenticationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32812);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42045);
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.service */ 65987);
/* harmony import */ var _sectionStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectionStorage.service */ 14314);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 11000);
/* harmony import */ var _appcookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appcookie.service */ 85559);
/* harmony import */ var _repository_Authentication_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repository/Authentication.repository */ 15088);













let AuthenticationService = class AuthenticationService {
    constructor(fireAuth, afs, router, loadingCtrl, toastr, tokenService, sectionStorage, userService, appCookieService, authenticationRepository) {
        this.fireAuth = fireAuth;
        this.afs = afs;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastr = toastr;
        this.tokenService = tokenService;
        this.sectionStorage = sectionStorage;
        this.userService = userService;
        this.appCookieService = appCookieService;
        this.authenticationRepository = authenticationRepository;
        this.AccessToken = "";
        this.user$ = this.fireAuth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(user => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
            }
        }));
    } // end of constructor
    login(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Autenticando...',
                spinner: 'crescent',
                showBackdrop: true
            });
            loading.present();
            this.fireAuth.signInWithEmailAndPassword(email, password)
                .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (!data.user.emailVerified) {
                    loading.dismiss();
                    this.toast('Porfavor verificar su correo!', 'danger');
                    this.logout();
                }
                else {
                    (yield this.fireAuth.currentUser).getIdToken()
                        .then((token => {
                        this.tokenService.setToken(token);
                        // this.authenticationRepository.getCookieToken(token);
                    }));
                    (yield this.fireAuth.authState.subscribe(user => {
                        if (user) {
                            this.sectionStorage.saveData("UserId", user.uid);
                            this.userService.getUser().then(user => {
                                if (user.name == undefined || user.surname == undefined) {
                                    this.router.navigate(['/recoveruser']);
                                }
                                else {
                                    this.sectionStorage.saveData("UserEmail", user.email);
                                    this.sectionStorage.saveData("Username", user.name);
                                    if (!user.swapScreenLoaded || user.swapScreenLoaded === false) {
                                        this.router.navigate(['/nav/swap']);
                                    }
                                    else {
                                        this.router.navigate(['/']);
                                    }
                                }
                            });
                        }
                    }));
                    loading.dismiss();
                }
            })).catch((error) => {
                console.log(error);
                loading.dismiss();
                this.toast('Correo electrónico o contraseña incorrecta', 'danger');
            });
        });
    } // end of login
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.fireAuth.signOut()
                .then(() => {
                this.router.navigate(['/login']);
            });
        });
    } // end of logout
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
    } // end of toast
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService },
    { type: _sectionStorage_service__WEBPACK_IMPORTED_MODULE_1__.SectionStorageService },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _appcookie_service__WEBPACK_IMPORTED_MODULE_3__.AppCookieService },
    { type: _repository_Authentication_repository__WEBPACK_IMPORTED_MODULE_4__.AuthenticationRepository }
];
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ 14314:
/*!****************************************************!*\
  !*** ./src/app/services/sectionStorage.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionStorageService": function() { return /* binding */ SectionStorageService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 42741);


let SectionStorageService = class SectionStorageService {
    constructor() { }
    saveData(key, value) {
        sessionStorage.setItem(key, value);
    }
    getData(key) {
        let data = sessionStorage.getItem(key);
        return data;
    }
};
SectionStorageService.ctorParameters = () => [];
SectionStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SectionStorageService);



/***/ }),

/***/ 65987:
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": function() { return /* binding */ TokenService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);



const TOKEN_KEY = 'the-token';
let TokenService = class TokenService {
    constructor(fireAuth) {
        this.fireAuth = fireAuth;
    }
    setToken(token) {
        // Save data to sessionStorage
        sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    updateToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                let subscription;
                subscription = this.fireAuth.idToken
                    .subscribe(token => {
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                    const tokenUpdated = token ? true : false;
                    resolve(tokenUpdated);
                });
            });
        });
    }
    isUserAuthenticated() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let currentUser = this.fireAuth.currentUser;
            console.log(currentUser);
        });
    }
};
TokenService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth }
];
TokenService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], TokenService);



/***/ }),

/***/ 11000:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _repository_user_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/user.repository */ 66359);



let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.userRepository.getUser();
        });
    }
    recoverUser(theUser) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.userRepository.recoverUserInfo(theUser);
        });
    }
    getUserBalance(userId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.userRepository.getUserBalance(userId);
        });
    }
};
UserService.ctorParameters = () => [
    { type: _repository_user_repository__WEBPACK_IMPORTED_MODULE_0__.UserRepository }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 24766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; },
/* harmony export */   "ALCANCIA_SERVER_URL": function() { return /* binding */ ALCANCIA_SERVER_URL; },
/* harmony export */   "EXCHANGE_RATE_URL": function() { return /* binding */ EXCHANGE_RATE_URL; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBCcfcDq4NLj-MC7VB_Y4AdKGTZOsQz-iQ",
        authDomain: "alcancia.firebaseapp.com",
        projectId: "alcancia",
        storageBucket: "alcancia.appspot.com",
        messagingSenderId: "142936855133",
        appId: "1:142936855133:web:568866aa22b85d2d33b3b4",
        measurementId: "G-SE488C3P75"
    }
};
const ALCANCIA_SERVER_URL = "https://royerdonnetarenas.tech/api";
const EXCHANGE_RATE_URL = " https://v6.exchangerate-api.com/v6/460cee64dbd1d3e35cdfcc74";
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 90476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50023);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 24766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		95261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		29009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		27221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		34694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		70993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		63645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		62245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		23482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		53315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		37542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		21459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		47618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		90101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		82210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		47370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		23652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		28220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		25500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		84913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		15078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		14857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		48958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		14383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		97630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		81297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		35492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		13752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		61778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		82904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		81609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		31218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		92849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		28400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		14397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		43391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		66793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		11695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(8835); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map