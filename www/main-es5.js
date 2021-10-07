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


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/token.service */
      65987);

      var _UniversalAppInterceptor = /*#__PURE__*/function () {
        function UniversalAppInterceptor(tokenService) {
          _classCallCheck(this, UniversalAppInterceptor);

          this.tokenService = tokenService;
        }

        _createClass(UniversalAppInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDM0MmIwMjU1MDAyYWI3NWUwNTM0YzU4MmVjYzY2Y2YwZTE3ZDIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWxjYW5jaWEiLCJhdWQiOiJhbGNhbmNpYSIsImF1dGhfdGltZSI6MTYzMzM5OTk4MCwidXNlcl9pZCI6IkU0Y2tPd2RoNnpibE5tdU9YVzNlQmxKSjJJbTEiLCJzdWIiOiJFNGNrT3dkaDZ6YmxObXVPWFczZUJsSkoySW0xIiwiaWF0IjoxNjMzMzk5OTgwLCJleHAiOjE2MzM0MDM1ODAsImVtYWlsIjoic2ViYXN0aWFucmVzdGl0dXlvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNlYmFzdGlhbnJlc3RpdHV5b0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IP3UU9JFZgiV7Tn1vCIuhb_970m4-7npQp_UN-hhYB_rxA3f72seCgVffVwRaxmfl77fVhjxgDtaKmvhj9u0tYmnbi9gv-0w78VWHwJ681mb4egQrljagPxFUtybOGR3D-FP-cYwOowKW60iY1D3ugX7GPs66L69F-4dSegkLgoVGbisn_ML6BNOba4yJ0No8CTDYii99sWuYV5M3u6ljTmPXZlxsAi5PHC_vOnfjE8CnhmgA4uFv1RA9hFlVKCSff7IcZuAy-Yjc2MZ5w8PjzG349-arX5yxY4VTFUA8lbKCT6FlGrf6_3-1YZdASuJ_SGiaVtN6azLAHw7r9Q9Og';
            req = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
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

      _UniversalAppInterceptor = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _UniversalAppInterceptor);
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


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _guards_intro_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./guards/intro.guard */
      85160);

      var routes = [{
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          77641)).then(function (m) {
            return m.LoginPageModule;
          });
        },
        canLoad: [_guards_intro_guard__WEBPACK_IMPORTED_MODULE_0__.IntroGuard] //Checking if we should show the introduction or forward to inside.
        //canActivate: [NegateAuthorizeGuard]

      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./signup/signup.module */
          56650)).then(function (m) {
            return m.SignupPageModule;
          });
        } // canActivate: [NegateAuthorizeGuard]

      }, {
        path: 'intro',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_intro_intro_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./intro/intro.module */
          45309)).then(function (m) {
            return m.IntroPageModule;
          });
        } // canActivate: [NegateAuthorizeGuard]

      }, {
        path: 'main-screen',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_main-screen_main-screen_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./main-screen/main-screen.module */
          57226)).then(function (m) {
            return m.MainScreenPageModule;
          });
        } // canActivate: [AuthorizeGuard] //Securing all child pages.

      }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_forgot-password_forgot-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./forgot-password/forgot-password.module */
          31129)).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        } // canActivate: [NegateAuthorizeGuard]

      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
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


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      93220);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      31887);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/storage-angular */
      32966);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/compat */
      49106);
      /* harmony import */


      var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/compat/firestore */
      42045);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
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


      var _UniversalAppInterceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./UniversalAppInterceptor */
      24294); //firebase
      //env
      // services
      // guards


      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig), _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestoreModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__.IonicStorageModule.forRoot({
          name: "AlcanciaLocalStorage"
        })],
        providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService, _services_token_service__WEBPACK_IMPORTED_MODULE_5__.TokenService, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard, _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_6__.AuthorizeGuard, _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_6__.NegateAuthorizeGuard, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
          useClass: _UniversalAppInterceptor__WEBPACK_IMPORTED_MODULE_7__.UniversalAppInterceptor,
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


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/token.service */
      65987);
      /* harmony import */


      var _services_appcookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/appcookie.service */
      85559);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication.service */
      9356);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      59917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      88561);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      14089);

      var currentUser;

      var _AuthorizeGuard = /*#__PURE__*/function () {
        function AuthorizeGuard(authenticationService, appCookieService, fireAuth, tokenService, router) {
          _classCallCheck(this, AuthorizeGuard);

          this.authenticationService = authenticationService;
          this.appCookieService = appCookieService;
          this.fireAuth = fireAuth;
          this.tokenService = tokenService;
          this.router = router;
        }

        _createClass(AuthorizeGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this2 = this;

            return this.authenticationService.user$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (user) {
              return user ? true : false;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(function (isLoggedIn) {
              if (isLoggedIn) {
                if (_this2.tokenService.isTokenExpired()) {
                  console.log('token is expired');
                  return _this2.router.navigate(['/login']);
                } else {
                  console.log('is aunthenticated');
                  return true;
                }
              } else {
                console.log('is not aunthenticated');
                return _this2.router.navigate(['/login']);
              }
            }));
          }
        }]);

        return AuthorizeGuard;
      }();

      _AuthorizeGuard.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _services_appcookie_service__WEBPACK_IMPORTED_MODULE_1__.AppCookieService
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
        }, {
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _AuthorizeGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
      })], _AuthorizeGuard);

      var _NegateAuthorizeGuard = /*#__PURE__*/function () {
        function NegateAuthorizeGuard(AuthorizeGuard, router) {
          _classCallCheck(this, NegateAuthorizeGuard);

          this.AuthorizeGuard = AuthorizeGuard;
          this.router = router;
        }

        _createClass(NegateAuthorizeGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var userNotAuth = !this.AuthorizeGuard.canActivate(next, state);

            if (userNotAuth) {
              console.log('user is not aunthenticated => proceed' + userNotAuth);
              return true;
            } else {
              console.log('user is aunthenticated...Redirecting');
              return this.router.navigate(['/main-screen']);
            }
          }
        }]);

        return NegateAuthorizeGuard;
      }();

      _NegateAuthorizeGuard.ctorParameters = function () {
        return [{
          type: _AuthorizeGuard
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _NegateAuthorizeGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)()], _NegateAuthorizeGuard);
      /***/
    },

    /***/
    85160: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "INTRO_KEY": function INTRO_KEY() {
          return (
            /* binding */
            _INTRO_KEY
          );
        },

        /* harmony export */
        "IntroGuard": function IntroGuard() {
          return (
            /* binding */
            _IntroGuard
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


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/storage.service */
      60010); //local storage


      var _INTRO_KEY = 'intro-seen';

      var _IntroGuard = /*#__PURE__*/function () {
        function IntroGuard(router, storageService) {
          _classCallCheck(this, IntroGuard);

          this.router = router;
          this.storageService = storageService;
        }

        _createClass(IntroGuard, [{
          key: "canLoad",
          value: function canLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var hasSeenIntro;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storageService.getData(_INTRO_KEY);

                    case 2:
                      hasSeenIntro = _context.sent;

                      if (!(hasSeenIntro.length > 0 && hasSeenIntro[0].value === 'true')) {
                        _context.next = 7;
                        break;
                      }

                      return _context.abrupt("return", true);

                    case 7:
                      this.router.navigateByUrl('/intro', {
                        replaceUrl: true
                      });
                      return _context.abrupt("return", false);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return IntroGuard;
      }();

      _IntroGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService
        }];
      };

      _IntroGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _IntroGuard);
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


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      267);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      32812);
      /* harmony import */


      var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/compat/firestore */
      42045);
      /* harmony import */


      var _token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./token.service */
      65987);

      var _AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(fireAuth, afs, router, loadingCtrl, toastr, tokenService) {
          var _this3 = this;

          _classCallCheck(this, AuthenticationService);

          this.fireAuth = fireAuth;
          this.afs = afs;
          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.toastr = toastr;
          this.tokenService = tokenService;
          this.AccessToken = "";
          this.user$ = this.fireAuth.authState.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (user) {
            if (user) {
              return _this3.afs.doc("users/".concat(user.uid)).valueChanges();
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
            }
          }));
        } // end of constructor


        _createClass(AuthenticationService, [{
          key: "login",
          value: function login(email, password) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Autenticando...',
                        spinner: 'crescent',
                        showBackdrop: true
                      });

                    case 2:
                      loading = _context3.sent;
                      loading.present();
                      this.fireAuth.signInWithEmailAndPassword(email, password).then(function (data) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this5 = this;

                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (data.user.emailVerified) {
                                    _context2.next = 6;
                                    break;
                                  }

                                  loading.dismiss();
                                  this.toast('Porfavor revisar tu correo!', 'danger');
                                  this.logout();
                                  _context2.next = 11;
                                  break;

                                case 6:
                                  _context2.next = 8;
                                  return this.fireAuth.currentUser;

                                case 8:
                                  _context2.sent.getIdToken().then(function (token) {
                                    return _this5.tokenService.setToken(token);
                                  });

                                  loading.dismiss();
                                  this.router.navigate(['/main-screen']);

                                case 11:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      })["catch"](function (error) {
                        console.log(error);
                        loading.dismiss();

                        _this4.toast(error.message, 'danger');
                      });

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // end of login

        }, {
          key: "isUserloggedIn",
          value: function isUserloggedIn() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.fireAuth.onAuthStateChanged(function (user) {
                        console.log('service:' + user);

                        if (user && user.uid) {
                          return true;
                        } else {
                          return false;
                        }
                      });

                    case 2:
                      return _context4.abrupt("return", false);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.fireAuth.signOut().then(function () {
                        _this6.router.navigate(['/login']);
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // end of logout

        }, {
          key: "toast",
          value: function toast(message, status) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastr.create({
                        message: message,
                        position: 'top',
                        color: status,
                        duration: 2000
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // end of toast

        }]);

        return AuthenticationService;
      }();

      _AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
        }, {
          type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService
        }];
      };

      _AuthenticationService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
      })], _AuthenticationService);
      /***/
    },

    /***/
    60010: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StorageService": function StorageService() {
          return (
            /* binding */
            _StorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage-angular */
      72604);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
          this.init();
        }

        _createClass(StorageService, [{
          key: "init",
          value: function init() {
            this.storage.create();
          }
        }, {
          key: "getData",
          value: function getData(theKey) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var status;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.storage.get(theKey);

                    case 2:
                      _context7.t0 = _context7.sent;

                      if (_context7.t0) {
                        _context7.next = 5;
                        break;
                      }

                      _context7.t0 = [];

                    case 5:
                      status = _context7.t0;
                      return _context7.abrupt("return", status);

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "addData",
          value: function addData(theItem, theKey) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var storedData;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.storage.get(theKey);

                    case 2:
                      _context8.t0 = _context8.sent;

                      if (_context8.t0) {
                        _context8.next = 5;
                        break;
                      }

                      _context8.t0 = [];

                    case 5:
                      storedData = _context8.t0;
                      storedData.push(theItem);
                      _context8.next = 9;
                      return this.storage.set(theKey, storedData);

                    case 9:
                      return _context8.abrupt("return", _context8.sent);

                    case 10:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return StorageService;
      }();

      _StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
        }];
      };

      _StorageService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _StorageService);
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


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _appcookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./appcookie.service */
      85559);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);

      var TOKEN_KEY = 'the-token';

      var _TokenService = /*#__PURE__*/function () {
        function TokenService(appCookie, fireAuth) {
          _classCallCheck(this, TokenService);

          this.appCookie = appCookie;
          this.fireAuth = fireAuth;
        }

        _createClass(TokenService, [{
          key: "setToken",
          value: function setToken(token) {
            this.appCookie.set(TOKEN_KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            this.appCookie.get(TOKEN_KEY);
          }
        }, {
          key: "isTokenExpired",
          value: function isTokenExpired() {
            var theToken = this.fireAuth.idToken;

            if (theToken) {
              return false;
            }

            return true;
          }
        }, {
          key: "isUserAuthenticated",
          value: function isUserAuthenticated() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var currentUser;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      currentUser = this.fireAuth.currentUser;
                      console.log(currentUser);

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return TokenService;
      }();

      _TokenService.ctorParameters = function () {
        return [{
          type: _appcookie_service__WEBPACK_IMPORTED_MODULE_0__.AppCookieService
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth
        }];
      };

      _TokenService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _TokenService);
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
        "alcanciaBackendUrl": function alcanciaBackendUrl() {
          return (
            /* binding */
            _alcanciaBackendUrl
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
      var _alcanciaBackendUrl = {
        url: ""
      };
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