(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_intro_intro_module_ts"], {
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
                      return _context.abrupt("return", this.router.navigate['/login']);

                    case 8:
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
    56426: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IntroPageRoutingModule": function IntroPageRoutingModule() {
          return (
            /* binding */
            _IntroPageRoutingModule
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


      var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./intro.page */
      41954);

      var routes = [{
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
      }];

      var _IntroPageRoutingModule = function IntroPageRoutingModule() {
        _classCallCheck(this, IntroPageRoutingModule);
      };

      _IntroPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _IntroPageRoutingModule);
      /***/
    },

    /***/
    16104: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IntroPageModule": function IntroPageModule() {
          return (
            /* binding */
            _IntroPageModule
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


      var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./intro-routing.module */
      56426);
      /* harmony import */


      var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./intro.page */
      41954);

      var _IntroPageModule = function IntroPageModule() {
        _classCallCheck(this, IntroPageModule);
      };

      _IntroPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroPageRoutingModule],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_1__.IntroPage]
      })], _IntroPageModule);
      /***/
    },

    /***/
    41954: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IntroPage": function IntroPage() {
          return (
            /* binding */
            _IntroPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./intro.page.html */
      82698);
      /* harmony import */


      var _intro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./intro.page.scss */
      37282);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/guards/intro.guard */
      85160);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/storage.service */
      60010);

      var _IntroPage = /*#__PURE__*/function () {
        function IntroPage(router, storageService) {
          _classCallCheck(this, IntroPage);

          this.router = router;
          this.storageService = storageService;
        }

        _createClass(IntroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "next",
          value: function next() {
            this.slides.slideNext();
          }
        }, {
          key: "start",
          value: function start() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storageService.addData({
                        key: src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__.INTRO_KEY,
                        value: 'true'
                      }, src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__.INTRO_KEY);

                    case 2:
                      this.router.navigateByUrl('/signup', {
                        replaceUrl: true
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return IntroPage;
      }();

      _IntroPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
        }];
      };

      _IntroPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides]
        }]
      };
      _IntroPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-intro',
        template: _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _IntroPage);
      /***/
    },

    /***/
    37282: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".heading {\n  margin-top: 10vh;\n  text-align: center;\n}\n.heading h1 {\n  font-size: 48px;\n  text-align: left;\n  padding-left: 5%;\n  margin-bottom: 30%;\n}\n.heading p {\n  font-size: 1em;\n  color: #707070;\n  padding-top: 3px;\n  margin: 6px;\n  padding-left: 7.5%;\n  text-align: left;\n}\nsmall {\n  font-size: 16px;\n  color: #959595;\n  margin-left: 5%;\n  float: left;\n}\n.start-now {\n  margin-top: 45%;\n  text-align: center;\n}\n.start-now ion-button {\n  width: 85%;\n  height: 50px;\n  --background: #3554C4;\n}\n.start-now .start-now-btn {\n  text-transform: none;\n  font-size: 20px;\n  height: 65px;\n  border-radius: 10px;\n}\n@media only screen and (min-width: 960px) {\n  .heading h1 {\n    font-size: 1.5em;\n    text-align: center;\n  }\n  .heading p {\n    font-size: 1em;\n    color: #707070;\n    padding-top: 3px;\n    margin: 6px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNOO0FBRUk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZGO0FBT0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1FO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUpKO0FBT0U7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVNBO0VBR0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBUkY7RUFXQTtJQUNFLGNBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFURjtBQUNGIiwiZmlsZSI6ImludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ne1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaDF7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwJTtcbiAgICB9XG5cbiAgICBwe1xuICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgbWFyZ2luOiA2cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDcuNSU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxufVxuXG5zbWFsbHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzk1OTU5NTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuXG5cbi5zdGFydC1ub3d7XG4gIG1hcmdpbi10b3A6IDQ1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDg1JTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMzU1NEM0O1xuICB9XG5cbiAgLnN0YXJ0LW5vdy1idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcblxuLmhlYWRpbmd7XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgcHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBtYXJnaW46IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxufVxuIl19 */";
      /***/
    },

    /***/
    82698: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"heading\">\n    <h1>Creemos que ahorrar es\n      esencial para una buena vida</h1>\n  </div>\n  <div>\n    <small>\n      Somos la nueva forma de ahorrar. \n    </small>\n    <br/>\n    <br/>\n    <small>\n      Con la misión de empoderar \n      económicamente<br/>  a los latinoaméricanos mediante el ahorro proactivo.<br/><br/>\n    </small>\n    \n    <br/>\n    <br/>\n    <small>\n      ¿Te nos unes a esta causa?\n    </small> \n  </div>\n  <div class=\"start-now\">\n    <ion-button class=\"start-now-btn\" (click)=\"start()\">Quiero empezar a ahorrar</ion-button>\n  </div>\n</ion-content>\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_intro_intro_module_ts-es5.js.map