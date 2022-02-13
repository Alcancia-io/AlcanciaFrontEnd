(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_swap_swap_module_ts"], {
    /***/
    87967: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Exchange": function Exchange() {
          return (
            /* binding */
            _Exchange
          );
        },

        /* harmony export */
        "ExchangeResult": function ExchangeResult() {
          return (
            /* binding */
            _ExchangeResult
          );
        }
        /* harmony export */

      });

      var _Exchange = function _Exchange() {
        _classCallCheck(this, _Exchange);
      };

      var _ExchangeResult = function _ExchangeResult() {
        _classCallCheck(this, _ExchangeResult);
      };
      /***/

    },

    /***/
    26843: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SwapPageRoutingModule": function SwapPageRoutingModule() {
          return (
            /* binding */
            _SwapPageRoutingModule
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


      var _swap_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./swap.page */
      83330);

      var routes = [{
        path: '',
        component: _swap_page__WEBPACK_IMPORTED_MODULE_0__.SwapPage
      }];

      var _SwapPageRoutingModule = function SwapPageRoutingModule() {
        _classCallCheck(this, SwapPageRoutingModule);
      };

      _SwapPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SwapPageRoutingModule);
      /***/
    },

    /***/
    17233: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SwapPageModule": function SwapPageModule() {
          return (
            /* binding */
            _SwapPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _swap_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./swap-routing.module */
      26843);
      /* harmony import */


      var src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/main-components.module */
      37597);
      /* harmony import */


      var _swap_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./swap.page */
      83330);

      var _SwapPageModule = function SwapPageModule() {
        _classCallCheck(this, SwapPageModule);
      };

      _SwapPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _swap_routing_module__WEBPACK_IMPORTED_MODULE_0__.SwapPageRoutingModule, src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_1__.MainComponentsModule],
        declarations: [_swap_page__WEBPACK_IMPORTED_MODULE_2__.SwapPage]
      })], _SwapPageModule);
      /***/
    },

    /***/
    83330: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SwapPage": function SwapPage() {
          return (
            /* binding */
            _SwapPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_swap_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./swap.page.html */
      7787);
      /* harmony import */


      var _swap_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./swap.page.scss */
      29724);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var src_app_services_paypal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/paypal.service */
      89902);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/paypalOrder */
      82636);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var src_app_services_exchange_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/exchange.service */
      65591);
      /* harmony import */


      var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/compat/firestore */
      42045);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);
      /* harmony import */


      var _models_exchange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../models/exchange */
      87967);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/user.service */
      11000);

      var _SwapPage = /*#__PURE__*/function () {
        function SwapPage(toastr, alertController, loadingController, PaypalService, router, exchangeService, firestore, fireAuth, userService) {
          _classCallCheck(this, SwapPage);

          this.toastr = toastr;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.PaypalService = PaypalService;
          this.router = router;
          this.exchangeService = exchangeService;
          this.firestore = firestore;
          this.fireAuth = fireAuth;
          this.userService = userService;
          this.ToCurrencyCode = "USD";
          this.ExchangeTotal = '0';
          this.Fee = .06;
          this.originAmout = '0';
        }

        _createClass(SwapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateUserSwapInteraction();
          }
        }, {
          key: "updateUserSwapInteraction",
          value: function updateUserSwapInteraction() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.userService.getUser().then(function (user) {
                        if (!user.swapScreenLoaded || user.swapScreenLoaded === false) {
                          _this.firestore.collection('users').doc(user.userId).update({
                            'swapScreenLoaded': true
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openInNewTab",
          value: function openInNewTab(href) {
            Object.assign(document.createElement('a'), {
              href: href
            }).click();
          }
        }, {
          key: "toast",
          value: function toast(message, status) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastr.create({
                        message: message,
                        position: 'top',
                        color: status,
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "backtoMenu",
          value: function backtoMenu() {
            this.router.navigate(['/']);
          }
        }, {
          key: "calculateExchange",
          value: function calculateExchange() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var exchange;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.Amount && this.FromCurrencyCode && this.ToCurrencyCode && this.FromCurrencyCode !== "BTC") {
                        exchange = new _models_exchange__WEBPACK_IMPORTED_MODULE_5__.Exchange();
                        exchange.FromCurrency = this.FromCurrencyCode;
                        exchange.ToCurrency = this.ToCurrencyCode;
                        this.exchangeService.exchangeCurrency(exchange).then(function (response) {
                          var result = _this2.Amount * response.conversion_rate;
                          _this2.originAmout = result.toString();
                          var withFee = result * _this2.Fee;
                          var finalResult = Number.parseFloat(result.toString()).toFixed(2);
                          _this2.ExchangeTotal = finalResult.toString();
                        })["catch"](function (error) {
                          console.log(error);
                        });
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "createPaypalOrder",
          value: function createPaypalOrder() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading, newPaypalOrder;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.Amount && this.FromCurrencyCode !== "BTC" && this.ToCurrencyCode === "USD" && this.ExchangeTotal !== '0')) {
                        _context4.next = 16;
                        break;
                      }

                      _context4.next = 3;
                      return this.loadingController.create({
                        message: 'Realizando Deposito!',
                        spinner: 'crescent',
                        showBackdrop: true
                      });

                    case 3:
                      loading = _context4.sent;
                      loading.present();
                      newPaypalOrder = new src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_3__.CreateOrder();
                      newPaypalOrder.amount = Number.parseFloat(this.originAmout.toString()).toFixed(2);
                      console.log(newPaypalOrder.amount);
                      newPaypalOrder.currency_code = this.ToCurrencyCode;
                      this.router.navigate(['/nav/paypalpaymentoptions'], {
                        state: {
                          data: {
                            newPaypalOrder: newPaypalOrder
                          }
                        }
                      });
                      this.Amount = 0;
                      this.FromCurrencyCode = '';
                      this.ExchangeTotal = '';
                      loading.dismiss();
                      _context4.next = 17;
                      break;

                    case 16:
                      if (this.Amount && this.FromCurrencyCode === "BTC" && this.ToCurrencyCode) {
                        this.router.navigate(['/bitcoin-deposit'], {
                          replaceUrl: true
                        });
                      } else {
                        this.toast('Porfavor seleccionar el tipo de moneda y el monto', 'danger');
                      }

                    case 17:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return SwapPage;
      }();

      _SwapPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }, {
          type: src_app_services_paypal_service__WEBPACK_IMPORTED_MODULE_2__.PaypalService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_exchange_service__WEBPACK_IMPORTED_MODULE_4__.ExchangeService
        }, {
          type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
        }];
      };

      _SwapPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-swap',
        template: _raw_loader_swap_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_swap_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SwapPage);
      /***/
    },

    /***/
    15754: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExchangeRepository": function ExchangeRepository() {
          return (
            /* binding */
            _ExchangeRepository
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      31887);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      24766);

      var _ExchangeRepository = /*#__PURE__*/function () {
        function ExchangeRepository(httpClientModule) {
          _classCallCheck(this, ExchangeRepository);

          this.httpClientModule = httpClientModule;
        }

        _createClass(ExchangeRepository, [{
          key: "exchangeCurrency",
          value: function exchangeCurrency(theExchangeValue) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", new Promise(function (resolver) {
                        var subscription;
                        subscription = _this3.httpClientModule.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.EXCHANGE_RATE_URL + "/pair/".concat(theExchangeValue.FromCurrency, "/").concat(theExchangeValue.ToCurrency)).subscribe(function (reponse) {
                          if (subscription) {
                            subscription.unsubscribe();
                          }

                          resolver(Object.assign(reponse));
                          return reponse;
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

        return ExchangeRepository;
      }();

      _ExchangeRepository.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _ExchangeRepository = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _ExchangeRepository);
      /***/
    },

    /***/
    65591: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExchangeService": function ExchangeService() {
          return (
            /* binding */
            _ExchangeService
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


      var _repository_exchange_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../repository/exchange.repository */
      15754);

      var _ExchangeService = /*#__PURE__*/function () {
        function ExchangeService(exchangeRepository) {
          _classCallCheck(this, ExchangeService);

          this.exchangeRepository = exchangeRepository;
        }

        _createClass(ExchangeService, [{
          key: "exchangeCurrency",
          value: function exchangeCurrency(theExchangeCurrency) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.exchangeRepository.exchangeCurrency(theExchangeCurrency);

                    case 2:
                      return _context6.abrupt("return", _context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return ExchangeService;
      }();

      _ExchangeService.ctorParameters = function () {
        return [{
          type: _repository_exchange_repository__WEBPACK_IMPORTED_MODULE_0__.ExchangeRepository
        }];
      };

      _ExchangeService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _ExchangeService);
      /***/
    },

    /***/
    29724: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  width: 50%;\n  left: 25%;\n}\n\nion-button {\n  --background:#FEDC56;\n}\n\n.welcome-msg {\n  padding-left: 5%;\n  font-size: 38px;\n}\n\n.inputs-section {\n  text-align: right;\n  margin-left: 60%;\n  width: 41%;\n  margin-top: 3%;\n}\n\n.box-shadow {\n  width: 96.5%;\n  height: 36%;\n  background: linear-gradient(#1B2A62, #355BC4);\n  border-radius: 25px;\n  left: 10px;\n  position: absolute;\n  filter: blur(0.1px);\n}\n\n.ion-card-body {\n  text-align: left;\n  border-radius: 25px;\n  --background: #171622;\n  height: 50%;\n}\n\n.ion-card-content {\n  height: 75px;\n  border-radius: 25px;\n  --background: #171622;\n  border: 2px solid #3453C3;\n  margin: -10px 10px;\n}\n\n.dropdown-content {\n  color: #FFFF;\n  font-weight: 800;\n  width: 25%;\n}\n\n.card-tittle p {\n  color: #FFF;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  font-size: 18px;\n}\n\nspan {\n  float: right;\n}\n\n.backMainMenuBtn {\n  --background: #3453C3;\n}\n\n.backarrow {\n  height: 100px;\n}\n\n.convert-btn {\n  color: #FFFF;\n  --background: linear-gradient(#355BC4, #1B2A62);\n  float: right;\n  padding-right: 5%;\n}\n\n.whattodo-btn {\n  color: #FFF;\n  --background: none;\n}\n\n.whattodo-btn p {\n  border-bottom: 1px solid #FFFF;\n}\n\n.elipse-arrow {\n  z-index: 1;\n  position: relative;\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  background-color: #3554C4;\n  left: 50%;\n}\n\nion-icon {\n  color: #FFFF;\n  padding-top: 15%;\n  padding-left: 16%;\n}\n\nion-select {\n  display: flex;\n  width: 18%;\n  justify-content: center;\n  border-radius: 15px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: #3554C4;\n  left: 5%;\n  top: 20.5%;\n}\n\n.currency-value {\n  position: relative;\n  color: #ffff;\n  font-size: 24px;\n  padding-right: 15%;\n  top: -49%;\n}\n\nion-select::part(icon) {\n  color: #ffff;\n  opacity: 1;\n}\n\n@media only screen and (max-width: 960px) {\n  ion-content {\n    width: 80%;\n    left: 10%;\n  }\n\n  .box-shadow {\n    width: 95%;\n    height: 33%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    position: absolute;\n    left: 3%;\n    filter: blur(0.1px);\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  ion-content {\n    width: 80%;\n    left: 10%;\n  }\n\n  .dropdown-content {\n    width: 100px;\n  }\n\n  .box-shadow {\n    width: 91%;\n    height: 35.5%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    position: absolute;\n    left: 1.5%;\n    margin-top: 5px;\n  }\n\n  .inputs-section {\n    margin-left: 166px;\n    width: 34%;\n    margin-top: 3%;\n  }\n}\n\n@media only screen and (max-width: 412px) {\n  ion-content {\n    width: 80%;\n    left: 10%;\n  }\n\n  .dropdown-content {\n    width: 100px;\n  }\n\n  .inputs-section {\n    width: 100px;\n    margin-left: 35px;\n  }\n\n  .box-shadow {\n    width: 95%;\n    height: 33.5%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    position: absolute;\n    left: 1.5%;\n    margin-top: 5px;\n  }\n\n  .inputs-section {\n    margin-left: 220px;\n    width: 20%;\n    margin-top: 3%;\n  }\n\n  .whattodo-btn {\n    margin-top: 30px;\n  }\n\n  .backMainMenuBtn {\n    margin-top: -25px;\n  }\n\n  .inputs-section {\n    margin-left: 185.5px;\n    width: 20%;\n    margin-top: 3%;\n  }\n\n  .welcome-msg {\n    padding-left: 5%;\n    font-size: 34px;\n    margin-bottom: 64px;\n  }\n}\n\n@media only screen and (max-width: 393px) {\n  ion-content {\n    width: 80%;\n    left: 10%;\n  }\n\n  .dropdown-content {\n    width: 100px;\n  }\n\n  .inputs-section {\n    margin-left: 192.5px;\n    width: 20%;\n    margin-top: 3%;\n  }\n\n  .box-shadow {\n    width: 93.5%;\n    height: 36%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    position: absolute;\n    left: 3%;\n  }\n}\n\n@media only screen and (max-width: 390px) {\n  ion-content {\n    width: 80%;\n    left: 10%;\n  }\n\n  .dropdown-content {\n    width: 100px;\n  }\n\n  .box-shadow {\n    width: 89%;\n    height: 41%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    position: absolute;\n    left: 3%;\n    margin-top: 5px;\n  }\n\n  .inputs-section {\n    margin-left: 140px;\n    width: 41%;\n    margin-top: 3%;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  ion-content {\n    width: 80%;\n    left: 10%;\n  }\n\n  .dropdown-content {\n    width: 100px;\n  }\n\n  .box-shadow {\n    width: 88.5%;\n    height: 53%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    position: absolute;\n    left: 3%;\n    margin-top: -16px;\n  }\n\n  .welcome-msg {\n    padding-left: 5%;\n    font-size: 34px;\n  }\n\n  .inputs-section {\n    margin-left: 141.5px;\n    width: 36%;\n    margin-top: 3%;\n  }\n\n  .ion-card-body {\n    margin-top: -20px;\n  }\n\n  .whattodo-btn {\n    margin-top: -30px;\n  }\n\n  .backMainMenuBtn {\n    margin-top: -125px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  ion-content {\n    width: 80%;\n    left: 10%;\n  }\n\n  .dropdown-content {\n    width: 100px;\n  }\n\n  .inputs-section {\n    width: 100px;\n    margin-left: 35px;\n  }\n\n  .box-shadow {\n    width: 92.5%;\n    height: 46%;\n    background: linear-gradient(#1B2A62, #355BC4);\n    border-radius: 25px;\n    position: absolute;\n    left: 3%;\n  }\n\n  .whattodo-btn {\n    margin-top: 30px;\n  }\n\n  .backMainMenuBtn {\n    margin-top: -25px;\n  }\n\n  .inputs-section {\n    margin-left: 185.5px;\n    width: 20%;\n    margin-top: 3%;\n  }\n\n  .welcome-msg {\n    padding-left: 5%;\n    font-size: 34px;\n    margin-bottom: 64px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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Q0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7RUFITjtBQUNGOztBQU9BO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsU0FBQTtFQUxOOztFQVFFO0lBQ0ksWUFBQTtFQUxOOztFQU9FO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSw2Q0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtFQUpOOztFQU9FO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQUpOO0FBQ0Y7O0FBT0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxTQUFBO0VBTE47O0VBUUU7SUFDSSxZQUFBO0VBTE47O0VBUUU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLDZDQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtFQUxOOztFQVNFO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0VBTk47O0VBU0U7SUFDSSxvQkFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBTk47O0VBU0U7SUFDSSxpQkFBQTtFQU5OOztFQVNFO0lBQ0ksaUJBQUE7RUFOTjs7RUFTRTtJQUNJLGtCQUFBO0VBTk47QUFDRjs7QUFXQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFNBQUE7RUFUTjs7RUFZRTtJQUNJLFlBQUE7RUFUTjs7RUFXRTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtFQVJOOztFQVdFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSw2Q0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VBUk47O0VBV0U7SUFDSSxnQkFBQTtFQVJOOztFQVdFO0lBQ0ksaUJBQUE7RUFSTjs7RUFXRTtJQUNJLG9CQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFSTjs7RUFVRTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBUE47QUFDRiIsImZpbGUiOiJzd2FwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50eyBcbiAgICB3aWR0aDogNTAlO1xuICAgIGxlZnQ6IDI1JTsgIFxufVxuXG5pb24tYnV0dG9ueyBcbiAgICAtLWJhY2tncm91bmQ6I0ZFREM1Njtcbn1cblxuLndlbGNvbWUtbXNne1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAzOHB4O1xufVxuXG4uaW5wdXRzLXNlY3Rpb257XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgICB3aWR0aDogNDElO1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uYm94LXNoYWRvd3sgXG4gICAgd2lkdGg6IDk2LjUlO1xuICAgIGhlaWdodDogMzYlO1xuICAgIGJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQoIzFCMkE2MiwgIzM1NUJDNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxuICAgIGZpbHRlcjogYmx1cigwLjFweCk7XG59XG5cbi5pb24tY2FyZC1ib2R5eyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTcxNjIyO1xuICAgIGhlaWdodDogNTAlO1xuICAgIC8vIGJveC1zaGFkb3c6IDhweCA4cHggICMxQjJBNjI7XG59IFxuXG4gXG4uaW9uLWNhcmQtY29udGVudHsgXG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7IFxuICAgIC0tYmFja2dyb3VuZDogIzE3MTYyMjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzQ1M0MzO1xuICAgIG1hcmdpbjogLTEwcHggMTBweDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnR7XG4gICAgY29sb3I6ICNGRkZGO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLmNhcmQtdGl0dGxlIHB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBzb2xpZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbnNwYW57XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYmFja01haW5NZW51QnRue1xuICAgIC0tYmFja2dyb3VuZDogIzM0NTNDMztcbn1cblxuLmJhY2thcnJvd3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uY29udmVydC1idG57IFxuICAgIGNvbG9yOiAjRkZGRjtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMzU1QkM0LCAjMUIyQTYyKTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNSU7IFxufVxuXG4ud2hhdHRvZG8tYnRue1xuICAgIGNvbG9yOiAjRkZGOyBcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG4ud2hhdHRvZG8tYnRuIHAgeyBcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRkY7IFxufVxuIFxuLmVsaXBzZS1hcnJvd3sgICBcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU1NEM0OyAgICBcbiAgICBsZWZ0OiA1MCU7IFxuICB9IFxuXG4gIGlvbi1pY29ue1xuICAgICAgY29sb3I6ICNGRkZGO1xuICAgICAgcGFkZGluZy10b3A6IDE1JTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTYlO1xuICB9XG5pb24tc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxOCU7ICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NTRDNDtcbiAgICBsZWZ0OiA1JTtcbiAgICB0b3A6IDIwLjUlO1xufSAgXG5cbi5jdXJyZW5jeS12YWx1ZXsgICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjZmZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTUlOyBcbiAgICB0b3A6IC00OSU7IFxuICAgIFxufVxuIFxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgaW9uLWNvbnRlbnR7IFxuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBsZWZ0OiAxMCU7XG4gICAgfVxuXG4gICAgLmJveC1zaGFkb3d7IFxuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBoZWlnaHQ6IDMzJTtcbiAgICAgICAgYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgjMUIyQTYyLCAjMzU1QkM0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgbGVmdDogMyU7IFxuICAgICAgICBmaWx0ZXI6IGJsdXIoMC4xcHgpO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIGlvbi1jb250ZW50eyBcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbGVmdDogMTAlO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1jb250ZW50e1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfSBcblxuICAgIC5ib3gtc2hhZG93eyBcbiAgICAgICAgd2lkdGg6IDkxJTtcbiAgICAgICAgaGVpZ2h0OiAzNS41JTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxQjJBNjIsICMzNTVCQzQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEuNSU7IFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbiAgICAgICBcbiAgICB9XG5cbiAgICAuaW5wdXRzLXNlY3Rpb257XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNjZweDtcbiAgICAgICAgd2lkdGg6IDM0JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMnB4KSB7XG4gICAgaW9uLWNvbnRlbnR7IFxuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBsZWZ0OiAxMCU7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWNvbnRlbnR7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgLmlucHV0cy1zZWN0aW9ue1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgIH1cblxuICAgIC5ib3gtc2hhZG93eyBcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgaGVpZ2h0OiAzMy41JTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxQjJBNjIsICMzNTVCQzQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEuNSU7IFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7IFxuICAgIH1cblxuICAgIC5pbnB1dHMtc2VjdGlvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICB9XG5cbiAgICAud2hhdHRvZG8tYnRue1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cblxuICAgIC5iYWNrTWFpbk1lbnVCdG57XG4gICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgIH1cblxuICAgIC5pbnB1dHMtc2VjdGlvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4NS41cHg7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIH1cbiAgICAud2VsY29tZS1tc2cge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5M3B4KSB7XG4gICAgaW9uLWNvbnRlbnR7IFxuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBsZWZ0OiAxMCU7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWNvbnRlbnR7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgLmlucHV0cy1zZWN0aW9ue1xuICAgICAgICBtYXJnaW4tbGVmdDogMTkyLjVweDtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgfVxuXG4gICAgLmJveC1zaGFkb3d7IFxuICAgICAgICB3aWR0aDogOTMuNSU7XG4gICAgICAgIGhlaWdodDogMzYlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzFCMkE2MiwgIzM1NUJDNCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMyU7XG4gICAgfSBcbiBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xuICAgIGlvbi1jb250ZW50eyBcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbGVmdDogMTAlO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1jb250ZW50e1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfSBcbiAgICAuYm94LXNoYWRvd3sgXG4gICAgICAgIHdpZHRoOiA4OSU7XG4gICAgICAgIGhlaWdodDogNDElO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzFCMkE2MiwgIzM1NUJDNCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMyU7IFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuXG4gICAgLmlucHV0cy1zZWN0aW9ue1xuICAgICAgICBtYXJnaW4tbGVmdDogMTQwcHg7XG4gICAgICAgIHdpZHRoOiA0MSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgIGlvbi1jb250ZW50eyBcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbGVmdDogMTAlO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1jb250ZW50e1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfSBcblxuICAgIC5ib3gtc2hhZG93eyBcbiAgICAgICAgd2lkdGg6IDg4LjUlO1xuICAgICAgICBoZWlnaHQ6IDUzJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxQjJBNjIsICMzNTVCQzQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDMlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgIFxuICAgIH1cblxuICAgIC53ZWxjb21lLW1zZyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICB9XG5cbiAgICAuaW5wdXRzLXNlY3Rpb257XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNDEuNXB4O1xuICAgICAgICB3aWR0aDogMzYlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICB9XG5cbiAgICAuaW9uLWNhcmQtYm9keXtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgfVxuXG4gICAgLndoYXR0b2RvLWJ0bntcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgfVxuXG4gICAgLmJhY2tNYWluTWVudUJ0bntcbiAgICAgICAgbWFyZ2luLXRvcDogLTEyNXB4O1xuICAgIH1cbiBcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgaW9uLWNvbnRlbnR7IFxuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBsZWZ0OiAxMCU7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWNvbnRlbnR7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgLmlucHV0cy1zZWN0aW9ue1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgIH1cbiBcbiAgICAuYm94LXNoYWRvd3sgXG4gICAgICAgIHdpZHRoOiA5Mi41JTtcbiAgICAgICAgaGVpZ2h0OiA0NiU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMUIyQTYyLCAjMzU1QkM0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAzJTtcbiAgICB9ICBcblxuICAgIC53aGF0dG9kby1idG57XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuXG4gICAgLmJhY2tNYWluTWVudUJ0bntcbiAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgfVxuXG4gICAgLmlucHV0cy1zZWN0aW9ue1xuICAgICAgICBtYXJnaW4tbGVmdDogMTg1LjVweDtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgfVxuICAgIC53ZWxjb21lLW1zZyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICB9XG5cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    7787: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app> \n  <ion-header  no-border>\n    <app-top-navigation-toolbar></app-top-navigation-toolbar>\n  </ion-header>\n  <ion-content> \n    <p class=\"welcome-msg\">¡Empecemos!</p> \n    <ion-card class=\"box-shadow\">\n      <ion-card-content></ion-card-content>\n    </ion-card>\n    <ion-card class=\"ion-card-body\"> \n      <ion-card-content>\n        <div class=\"card-tittle\">\n          <p>¿Cuánto deseas convertir hoy?</p>\n        </div>   \n      </ion-card-content> \n        <div class=\"form-content\">\n          <ion-card class=\"ion-card-content\"  >\n            <ion-select class=\"dropdown-content\"  value=\"brown\" okText=\"Okay\" cancelText=\"Cancelar\" [(ngModel)]=\"FromCurrencyCode\" (ionChange)=\"calculateExchange();\">\n              <ion-select-option value=\"MXN\">$MXN 🇲🇽</ion-select-option>  \n              <ion-select-option value=\"DOP\">$DOP 🇩🇴</ion-select-option>  \n              <!-- <ion-select-option value=\"BTC\">$BTC ₿</ion-select-option>  -->\n            </ion-select>  \n            <span class=\"currency-value\" ><ion-input class=\"inputs-section\" position=\"floating\" placeholder=\"0\" type=\"text\"  [(ngModel)]=\"Amount\" (ionChange)=\"calculateExchange();\" ></ion-input></span>   \n          </ion-card>     \n        </div>\n            \n       <div class=\"elipse-arrow\"><ion-icon name=\"arrow-down-outline\"></ion-icon></div> \n     \n     <ion-card class=\"ion-card-content\">\n      <ion-select class=\"dropdown-content\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" [(ngModel)]=\"ToCurrencyCode\" (ionChange)=\"calculateExchange();\">\n        <ion-select-option value=\"USD\" [selected]=\"ToCurrencyCode\" >$USDT</ion-select-option>\n      </ion-select>  <br/>\n      <span class=\"currency-value\">{{ExchangeTotal}}</span>   \n     </ion-card>\n               \n            <br/>\n            <br/>\n        <ion-button class=\"convert-btn\" type=\"submit\" (click)=\"createPaypalOrder()\" shape=\"round\">Convertir</ion-button>\n        <br>\n        <br>  \n        <br>  \n        <br>  \n    </ion-card>\n    <br/>\n    <ion-button fill=\"clear\" class=\"whattodo-btn\"><p>¿Qué me toca hacer aca?</p></ion-button>\n    <br/>\n    <br/>\n    <br/>\n    <br/>\n    <br/>\n    <br/>\n    <ion-button class=\"backMainMenuBtn\" shape=\"round\" (click)=\"backtoMenu()\" >Cancelar</ion-button>\n  </ion-content>\n \n</ion-app>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_swap_swap_module_ts-es5.js.map