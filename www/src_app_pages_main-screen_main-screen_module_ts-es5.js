(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_main-screen_main-screen_module_ts"], {
    /***/
    38381: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
      53874);

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
    76597: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main-screen-routing.module */
      38381);
      /* harmony import */


      var _main_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main-screen.page */
      53874);
      /* harmony import */


      var _components_main_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/main-components.module */
      37597);

      var _MainScreenPageModule = function MainScreenPageModule() {
        _classCallCheck(this, MainScreenPageModule);
      };

      _MainScreenPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _components_main_components_module__WEBPACK_IMPORTED_MODULE_2__.MainComponentsModule, _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainScreenPageRoutingModule],
        declarations: [_main_screen_page__WEBPACK_IMPORTED_MODULE_1__.MainScreenPage]
      })], _MainScreenPageModule);
      /***/
    },

    /***/
    53874: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./main-screen.page.html */
      53866);
      /* harmony import */


      var _main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main-screen.page.scss */
      27097);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/authentication.service */
      9356);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/storage.service */
      60010);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/user.service */
      11000);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);
      /* harmony import */


      var _services_appcookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/appcookie.service */
      85559);
      /* harmony import */


      var _services_transaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/transaction.service */
      7565);
      /* harmony import */


      var _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/sectionStorage.service */
      14314);

      var _MainScreenPage = /*#__PURE__*/function () {
        function MainScreenPage(authService, afAuth, storageService, router, userService, alertController, appCookie, transactionService, sectionStorageService) {
          _classCallCheck(this, MainScreenPage);

          this.authService = authService;
          this.afAuth = afAuth;
          this.storageService = storageService;
          this.router = router;
          this.userService = userService;
          this.alertController = alertController;
          this.appCookie = appCookie;
          this.transactionService = transactionService;
          this.sectionStorageService = sectionStorageService;
          this.aTotalInvestment = 0;
          this.transactionAvailable = true;
        }

        _createClass(MainScreenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.doFetch();
          } //Everytime the page is opened this is runned 

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.doFetch();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.aUsername = this.sectionStorageService.getData("Username");
                      this.userId = this.sectionStorageService.getData("UserId");
                      _context.next = 4;
                      return this.userService.getUserBalance(this.userId).then(function (userBalance) {
                        console.log(userBalance);
                        _this.aTotalInvestment = userBalance.balance;
                        var lastUpdate = new Date(userBalance.lastUpdate);
                        _this.lastBalance = lastUpdate.toString().replace('GMT-0400 (Atlantic Standard Time)', '');
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deposit",
          value: function deposit() {
            this.router.navigate(['/nav/swap']);
          }
        }, {
          key: "logout",
          value: function logout() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.presentAlertConfirm();

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.doFetch();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "doFetch",
          value: function doFetch() {
            this.getUserData();
            this.getUserTransactions();
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this2 = this;

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
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                      _context4.next = 2;
                                      return this.authService.logout();

                                    case 2:
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
        }, {
          key: "goToTransactionPage",
          value: function goToTransactionPage() {
            this.router.navigate(['/nav/transaction']);
          }
        }, {
          key: "getUserTransactions",
          value: function getUserTransactions() {
            var _this3 = this;

            this.transactionService.getUserTransactions().then(function (response) {
              if (response.length == 0) {
                _this3.transactionAvailable = false;
                ;
              } else {
                response.forEach(function (item) {
                  var createdDate = new Date(item.create_time);
                  item.create_time = createdDate.toString().replace('GMT-0400 (Atlantic Standard Time)', '');
                });
                _this3.transationHistory = response;
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }]);

        return MainScreenPage;
      }();

      _MainScreenPage.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: _services_appcookie_service__WEBPACK_IMPORTED_MODULE_5__.AppCookieService
        }, {
          type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_6__.TransactionService
        }, {
          type: _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_7__.SectionStorageService
        }];
      };

      _MainScreenPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-main-screen',
        template: _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MainScreenPage);
      /***/
    },

    /***/
    27097: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  text-align: center;\n  width: 100%;\n}\n\nion-col {\n  text-align: center;\n}\n\n.heading {\n  margin-top: 10vh;\n  text-align: center;\n}\n\n.heading .image {\n  width: 30%;\n}\n\n.lastDateUpdate {\n  margin-left: -124%;\n}\n\n.notransactionMessage {\n  font-size: 16px;\n  text-align: center;\n}\n\n.welcome-msg {\n  left: 12px;\n}\n\n.deposit-btn {\n  text-align: left;\n  float: left;\n  margin-top: 5px;\n  --background: #FFFF;\n  color: #3554C4;\n  margin-left: -30px;\n}\n\n.deposit-time {\n  color: gray;\n  margin-left: 3%;\n}\n\n.last-movement {\n  float: left;\n  font-size: 16px;\n  color: #ffff;\n}\n\n.transaction-amount {\n  font-size: 16px;\n}\n\n.ver-todos {\n  float: right;\n  font-size: 14px;\n}\n\n.Tittle {\n  font-size: 16px;\n}\n\n.welcome-msg {\n  position: relative;\n  text-align: left;\n  font-size: 30px;\n}\n\nion-list {\n  text-align: left;\n}\n\n.action-content {\n  background: #3554C4;\n  background-color: aliceblue;\n}\n\n.insta-icon {\n  float: right;\n  right: 50px;\n  width: 10%;\n}\n\n.investment-card {\n  background: #3554C4;\n  color: white;\n  height: 100px;\n}\n\n.investment-card .investment-card-subtitle {\n  padding-top: 2%;\n  padding-left: 2%;\n  float: left;\n  color: white;\n}\n\n.card-tittle {\n  float: left;\n  margin-top: 14px;\n  margin-left: 3%;\n  font-size: 18px;\n}\n\n.btn-container {\n  display: flex;\n  margin-top: 20%;\n  margin-left: 10%;\n  left: 5%;\n}\n\n.details-btn {\n  margin-left: 0px;\n  width: 100px;\n  height: 38px;\n  --background: #ffff;\n  color: #3554C4;\n}\n\n.total-investment-value {\n  font-size: 34px;\n  margin-left: -115px;\n  margin-top: 3px;\n}\n\n.content-investment-container {\n  display: inline;\n}\n\n.Ver-btn {\n  --background: #ffff;\n  color: #3554C4;\n  float: right;\n}\n\n@media only screen and (max-width: 960px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .image {\n    width: 90%;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  .lastDateUpdate {\n    margin-left: -205%;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .image {\n    width: 90%;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  .lastDateUpdate {\n    margin-left: -205%;\n  }\n\n  .deposit-btn {\n    text-align: left;\n    float: left;\n    margin-top: -85px;\n    --background: #FFFF;\n    color: #3554C4;\n    margin-left: 5px;\n  }\n\n  .total-investment-value {\n    font-size: 34px;\n    margin-left: -207px;\n    margin-top: 3px;\n  }\n}\n\n@media only screen and (max-width: 393px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .lastDateUpdate {\n    margin-left: -205%;\n  }\n\n  .image {\n    width: 90%;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  .deposit-btn {\n    text-align: left;\n    float: left;\n    margin-top: -82px;\n    --background: #FFFF;\n    color: #3554C4;\n    margin-left: -12px;\n  }\n\n  .total-investment-value {\n    font-size: 34px;\n    margin-left: -207px;\n    margin-top: 3px;\n  }\n}\n\n@media only screen and (max-width: 390px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .lastDateUpdate {\n    margin-left: -205%;\n  }\n\n  .image {\n    width: 90%;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  .deposit-btn {\n    text-align: left;\n    float: left;\n    margin-top: -87px;\n    --background: #FFFF;\n    color: #3554C4;\n    margin-left: 5px;\n  }\n\n  .total-investment-value {\n    font-size: 34px;\n    margin-left: -207px;\n    margin-top: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFERTtFQUNFLFVBQUE7QUFHSjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRkY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQU1BO0VBQ0UsV0FBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSkY7O0FBU0E7RUFDRTtJQUNFLGVBQUE7RUFORjs7RUFRQTtJQUNFLFVBQUE7RUFMRjs7RUFPRDtJQUNFLGVBQUE7RUFKRDs7RUFPRDtJQUNDLGtCQUFBO0VBSkE7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsZUFBQTtFQUpGOztFQU1BO0lBQ0UsVUFBQTtFQUhGOztFQUtEO0lBQ0UsZUFBQTtFQUZEOztFQUlEO0lBQ0Msa0JBQUE7RUFEQTs7RUFHRDtJQUNDLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFBQTs7RUFFRjtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFDQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxrQkFBQTtFQUVGOztFQUFBO0lBQ0UsVUFBQTtFQUdGOztFQUREO0lBQ0UsZUFBQTtFQUlEOztFQUREO0lBQ0MsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQUlBOztFQUZGO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQUtBO0FBQ0Y7O0FBSEE7RUFDRTtJQUNFLGVBQUE7RUFLRjs7RUFIQTtJQUNFLGtCQUFBO0VBTUY7O0VBSkE7SUFDRSxVQUFBO0VBT0Y7O0VBTEQ7SUFDRSxlQUFBO0VBUUQ7O0VBTEQ7SUFDQyxnQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBUUE7O0VBTkY7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBU0E7QUFDRiIsImZpbGUiOiJtYWluLXNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb2wgeyBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGluZ3tcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAuaW1hZ2V7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuIFxufVxuXG4ubGFzdERhdGVVcGRhdGV7XG4gIG1hcmdpbi1sZWZ0OiAtMTI0JTtcbn1cblxuLm5vdHJhbnNhY3Rpb25NZXNzYWdle1xuICBmb250LXNpemU6IDE2cHg7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWxjb21lLW1zZ3tcbiAgbGVmdDogMTJweDtcbn0gXG5cbi5kZXBvc2l0LWJ0bntcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxvYXQ6IGxlZnQ7IFxuICBtYXJnaW4tdG9wOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkY7XG4gIGNvbG9yOiAjMzU1NEM0OyBcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xufVxuXG4uZGVwb3NpdC10aW1le1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuXG4ubGFzdC1tb3ZlbWVudHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmOyBcbn1cblxuLnRyYW5zYWN0aW9uLWFtb3VudHtcbiAgZm9udC1zaXplOiAxNnB4OyBcbn1cbiBcbi52ZXItdG9kb3N7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNHB4OyBcbn1cblxuLlRpdHRsZXtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ud2VsY29tZS1tc2d7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5pb24tbGlzdHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjdGlvbi1jb250ZW50e1xuICBiYWNrZ3JvdW5kOiAjMzU1NEM0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbiAgLmluc3RhLWljb257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiBcblxuXG5cbi5pbnZlc3RtZW50LWNhcmR7XG4gIGJhY2tncm91bmQ6ICMzNTU0QzQ7XG4gIGNvbG9yOiB3aGl0ZTsgIFxuICBoZWlnaHQ6IDEwMHB4OyAgIFxuICAuaW52ZXN0bWVudC1jYXJkLXN1YnRpdGxle1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuIFxufVxuXG4uY2FyZC10aXR0bGV7XG4gIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcblxufSBcblxuLmJ0bi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbGVmdDogNSU7XG59XG5cbi5kZXRhaWxzLWJ0bnsgXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmO1xuICBjb2xvcjogIzM1NTRDNDtcbn1cblxuLnRvdGFsLWludmVzdG1lbnQtdmFsdWV7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMTVweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uY29udGVudC1pbnZlc3RtZW50LWNvbnRhaW5lcntcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uVmVyLWJ0bntcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZjtcbiAgY29sb3I6ICMzNTU0QzQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgaW9uLWNvbnRlbnR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5pbWFnZXtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gLnB7XG4gICBmb250LXNpemU6IDYwcHg7XG4gfSBcblxuIC5sYXN0RGF0ZVVwZGF0ZXtcbiAgbWFyZ2luLWxlZnQ6IC0yMDUlO1xufVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICBpb24tY29udGVudHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmltYWdle1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAucHtcbiAgIGZvbnQtc2l6ZTogNjBweDtcbiB9IFxuIC5sYXN0RGF0ZVVwZGF0ZXtcbiAgbWFyZ2luLWxlZnQ6IC0yMDUlO1xufVxuIC5kZXBvc2l0LWJ0bntcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxvYXQ6IGxlZnQ7IFxuICBtYXJnaW4tdG9wOiAtODVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGRjtcbiAgY29sb3I6ICMzNTU0QzQ7IFxuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnRvdGFsLWludmVzdG1lbnQtdmFsdWV7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMDdweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTNweCkge1xuICBpb24tY29udGVudHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmxhc3REYXRlVXBkYXRle1xuICAgIG1hcmdpbi1sZWZ0OiAtMjA1JTtcbiAgfVxuICAuaW1hZ2V7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuIC5we1xuICAgZm9udC1zaXplOiA2MHB4O1xuIH0gXG5cbiAuZGVwb3NpdC1idG57XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0OyBcbiAgbWFyZ2luLXRvcDogLTgycHg7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkY7XG4gIGNvbG9yOiAjMzU1NEM0OyBcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xufVxuLnRvdGFsLWludmVzdG1lbnQtdmFsdWV7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMDdweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xuICBpb24tY29udGVudHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmxhc3REYXRlVXBkYXRle1xuICAgIG1hcmdpbi1sZWZ0OiAtMjA1JTtcbiAgfVxuICAuaW1hZ2V7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuIC5we1xuICAgZm9udC1zaXplOiA2MHB4O1xuIH0gXG5cbiAuZGVwb3NpdC1idG57XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0OyBcbiAgbWFyZ2luLXRvcDogLTg3cHg7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkY7XG4gIGNvbG9yOiAjMzU1NEM0OyBcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi50b3RhbC1pbnZlc3RtZW50LXZhbHVle1xuICBmb250LXNpemU6IDM0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjA3cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbn1cblxuXG4iXX0= */";
      /***/
    },

    /***/
    53866: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>  \n   \n  <ion-header  no-border>\n    <app-top-navigation-toolbar></app-top-navigation-toolbar>\n  </ion-header>\n  <ion-content> \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher> \n  <ion-grid [fixed]=\"true\">\n      <ion-row>\n        <ion-col>\n          <h1 class=\"welcome-msg\">Bienvenido, {{aUsername}}.</h1>\n        </ion-col>\n        \n      </ion-row>\n\n      \n\n      <ion-row> \n        <ion-col>\n          <ion-card class=\"investment-card\"> \n            <ion-grid>\n            <ion-card-tittle>\n              <h5 class=\"card-tittle\">Ahorro Total</h5>\n            </ion-card-tittle> \n            <ion-col>\n              <div style=\"width: 100px; float:left; margin:10px; padding-top: 25px;\">\n               <span class=\"total-investment-value\" >{{aTotalInvestment}}$</span> \n               <br/>\n               <!-- <div>\n                <small class=\"lastDateUpdate\">{{this.lastBalance}}</small>\n              </div> -->\n              </div> \n            </ion-col>\n            <ion-col>\n\n              <div class=\" \" style=\"width: 100px; float:right; margin:10px; margin-right: 25px; margin-top: 35px\">\n                <ion-button class=\"deposit-btn\"  (click)=\"deposit()\">Depositar</ion-button>\n              </div> \n            </ion-col>\n          </ion-grid>\n          </ion-card>\n        </ion-col> \n    </ion-row>\n\n      <ion-button fill=\"outline\" disabled='true' expand='block'>Retirar<ion-icon slot=\"end\" name=\"lock-closed-outline\"></ion-icon></ion-button>\n\n    <ion-row>  \n      <ion-col>\n        <ion-card>   \n          <ion-card-header>\n            <ion-card-subtittle>\n              <ion-item >\n                <ion-label class=\"last-movement\">Últimos movimientos</ion-label>\n                <ion-note slot=\"end\" color=\"primary\" (click)=\"goToTransactionPage()\" ><ion-button class=\"ver-todos\" fill=\"clear\">ver todos <ion-icon name=\"arrow-forward-outline\"></ion-icon></ion-button></ion-note>\n              </ion-item>     \n            </ion-card-subtittle>\n          </ion-card-header>\n          <ion-card-content> \n            \n              <ion-list [scrollEvents]=\"true\" style=\"list-style: none;\" *ngFor=\"let transation  of transationHistory\">\n                <ion-scroll direction=\"y\">\n                  <ng-container *ngIf=\"!transactionAvailable\" >\n                    <p class=\"notransactionMessage\">No hay transacciones para mostrar</p>\n                  </ng-container>\n                  <ion-item>\n                    <ion-label class=\"transaction-tittle\"><img src=\"../../../assets/Icon awesome-coins.png\"> Depósito<br/><small class=\"deposit-time\">{{transation.create_time}}</small></ion-label>\n                    <ion-note class=\"transaction-amount\" slot=\"end\" color=\"primary\">{{transation.gross_amount}}$</ion-note>\n                  </ion-item> \n                </ion-scroll> \n              </ion-list>     \n          </ion-card-content> \n        </ion-card>  \n      </ion-col> \n  </ion-row>\n  </ion-grid>\n</ion-content>\n  <!--  \n  <section class=\"ion-padding\">\n  \n   \n   \n  </section>\n \n  -->\n</ion-app>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_main-screen_main-screen_module_ts-es5.js.map