(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    24294: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniversalAppInterceptor": function UniversalAppInterceptor() {
          return (
            /* binding */
            _UniversalAppInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/token.service */
      65987);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      24766);

      var _UniversalAppInterceptor = /*#__PURE__*/function () {
        function UniversalAppInterceptor(tokenService) {
          _classCallCheck(this, UniversalAppInterceptor);

          this.tokenService = tokenService;
        }

        _createClass(UniversalAppInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = this.tokenService.getToken();

            if (req.url.includes(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL)) {
              req = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(req);
          }
        }]);

        return UniversalAppInterceptor;
      }();

      _UniversalAppInterceptor.ctorParameters = function () {
        return [{
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService
        }];
      };

      _UniversalAppInterceptor = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _UniversalAppInterceptor);
      /***/
    },

    /***/
    70809: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./guards/authorize.guard */
      33874);
      /* harmony import */


      var _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guards/recoveruser.guard */
      15331);

      var routes = [{
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          60441)).then(function (m) {
            return m.LoginPageModule;
          });
        },
        // canLoad: [IntroGuard], //Checking if we should show the introduction or forward to inside.
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.NegateAuthorizeGuard]
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/signup/signup.module */
          5415)).then(function (m) {
            return m.SignupPageModule;
          });
        },
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.NegateAuthorizeGuard]
      }, {
        path: 'intro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_intro_intro_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/intro/intro.module */
          16104)).then(function (m) {
            return m.IntroPageModule;
          });
        },
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.NegateAuthorizeGuard]
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_forgot-password_forgot-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/forgot-password/forgot-password.module */
          42380)).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        },
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.NegateAuthorizeGuard]
      }, // {
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
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_bitcoin-deposit_bitcoin-deposit_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/bitcoin-deposit/bitcoin-deposit.module */
          68929)).then(function (m) {
            return m.BitcoinDepositPageModule;
          });
        },
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
      }, {
        path: 'paypalOrder/successfull',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_Paypal_SuccessfulDeposit_SuccessfulDeposit-routing_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/Paypal/SuccessfulDeposit/SuccessfulDeposit-routing.module */
          79054)).then(function (m) {
            return m.SuccefulDepositRoutingModule;
          });
        },
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
      }, // {
      //   path: 'paypalpaymentoptions',
      //   loadChildren: () => import('./pages/paypalpaymentoptions/paypalpaymentoptions.module').then( m => m.PaypalpaymentoptionsPageModule),
      //   canLoad: [AuthorizeGuard]
      // },
      {
        path: 'tabbar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_tab-bar_tab-bar_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/tab-bar/tab-bar.module */
          58965)).then(function (m) {
            return m.TabBarPageModule;
          });
        },
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_sidenav_sidenav_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/sidenav/sidenav.module */
          69145)).then(function (m) {
            return m.SidenavPageModule;
          });
        },
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
      }, {
        path: 'paymenterror',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_paymenterror_paymenterror_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/paymenterror/paymenterror.module */
          26685)).then(function (m) {
            return m.PaymenterrorPageModule;
          });
        },
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard, _guards_recoveruser_guard__WEBPACK_IMPORTED_MODULE_1__.RecoverUserGuard]
      }, {
        path: 'recoveruser',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_recoveruser_recoveruser_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/recoveruser/recoveruser.module */
          97233)).then(function (m) {
            return m.RecoveruserPageModule;
          });
        },
        canLoad: [_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard]
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    20721: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      _AppComponent.ctorParameters = function () {
        return [];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    50023: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      93220);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      20721);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      70809);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      31887);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic/storage-angular */
      32966);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/compat */
      49106);
      /* harmony import */


      var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/fire/compat/firestore */
      42045);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      24766);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/authentication.service */
      9356);
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guards/auth.guard */
      47316);
      /* harmony import */


      var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/token.service */
      65987);
      /* harmony import */


      var _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./guards/authorize.guard */
      33874);
      /* harmony import */


      var _guards_swap_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./guards/swap.guard */
      27956);
      /* harmony import */


      var _UniversalAppInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./UniversalAppInterceptor */
      24294);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/service-worker */
      47699); //firebase
      //env
      // services
      // guards


      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig), _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_16__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_18__.IonicStorageModule.forRoot({
          name: "AlcanciaLocalStorage"
        }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })],
        providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService, _services_token_service__WEBPACK_IMPORTED_MODULE_5__.TokenService, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard, _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_6__.AuthorizeGuard, _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_6__.NegateAuthorizeGuard, _guards_swap_guard__WEBPACK_IMPORTED_MODULE_7__.SwapGuard, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
          useClass: _UniversalAppInterceptor__WEBPACK_IMPORTED_MODULE_8__.UniversalAppInterceptor,
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    47316: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "USER_NAME": function USER_NAME() {
          return (
            /* binding */
            _USER_NAME
          );
        },

        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      59917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      88561);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      14089);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/authentication.service */
      9356);

      var _USER_NAME = 'user-name';

      var _AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(auth, router) {
          _classCallCheck(this, AuthGuard);

          this.auth = auth;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canLoad",
          value: function canLoad(route, segments) {
            var _this = this;

            return this.auth.user$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (user) {
              return user ? true : false;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (isloggedIn) {
              if (!isloggedIn) {
                _this.router.navigate(['/login']);

                return false;
              }

              return true;
            }));
          }
        }]);

        return AuthGuard;
      }();

      _AuthGuard.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _AuthGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _AuthGuard);
      /***/
    },

    /***/
    33874: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizeGuard": function AuthorizeGuard() {
          return (
            /* binding */
            _AuthorizeGuard
          );
        },

        /* harmony export */
        "NegateAuthorizeGuard": function NegateAuthorizeGuard() {
          return (
            /* binding */
            _NegateAuthorizeGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/token.service */
      65987);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);

      var currentUser;

      var _AuthorizeGuard = /*#__PURE__*/function () {
        function AuthorizeGuard(tokenService, router, fireAuth) {
          _classCallCheck(this, AuthorizeGuard);

          this.tokenService = tokenService;
          this.router = router;
          this.fireAuth = fireAuth;
          this.isLogIn = false;
        }

        _createClass(AuthorizeGuard, [{
          key: "canLoad",
          value: function canLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var token;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      token = this.tokenService.getToken();

                      if (!(token !== null)) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return", true);

                    case 5:
                      this.router.navigate(['/login']);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AuthorizeGuard;
      }();

      _AuthorizeGuard.ctorParameters = function () {
        return [{
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth
        }];
      };

      _AuthorizeGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _AuthorizeGuard);

      var _NegateAuthorizeGuard = /*#__PURE__*/function () {
        function NegateAuthorizeGuard(tokenService, router, fireAuth) {
          _classCallCheck(this, NegateAuthorizeGuard);

          this.tokenService = tokenService;
          this.router = router;
          this.fireAuth = fireAuth;
        }

        _createClass(NegateAuthorizeGuard, [{
          key: "canLoad",
          value: function canLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var token;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      token = this.tokenService.getToken();

                      if (!(token === null)) {
                        _context2.next = 5;
                        break;
                      }

                      return _context2.abrupt("return", true);

                    case 5:
                      this.router.navigate(['/']);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return NegateAuthorizeGuard;
      }();

      _NegateAuthorizeGuard.ctorParameters = function () {
        return [{
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth
        }];
      };

      _NegateAuthorizeGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _NegateAuthorizeGuard);
      /***/
    },

    /***/
    15331: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecoverUserGuard": function RecoverUserGuard() {
          return (
            /* binding */
            _RecoverUserGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/user.service */
      11000); //local storage


      var _RecoverUserGuard = /*#__PURE__*/function () {
        function RecoverUserGuard(router, userService) {
          _classCallCheck(this, RecoverUserGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(RecoverUserGuard, [{
          key: "canLoad",
          value: function canLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.userService.getUser().then(function (user) {
                        if (user.name == undefined || user.surname == undefined) {
                          _this2.router.navigate(['/recoveruser']);
                        } else {
                          return true;
                        }
                      });
                      return _context3.abrupt("return", true);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return RecoverUserGuard;
      }();

      _RecoverUserGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService
        }];
      };

      _RecoverUserGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _RecoverUserGuard);
      /***/
    },

    /***/
    27956: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SwapGuard": function SwapGuard() {
          return (
            /* binding */
            _SwapGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/user.service */
      11000); //local storage


      var _SwapGuard = /*#__PURE__*/function () {
        function SwapGuard(router, userService) {
          _classCallCheck(this, SwapGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(SwapGuard, [{
          key: "canLoad",
          value: function canLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.userService.getUser().then(function (user) {
                        if (_this3.user.swapScreenLoaded && _this3.user.swapScreenLoaded === true) {
                          return _this3.router.navigate['/tabbar'];
                        } else {
                          return true;
                        }
                      });
                      return _context4.abrupt("return", true);

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return SwapGuard;
      }();

      _SwapGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService
        }];
      };

      _SwapGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _SwapGuard);
      /***/
    },

    /***/
    74088: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CSRFToken": function CSRFToken() {
          return (
            /* binding */
            _CSRFToken
          );
        }
        /* harmony export */

      });

      var _CSRFToken = function _CSRFToken() {
        _classCallCheck(this, _CSRFToken);
      };
      /***/

    },

    /***/
    54462: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserModel": function UserModel() {
          return (
            /* binding */
            _UserModel
          );
        }
        /* harmony export */

      });

      var _UserModel = function _UserModel() {
        _classCallCheck(this, _UserModel);
      };
      /***/

    },

    /***/
    15088: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationRepository": function AuthenticationRepository() {
          return (
            /* binding */
            _AuthenticationRepository
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      31887);
      /* harmony import */


      var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/userModel */
      54462);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      24766);
      /* harmony import */


      var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/compat/firestore */
      42045);
      /* harmony import */


      var _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/appcookie.service */
      85559);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);
      /* harmony import */


      var _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/sectionStorage.service */
      14314);
      /* harmony import */


      var _models_csrftoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/csrftoken */
      74088);

      var username = new _models_userModel__WEBPACK_IMPORTED_MODULE_0__.UserModel();

      var _AuthenticationRepository = /*#__PURE__*/function () {
        function AuthenticationRepository(firestore, fireAuth, appCookie, sectionStorageService, httpClientModule) {
          _classCallCheck(this, AuthenticationRepository);

          this.firestore = firestore;
          this.fireAuth = fireAuth;
          this.appCookie = appCookie;
          this.sectionStorageService = sectionStorageService;
          this.httpClientModule = httpClientModule;
        }

        _createClass(AuthenticationRepository, [{
          key: "getCookieToken",
          value: function getCookieToken(token) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", new Promise(function (resolver) {
                        var subscription;
                        var payload = new _models_csrftoken__WEBPACK_IMPORTED_MODULE_4__.CSRFToken();
                        payload.idToken = token;
                        subscription = _this4.httpClientModule.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL + '/login/', payload).subscribe(function (user) {
                          if (subscription) {
                            subscription.unsubscribe();
                          }

                          resolver(Object.assign(user));
                          return user;
                        });
                      }));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }]);

        return AuthenticationRepository;
      }();

      _AuthenticationRepository.ctorParameters = function () {
        return [{
          type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
        }, {
          type: _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__.AppCookieService
        }, {
          type: _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_3__.SectionStorageService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
        }];
      };

      _AuthenticationRepository = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
      })], _AuthenticationRepository);
      /***/
    },

    /***/
    66359: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserRepository": function UserRepository() {
          return (
            /* binding */
            _UserRepository
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      31887);
      /* harmony import */


      var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/userModel */
      54462);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      24766);
      /* harmony import */


      var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/compat/firestore */
      42045);
      /* harmony import */


      var _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/appcookie.service */
      85559);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);
      /* harmony import */


      var _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/sectionStorage.service */
      14314);

      var username = new _models_userModel__WEBPACK_IMPORTED_MODULE_0__.UserModel();

      var _UserRepository = /*#__PURE__*/function () {
        function UserRepository(firestore, fireAuth, appCookie, sectionStorageService, httpClientModule) {
          _classCallCheck(this, UserRepository);

          this.firestore = firestore;
          this.fireAuth = fireAuth;
          this.appCookie = appCookie;
          this.sectionStorageService = sectionStorageService;
          this.httpClientModule = httpClientModule;
        }

        _createClass(UserRepository, [{
          key: "getUser",
          value: function getUser() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              var userId;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      userId = this.sectionStorageService.getData("UserId");
                      return _context6.abrupt("return", new Promise(function (resolver) {
                        var subscription;
                        subscription = _this5.httpClientModule.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL + '/users/' + userId).subscribe(function (user) {
                          if (subscription) {
                            subscription.unsubscribe();
                          }

                          resolver(Object.assign(user));
                          return user;
                        });
                      }));

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "recoverUserInfo",
          value: function recoverUserInfo(theUser) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", this.httpClientModule.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL + '/users', theUser).subscribe(function (user) {
                        return true;
                      }, function (error) {
                        console.log('ErrorMessage', error);
                      }));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getUserBalance",
          value: function getUserBalance(userId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", new Promise(function (resolver) {
                        var subscription;
                        return _this6.httpClientModule.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.ALCANCIA_SERVER_URL, "/users/").concat(userId, "/balance")).subscribe(function (balance) {
                          if (subscription) {
                            subscription.unsubscribe();
                          }

                          resolver(Object.assign(balance));
                          return balance;
                        });
                      }));

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }]);

        return UserRepository;
      }();

      _UserRepository.ctorParameters = function () {
        return [{
          type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
        }, {
          type: _services_appcookie_service__WEBPACK_IMPORTED_MODULE_2__.AppCookieService
        }, {
          type: _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_3__.SectionStorageService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
        }];
      };

      _UserRepository = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
      })], _UserRepository);
      /***/
    },

    /***/
    85559: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppCookieService": function AppCookieService() {
          return (
            /* binding */
            _AppCookieService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _AppCookieService = /*#__PURE__*/function () {
        function AppCookieService() {
          _classCallCheck(this, AppCookieService);

          this.cookieStore = {};
          this.parseCookies(document.cookie);
        }

        _createClass(AppCookieService, [{
          key: "parseCookies",
          value: function parseCookies() {
            var cookies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.cookie;
            this.cookieStore = {};

            if (!!cookies === false) {
              return;
            }

            var cookiesArr = cookies.split(';');

            var _iterator = _createForOfIteratorHelper(cookiesArr),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var cookie = _step.value;
                var cookieArr = cookie.split('=');
                this.cookieStore[cookieArr[0].trim()] = cookieArr[1];
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "get",
          value: function get(key) {
            // this.set(key, '');
            this.parseCookies();
            return !!this.cookieStore[key] ? this.cookieStore[key] : null;
          }
        }, {
          key: "remove",
          value: function remove(key) {
            document.cookie = "".concat(key, " = ; expires=Thu, 1 jan 1990 12:00:00 UTC; path=/");
          }
        }, {
          key: "set",
          value: function set(key, value) {
            document.cookie = key + '=' + (value || '');
          }
        }]);

        return AppCookieService;
      }();

      _AppCookieService.ctorParameters = function () {
        return [];
      };

      _AppCookieService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _AppCookieService);
      /***/
    },

    /***/
    9356: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationService": function AuthenticationService() {
          return (
            /* binding */
            _AuthenticationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      267);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      32812);
      /* harmony import */


      var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/compat/firestore */
      42045);
      /* harmony import */


      var _token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./token.service */
      65987);
      /* harmony import */


      var _sectionStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sectionStorage.service */
      14314);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user.service */
      11000);
      /* harmony import */


      var _appcookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./appcookie.service */
      85559);
      /* harmony import */


      var _repository_Authentication_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../repository/Authentication.repository */
      15088);

      var _AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(fireAuth, afs, router, loadingCtrl, toastr, tokenService, sectionStorage, userService, appCookieService, authenticationRepository) {
          var _this7 = this;

          _classCallCheck(this, AuthenticationService);

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
          this.user$ = this.fireAuth.authState.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (user) {
            if (user) {
              return _this7.afs.doc("users/".concat(user.uid)).valueChanges();
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
            }
          }));
        } // end of constructor


        _createClass(AuthenticationService, [{
          key: "login",
          value: function login(email, password) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this8 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Autenticando...',
                        spinner: 'crescent',
                        showBackdrop: true
                      });

                    case 2:
                      loading = _context10.sent;
                      loading.present();
                      this.fireAuth.signInWithEmailAndPassword(email, password).then(function (data) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var _this9 = this;

                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  if (data.user.emailVerified) {
                                    _context9.next = 6;
                                    break;
                                  }

                                  loading.dismiss();
                                  this.toast('Su cuenta aún no ha sido confirmada, porfavor revise su correo!', 'danger');
                                  this.logout();
                                  _context9.next = 12;
                                  break;

                                case 6:
                                  _context9.next = 8;
                                  return this.fireAuth.currentUser;

                                case 8:
                                  _context9.sent.getIdToken().then(function (token) {
                                    _this9.tokenService.setToken(token); // this.authenticationRepository.getCookieToken(token);

                                  });

                                  _context9.next = 11;
                                  return this.fireAuth.authState.subscribe(function (user) {
                                    if (user) {
                                      _this9.sectionStorage.saveData("UserId", user.uid);

                                      _this9.userService.getUser().then(function (user) {
                                        if (user.name == undefined || user.surname == undefined) {
                                          _this9.router.navigate(['/recoveruser']);
                                        } else {
                                          _this9.sectionStorage.saveData("UserEmail", user.email);

                                          _this9.sectionStorage.saveData("Username", user.name);

                                          if (!user.swapScreenLoaded || user.swapScreenLoaded === false) {
                                            _this9.router.navigate(['/nav/swap']);
                                          } else {
                                            _this9.router.navigate(['/']);
                                          }
                                        }
                                      });
                                    }
                                  });

                                case 11:
                                  loading.dismiss();

                                case 12:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      })["catch"](function (error) {
                        console.log(error);
                        loading.dismiss();

                        _this8.toast('Correo electrónico o contraseña incorrecta', 'danger');
                      });

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } // end of login

        }, {
          key: "logout",
          value: function logout() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.fireAuth.signOut().then(function () {
                        _this10.router.navigate(['/login']);
                      });

                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          } // end of logout

        }, {
          key: "toast",
          value: function toast(message, status) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var toast;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.toastr.create({
                        message: message,
                        position: 'top',
                        color: status,
                        duration: 3000
                      });

                    case 2:
                      toast = _context12.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          } // end of toast

        }]);

        return AuthenticationService;
      }();

      _AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth
        }, {
          type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
        }, {
          type: _token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService
        }, {
          type: _sectionStorage_service__WEBPACK_IMPORTED_MODULE_1__.SectionStorageService
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _appcookie_service__WEBPACK_IMPORTED_MODULE_3__.AppCookieService
        }, {
          type: _repository_Authentication_repository__WEBPACK_IMPORTED_MODULE_4__.AuthenticationRepository
        }];
      };

      _AuthenticationService = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
      })], _AuthenticationService);
      /***/
    },

    /***/
    14314: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SectionStorageService": function SectionStorageService() {
          return (
            /* binding */
            _SectionStorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _SectionStorageService = /*#__PURE__*/function () {
        function SectionStorageService() {
          _classCallCheck(this, SectionStorageService);
        }

        _createClass(SectionStorageService, [{
          key: "saveData",
          value: function saveData(key, value) {
            sessionStorage.setItem(key, value);
          }
        }, {
          key: "getData",
          value: function getData(key) {
            var data = sessionStorage.getItem(key);
            return data;
          }
        }]);

        return SectionStorageService;
      }();

      _SectionStorageService.ctorParameters = function () {
        return [];
      };

      _SectionStorageService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _SectionStorageService);
      /***/
    },

    /***/
    65987: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenService": function TokenService() {
          return (
            /* binding */
            _TokenService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);

      var TOKEN_KEY = 'the-token';

      var _TokenService = /*#__PURE__*/function () {
        function TokenService(fireAuth) {
          _classCallCheck(this, TokenService);

          this.fireAuth = fireAuth;
        }

        _createClass(TokenService, [{
          key: "setToken",
          value: function setToken(token) {
            // Save data to sessionStorage
            sessionStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return sessionStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "updateToken",
          value: function updateToken() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      return _context13.abrupt("return", new Promise(function (resolve) {
                        var subscription;
                        subscription = _this11.fireAuth.idToken.subscribe(function (token) {
                          if (subscription) {
                            subscription.unsubscribe();
                          }

                          var tokenUpdated = token ? true : false;
                          resolve(tokenUpdated);
                        });
                      }));

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }, {
          key: "isUserAuthenticated",
          value: function isUserAuthenticated() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var currentUser;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      currentUser = this.fireAuth.currentUser;
                      console.log(currentUser);

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }]);

        return TokenService;
      }();

      _TokenService.ctorParameters = function () {
        return [{
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth
        }];
      };

      _TokenService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _TokenService);
      /***/
    },

    /***/
    11000: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _repository_user_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../repository/user.repository */
      66359);

      var _UserService = /*#__PURE__*/function () {
        function UserService(userRepository) {
          _classCallCheck(this, UserService);

          this.userRepository = userRepository;
        }

        _createClass(UserService, [{
          key: "getUser",
          value: function getUser() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.userRepository.getUser();

                    case 2:
                      return _context15.abrupt("return", _context15.sent);

                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "recoverUser",
          value: function recoverUser(theUser) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.userRepository.recoverUserInfo(theUser);

                    case 2:
                      return _context16.abrupt("return", _context16.sent);

                    case 3:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "getUserBalance",
          value: function getUserBalance(userId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.userRepository.getUserBalance(userId);

                    case 2:
                      return _context17.abrupt("return", _context17.sent);

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }]);

        return UserService;
      }();

      _UserService.ctorParameters = function () {
        return [{
          type: _repository_user_repository__WEBPACK_IMPORTED_MODULE_0__.UserRepository
        }];
      };

      _UserService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _UserService);
      /***/
    },

    /***/
    24766: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        },

        /* harmony export */
        "ALCANCIA_SERVER_URL": function ALCANCIA_SERVER_URL() {
          return (
            /* binding */
            _ALCANCIA_SERVER_URL
          );
        },

        /* harmony export */
        "EXCHANGE_RATE_URL": function EXCHANGE_RATE_URL() {
          return (
            /* binding */
            _EXCHANGE_RATE_URL
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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
      var _ALCANCIA_SERVER_URL = "https://royerdonnetarenas.tech/api";
      var _EXCHANGE_RATE_URL = "https://v6.exchangerate-api.com/v6/460cee64dbd1d3e35cdfcc74";
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    8835: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      90476);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      50023);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      24766);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863: function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [95261, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [26, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [29009, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [27221, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [34694, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [70993, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [63645, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [62245, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [23482, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [4081, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [53315, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [64133, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [37542, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [21459, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [47618, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [90101, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [82210, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [47370, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [23652, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [28220, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [25500, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [84913, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [15078, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [14857, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [48958, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [14383, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [97630, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [81297, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [35492, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [13752, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7487, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [61778, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [82904, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [81609, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [31218, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [92849, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [4127, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [28400, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [14397, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [43391, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [66793, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [11695, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [4180, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    91106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(8835);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map