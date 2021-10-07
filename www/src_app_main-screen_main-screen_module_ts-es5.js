(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_main-screen_main-screen_module_ts"], {
    /***/
    37424: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainScreenPageRoutingModule": function MainScreenPageRoutingModule() {
          return (
            /* binding */
            _MainScreenPageRoutingModule
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


      var _main_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main-screen.page */
      58762);

      var routes = [{
        path: '',
        component: _main_screen_page__WEBPACK_IMPORTED_MODULE_0__.MainScreenPage
      }];

      var _MainScreenPageRoutingModule = function MainScreenPageRoutingModule() {
        _classCallCheck(this, MainScreenPageRoutingModule);
      };

      _MainScreenPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MainScreenPageRoutingModule);
      /***/
    },

    /***/
    57226: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainScreenPageModule": function MainScreenPageModule() {
          return (
            /* binding */
            _MainScreenPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main-screen-routing.module */
      37424);
      /* harmony import */


      var _main_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main-screen.page */
      58762);

      var _MainScreenPageModule = function MainScreenPageModule() {
        _classCallCheck(this, MainScreenPageModule);
      };

      _MainScreenPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainScreenPageRoutingModule],
        declarations: [_main_screen_page__WEBPACK_IMPORTED_MODULE_1__.MainScreenPage]
      })], _MainScreenPageModule);
      /***/
    },

    /***/
    58762: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainScreenPage": function MainScreenPage() {
          return (
            /* binding */
            _MainScreenPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./main-screen.page.html */
      45281);
      /* harmony import */


      var _main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main-screen.page.scss */
      71542);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication.service */
      9356);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/storage.service */
      60010);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/user.service */
      11000);
      /* harmony import */


      var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/guards/auth.guard */
      47316);

      var _MainScreenPage = /*#__PURE__*/function () {
        function MainScreenPage(authService, storageService, router, userService) {
          _classCallCheck(this, MainScreenPage);

          this.authService = authService;
          this.storageService = storageService;
          this.router = router;
          this.userService = userService;
        }

        _createClass(MainScreenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserName();
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var username;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storageService.getData(src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.USER_NAME);

                    case 2:
                      username = _context.sent;

                      if (username.length > 0 && username[0]) {
                        this.aUsername = username[0].value;
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.authService.logout();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.userService.getUser().then(function (data) {
                        return console.log('user data from the Main-screen' + data);
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return MainScreenPage;
      }();

      _MainScreenPage.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }];
      };

      _MainScreenPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-main-screen',
        template: _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MainScreenPage);
      /***/
    },

    /***/
    71542: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".welcome-msg {\n  text-align: left;\n}\n\n.general-msg {\n  text-align: left;\n  font-size: large;\n}\n\n.small-msg {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUVBLGdCQUFBO0FBTkY7O0FBUUE7RUFDRSxlQUFBO0FBTEYiLCJmaWxlIjoibWFpbi1zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXJvd3tcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIG1hcmdpbjogYXV0bztcbi8vICAgd2lkdGg6IDUwJTtcbi8vIH1cblxuLndlbGNvbWUtbXNne1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZ2VuZXJhbC1tc2d7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5zbWFsbC1tc2d7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    45281: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\" >\n  \n    <img src=\"/assets/taxi-robot.png\" alt=\"taxi-money-care\" >\n    <ion-card-header>\n      <ion-card-title>Hola<b *ngIf=\"!aUsername\" >,</b> <b *ngIf=\"aUsername\"> {{aUsername}},</b></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      ¡Gracias por registrarte a Alcancía! \n      <br>\n      <br>\n      Juntos cambiaremos la forma en la que ahorramos en Latinoamérica.\n      <br>\n      <br>\n      ¡Pronto nos pondremos en contacto contigo!\n     <br>\n     <br>\n     <br>\n     <br>\n    </ion-card-content> \n    <!-- <ion-button  (click)=\"getUser()\">get user</ion-button>  -->\n<!--\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <div>\n              <h2 class=\"welcome-msg\">Hola <b>{{aUsername}}</b><br> </h2>\n            </div>\n            <div class=\"image\">\n\n            </div>\n          </ion-card-header>\n          <ion-card-content>\n            <div class=\"general-msg\">\n\n            </div>\n        </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>-->\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_main-screen_main-screen_module_ts-es5.js.map