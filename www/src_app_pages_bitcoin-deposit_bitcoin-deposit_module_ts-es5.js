(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_bitcoin-deposit_bitcoin-deposit_module_ts"], {
    /***/
    26250: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BitcoinDepositPageRoutingModule": function BitcoinDepositPageRoutingModule() {
          return (
            /* binding */
            _BitcoinDepositPageRoutingModule
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


      var _bitcoin_deposit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bitcoin-deposit.page */
      15098);

      var routes = [{
        path: '',
        component: _bitcoin_deposit_page__WEBPACK_IMPORTED_MODULE_0__.BitcoinDepositPage
      }];

      var _BitcoinDepositPageRoutingModule = function BitcoinDepositPageRoutingModule() {
        _classCallCheck(this, BitcoinDepositPageRoutingModule);
      };

      _BitcoinDepositPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BitcoinDepositPageRoutingModule);
      /***/
    },

    /***/
    68929: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BitcoinDepositPageModule": function BitcoinDepositPageModule() {
          return (
            /* binding */
            _BitcoinDepositPageModule
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


      var _bitcoin_deposit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bitcoin-deposit-routing.module */
      26250);
      /* harmony import */


      var _bitcoin_deposit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bitcoin-deposit.page */
      15098);

      var _BitcoinDepositPageModule = function BitcoinDepositPageModule() {
        _classCallCheck(this, BitcoinDepositPageModule);
      };

      _BitcoinDepositPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _bitcoin_deposit_routing_module__WEBPACK_IMPORTED_MODULE_0__.BitcoinDepositPageRoutingModule],
        declarations: [_bitcoin_deposit_page__WEBPACK_IMPORTED_MODULE_1__.BitcoinDepositPage]
      })], _BitcoinDepositPageModule);
      /***/
    },

    /***/
    15098: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BitcoinDepositPage": function BitcoinDepositPage() {
          return (
            /* binding */
            _BitcoinDepositPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_bitcoin_deposit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./bitcoin-deposit.page.html */
      93054);
      /* harmony import */


      var _bitcoin_deposit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bitcoin-deposit.page.scss */
      36654);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      34595);

      var _BitcoinDepositPage = /*#__PURE__*/function () {
        function BitcoinDepositPage(toastr) {
          _classCallCheck(this, BitcoinDepositPage);

          this.toastr = toastr;
        }

        _createClass(BitcoinDepositPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "copyToClipboard",
          value: function copyToClipboard() {
            navigator.clipboard.writeText('bc1q72scrxlhttzhm0n7v4ntklz78n6ssgaxxj0gdf');
            this.toast('Copy to clipboard sucessfully!', 'success');
          }
        }, {
          key: "toast",
          value: function toast(message, status) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastr.create({
                        message: message,
                        position: 'top',
                        color: status,
                        duration: 3000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //end of toast

        }]);

        return BitcoinDepositPage;
      }();

      _BitcoinDepositPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }];
      };

      _BitcoinDepositPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-bitcoin-deposit',
        template: _raw_loader_bitcoin_deposit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bitcoin_deposit_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BitcoinDepositPage);
      /***/
    },

    /***/
    36654: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  width: 50%;\n  left: 25%;\n  top: 10%;\n  text-align: center;\n}\n\n.welcome-msg {\n  text-align: left;\n  font-size: 20px;\n}\n\n@media only screen and (max-width: 960px) {\n  ion-content {\n    width: 80%;\n    left: 10%;\n  }\n\n  .welcome-msg {\n    font-size: 20px;\n    padding-left: 15%;\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpdGNvaW4tZGVwb3NpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxTQUFBO0VBQ047O0VBQ0U7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiYml0Y29pbi1kZXBvc2l0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbGVmdDogMjUlO1xuICAgIHRvcDogMTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGNvbWUtbXNneyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAgXG4gICAgZm9udC1zaXplOiAyMHB4OyBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIGlvbi1jb250ZW50eyBcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbGVmdDogMTAlO1xuICAgIH1cbiAgICAud2VsY29tZS1tc2d7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7ICAgXG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    93054: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>  \n  <ion-content>\n    <p class=\"welcome-msg\">{{'username'}}, deposita el Bitcoin a la siguiente dirección:</p>\n    <br>\n    <img class=\"bitcoin-qr\" src=\"/assets/bitcoin-qr.svg\" alt=\"bitcoin-qr\">\n    <br>\n    <br>\n    <br>\n    <br> \n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"2\">\n          <ion-fab>\n            <ion-fab-button (click)=\"copyToClipboard()\">\n              <ion-icon name=\"copy-outline\"></ion-icon> \n            </ion-fab-button><br/>\n            <span>Copiar</span>   \n          </ion-fab> \n        </ion-col>\n        <ion-col  size=\"3\">\n          <ion-fab>\n            <ion-fab-button>\n              <ion-icon name=\"share-outline\"></ion-icon>\n            </ion-fab-button><br/>\n            <span>Compartir</span>   \n          </ion-fab>         \n        </ion-col>\n      </ion-row>\n    </ion-grid> \n  </ion-content>\n</ion-app>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_bitcoin-deposit_bitcoin-deposit_module_ts-es5.js.map