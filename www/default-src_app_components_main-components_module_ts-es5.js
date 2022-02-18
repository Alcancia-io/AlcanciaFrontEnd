(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["default-src_app_components_main-components_module_ts"], {
    /***/
    37597: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponentsModule": function MainComponentsModule() {
          return (
            /* binding */
            _MainComponentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _navigation_toolbar_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./navigation-toolbar/navigation-toolbar.component */
      41264);
      /* harmony import */


      var _top_navigation_toolbar_top_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./top-navigation-toolbar/top-navigation-toolbar.component */
      65351);
      /* harmony import */


      var _successfull_successfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./successfull/successfull */
      41709);
      /* harmony import */


      var _paypal_paypalPaymentOptions_paypalPaymentOptions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./paypal/paypalPaymentOptions/paypalPaymentOptions.component */
      79308);

      var _MainComponentsModule = function MainComponentsModule() {
        _classCallCheck(this, MainComponentsModule);
      };

      _MainComponentsModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule],
        declarations: [_navigation_toolbar_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.NavigationToolbarComponent, _top_navigation_toolbar_top_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.TopNavigationToolbarComponent, _successfull_successfull__WEBPACK_IMPORTED_MODULE_2__.SuccessfullComponent, _paypal_paypalPaymentOptions_paypalPaymentOptions_component__WEBPACK_IMPORTED_MODULE_3__.PaypalPaymentOptionsComponent],
        exports: [_navigation_toolbar_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.NavigationToolbarComponent, _top_navigation_toolbar_top_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.TopNavigationToolbarComponent, _successfull_successfull__WEBPACK_IMPORTED_MODULE_2__.SuccessfullComponent, _paypal_paypalPaymentOptions_paypalPaymentOptions_component__WEBPACK_IMPORTED_MODULE_3__.PaypalPaymentOptionsComponent]
      })], _MainComponentsModule);
      /***/
    },

    /***/
    41264: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavigationToolbarComponent": function NavigationToolbarComponent() {
          return (
            /* binding */
            _NavigationToolbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_navigation_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./navigation-toolbar.component.html */
      43508);
      /* harmony import */


      var _navigation_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navigation-toolbar.component.scss */
      18902);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _NavigationToolbarComponent = /*#__PURE__*/function () {
        function NavigationToolbarComponent() {
          _classCallCheck(this, NavigationToolbarComponent);
        }

        _createClass(NavigationToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavigationToolbarComponent;
      }();

      _NavigationToolbarComponent.ctorParameters = function () {
        return [];
      };

      _NavigationToolbarComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-navigation-toolbar',
        template: _raw_loader_navigation_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_navigation_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NavigationToolbarComponent);
      /***/
    },

    /***/
    79308: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaypalPaymentOptionsComponent": function PaypalPaymentOptionsComponent() {
          return (
            /* binding */
            _PaypalPaymentOptionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_paypalPaymentOptions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./paypalPaymentOptions.component.html */
      66524);
      /* harmony import */


      var _paypalPaymentOptions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./paypalPaymentOptions.component.scss */
      8256);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _ionic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/core */
      39519);
      /* harmony import */


      var src_app_services_paypal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/paypal.service */
      89902);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../models/paypalOrder */
      82636);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      24766);
      /* harmony import */


      var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/token.service */
      65987);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      31887);

      var _PaypalPaymentOptionsComponent = /*#__PURE__*/function () {
        function PaypalPaymentOptionsComponent(paypalService, router, toastr, tokenService, httpClientModule) {
          _classCallCheck(this, PaypalPaymentOptionsComponent);

          this.paypalService = paypalService;
          this.router = router;
          this.toastr = toastr;
          this.tokenService = tokenService;
          this.httpClientModule = httpClientModule;
          this.amount = '';
          this.paidFor = false;
          this.product = {
            price: this.amount,
            description: 'Alcancia Service',
            img: '../../../../assets/Alcancía White.png'
          };
        }

        _createClass(PaypalPaymentOptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            paypal.Buttons({
              createOrder: function createOrder(data, actions) {
                var createorder = new src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_4__.CreateOrder();
                createorder.amount = _this.amount; // return this.paypalService.createOrder(createorder).then(resp => {
                //   return resp.json();
                // }).then(function(orderData){
                //   return orderData.id;
                // });

                var token = _this.tokenService.getToken();

                return fetch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.ALCANCIA_SERVER_URL, "/deposits/create-order"), {
                  method: 'POST',
                  body: JSON.stringify(createorder),
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                  }
                }).then(function (res) {
                  console.log(res.status);
                  return res.json();
                }).then(function (orderData) {
                  return orderData.id;
                }); // const orderDetails = actions.order.create({
                //   purchase_units: [
                //     {
                //       description: this.product.description,
                //       amount: {
                //         currency_code: 'USD',
                //         value: this.amount
                //       }
                //     }
                //   ]
                // }); 
                // 
              },
              onApprove: function onApprove(data, orderDetails) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this2 = this;

                  var loading, Promise1;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _ionic_core__WEBPACK_IMPORTED_MODULE_2__.loadingController.create({
                            message: 'Realizando Deposito',
                            spinner: 'crescent',
                            showBackdrop: true
                          });

                        case 2:
                          loading = _context.sent;
                          loading.present();
                          this.orderToken = new src_app_models_paypalOrder__WEBPACK_IMPORTED_MODULE_4__.ConfirmOrder();
                          this.orderToken.orderToken = data.orderID;
                          Promise1 = new Promise(function (resolver) {
                            _this2.httpClientModule.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.ALCANCIA_SERVER_URL + '/deposits/execute-order', _this2.orderToken).subscribe(function (response) {
                              resolver(Object.assign(response));
                              loading.dismiss();

                              _this2.router.navigate(['/paypalOrder/successfull'], {
                                state: {
                                  data: {
                                    response: response
                                  }
                                }
                              });
                            }, function (err) {
                              loading.dismiss();

                              _this2.router.navigate(['/paymenterror']);

                              return err;
                            });
                          });
                          this.paidFor = true;

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              },
              onError: function onError(err) {
                console.log(err);
              }
            }).render(this.paypalElement.nativeElement);
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
        }]);

        return PaypalPaymentOptionsComponent;
      }();

      _PaypalPaymentOptionsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_paypal_service__WEBPACK_IMPORTED_MODULE_3__.PaypalService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
        }, {
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_6__.TokenService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }];
      };

      _PaypalPaymentOptionsComponent.propDecorators = {
        amount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
        }],
        paypalElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: ['paypal', {
            "static": true
          }]
        }]
      };
      _PaypalPaymentOptionsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-paypalPaymentOptions',
        template: _raw_loader_paypalPaymentOptions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_paypalPaymentOptions_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PaypalPaymentOptionsComponent);
      /***/
    },

    /***/
    41709: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SuccessfullComponent": function SuccessfullComponent() {
          return (
            /* binding */
            _SuccessfullComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_successfull_successfull_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!../successfull/successfull.component.html */
      18239);
      /* harmony import */


      var _successfull_successfull_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../successfull/successfull.scss */
      66044);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _SuccessfullComponent = /*#__PURE__*/function () {
        function SuccessfullComponent() {
          _classCallCheck(this, SuccessfullComponent);
        }

        _createClass(SuccessfullComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SuccessfullComponent;
      }();

      _SuccessfullComponent.ctorParameters = function () {
        return [];
      };

      _SuccessfullComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-successfull-component',
        template: _raw_loader_successfull_successfull_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_successfull_successfull_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SuccessfullComponent);
      /***/
    },

    /***/
    65351: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TopNavigationToolbarComponent": function TopNavigationToolbarComponent() {
          return (
            /* binding */
            _TopNavigationToolbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_top_navigation_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./top-navigation-toolbar.component.html */
      65309);
      /* harmony import */


      var _top_navigation_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./top-navigation-toolbar.component.scss */
      90701);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      9356);

      var _TopNavigationToolbarComponent = /*#__PURE__*/function () {
        function TopNavigationToolbarComponent(alertController, authService) {
          _classCallCheck(this, TopNavigationToolbarComponent);

          this.alertController = alertController;
          this.authService = authService;
        }

        _createClass(TopNavigationToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.presentAlertConfirm();

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: 'Cerrar Sesión',
                        message: '¿Estas seguro de que quieres cerrar sesión?',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Confirmar',
                          handler: function handler() {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                      _context4.next = 2;
                                      return this.authService.logout();

                                    case 2:
                                      sessionStorage.clear();

                                    case 3:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              }, _callee4, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return TopNavigationToolbarComponent;
      }();

      _TopNavigationToolbarComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }];
      };

      _TopNavigationToolbarComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-top-navigation-toolbar',
        template: _raw_loader_top_navigation_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_top_navigation_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TopNavigationToolbarComponent);
      /***/
    },

    /***/
    82636: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateOrder": function CreateOrder() {
          return (
            /* binding */
            _CreateOrder
          );
        },

        /* harmony export */
        "PaymentUrl": function PaymentUrl() {
          return (
            /* binding */
            _PaymentUrl
          );
        },

        /* harmony export */
        "ConfirmOrder": function ConfirmOrder() {
          return (
            /* binding */
            _ConfirmOrder
          );
        }
        /* harmony export */

      });

      var _CreateOrder = function _CreateOrder() {
        _classCallCheck(this, _CreateOrder);
      };

      var _PaymentUrl = function _PaymentUrl() {
        _classCallCheck(this, _PaymentUrl);
      };

      var _ConfirmOrder = function _ConfirmOrder() {
        _classCallCheck(this, _ConfirmOrder);
      };
      /***/

    },

    /***/
    33762: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaypalRepository": function PaypalRepository() {
          return (
            /* binding */
            _PaypalRepository
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

      var _PaypalRepository = /*#__PURE__*/function () {
        function PaypalRepository(httpClientModule) {
          _classCallCheck(this, PaypalRepository);

          this.httpClientModule = httpClientModule;
        }

        _createClass(PaypalRepository, [{
          key: "createOrder",
          value: function createOrder(theOrder) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", new Promise(function (resolver) {
                        _this4.httpClientModule.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.ALCANCIA_SERVER_URL + '/deposits/create-order', theOrder).subscribe(function (reponse) {
                          return reponse;
                        });
                      }));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }]);

        return PaypalRepository;
      }();

      _PaypalRepository.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _PaypalRepository = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _PaypalRepository);
      /***/
    },

    /***/
    89902: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaypalService": function PaypalService() {
          return (
            /* binding */
            _PaypalService
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


      var _repository_paypal_respository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../repository/paypal.respository */
      33762);

      var _PaypalService = /*#__PURE__*/function () {
        function PaypalService(paypalRespository) {
          _classCallCheck(this, PaypalService);

          this.paypalRespository = paypalRespository;
        }

        _createClass(PaypalService, [{
          key: "createOrder",
          value: function createOrder(theOrder) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.paypalRespository.createOrder(theOrder);

                    case 2:
                      return _context7.abrupt("return", _context7.sent);

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return PaypalService;
      }();

      _PaypalService.ctorParameters = function () {
        return [{
          type: _repository_paypal_respository__WEBPACK_IMPORTED_MODULE_0__.PaypalRepository
        }];
      };

      _PaypalService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _PaypalService);
      /***/
    },

    /***/
    18902: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-buttons {\n  text-align: center;\n}\n\n.content {\n  position: absolute;\n  background-color: #F6F6F6;\n}\n\n.content ion-buttons {\n  text-align: center;\n}\n\nspan {\n  font-size: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtBQUNSOztBQUdBO0VBQ0ksY0FBQTtBQUFKIiwiZmlsZSI6Im5hdmlnYXRpb24tdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b25ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnR7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjZGNkY2O1xuXG4gICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbnNwYW57XG4gICAgZm9udC1zaXplOiA4cHg7XG59Il19 */";
      /***/
    },

    /***/
    8256: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlwYWxQYXltZW50T3B0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    66044: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzZnVsbC5zY3NzIn0= */";
      /***/
    },

    /***/
    90701: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtbmF2aWdhdGlvbi10b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    43508: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"home\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n        <span>Home</span>\n      </ion-tab-button>\n      <!-- <ion-tab-button >\n        <ion-icon  name=\"search-outline\"></ion-icon>\n        <span [navPush]=\"products\">Productos</span>\n      </ion-tab-button> -->\n      <ion-tab-button tab=\"transactions\">\n        <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\n        <span>Transacciones</span>\n      </ion-tab-button>\n      <!-- <ion-tab-button tab=\"status\">\n        <ion-icon name=\"trending-up-outline\"></ion-icon>\n              <span>Estado</span>\n      </ion-tab-button>  -->\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content> \n  ";
      /***/
    },

    /***/
    66524: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div #paypal></div> ";
      /***/
    },

    /***/
    18239: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section>\n  <img class=\"arrow-img\" src=\"/src/assets/checkmarkIcon.png\" alt=\"CheckMark Icon\">\n</section>";
      /***/
    },

    /***/
    65309: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button autoHide=\"false\"></ion-menu-button>\n  </ion-buttons>\n  <ion-buttons slot=\"start\">\n    <ion-button>\n      <ion-icon slot=\"icon-only\" name=\"person-circle\" color=\"dark\"></ion-icon>\n    </ion-button> \n  </ion-buttons>\n  <ion-buttons slot=\"primary\">\n    <ion-button color=\"secondary\" (click)=\"logout()\">\n      <ion-icon slot=\"icon-only\" name=\"log-out-outline\" color=\"dark\"></ion-icon> \n    </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"start\">\n    \n    <!-- <ion-button> //TODO: add hamburger when this component has given a functionalty,\n      <ion-icon slot=\"icon-only\" ios=\"menu-outline\" md=\"menu-outline\"></ion-icon>\n    </ion-button> -->\n  </ion-buttons>\n</ion-toolbar>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_components_main-components_module_ts-es5.js.map