(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_paypalpaymentoptions_paypalpaymentoptions_module_ts"], {
    /***/
    80860: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaypalpaymentoptionsPageRoutingModule": function PaypalpaymentoptionsPageRoutingModule() {
          return (
            /* binding */
            _PaypalpaymentoptionsPageRoutingModule
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


      var _paypalpaymentoptions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./paypalpaymentoptions.page */
      69465);

      var routes = [{
        path: '',
        component: _paypalpaymentoptions_page__WEBPACK_IMPORTED_MODULE_0__.PaypalpaymentoptionsPage
      }];

      var _PaypalpaymentoptionsPageRoutingModule = function PaypalpaymentoptionsPageRoutingModule() {
        _classCallCheck(this, PaypalpaymentoptionsPageRoutingModule);
      };

      _PaypalpaymentoptionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PaypalpaymentoptionsPageRoutingModule);
      /***/
    },

    /***/
    77292: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaypalpaymentoptionsPageModule": function PaypalpaymentoptionsPageModule() {
          return (
            /* binding */
            _PaypalpaymentoptionsPageModule
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


      var _paypalpaymentoptions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./paypalpaymentoptions-routing.module */
      80860);
      /* harmony import */


      var _paypalpaymentoptions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./paypalpaymentoptions.page */
      69465);
      /* harmony import */


      var src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/main-components.module */
      37597);

      var _PaypalpaymentoptionsPageModule = function PaypalpaymentoptionsPageModule() {
        _classCallCheck(this, PaypalpaymentoptionsPageModule);
      };

      _PaypalpaymentoptionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _paypalpaymentoptions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaypalpaymentoptionsPageRoutingModule, src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_2__.MainComponentsModule],
        declarations: [_paypalpaymentoptions_page__WEBPACK_IMPORTED_MODULE_1__.PaypalpaymentoptionsPage]
      })], _PaypalpaymentoptionsPageModule);
      /***/
    },

    /***/
    69465: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaypalpaymentoptionsPage": function PaypalpaymentoptionsPage() {
          return (
            /* binding */
            _PaypalpaymentoptionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_paypalpaymentoptions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./paypalpaymentoptions.page.html */
      78946);
      /* harmony import */


      var _paypalpaymentoptions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./paypalpaymentoptions.page.scss */
      94690);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _PaypalpaymentoptionsPage = /*#__PURE__*/function () {
        function PaypalpaymentoptionsPage(router) {
          _classCallCheck(this, PaypalpaymentoptionsPage);

          this.router = router;
        }

        _createClass(PaypalpaymentoptionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var paymentInfo = history.state.data;
            this.depositAmount = paymentInfo.newPaypalOrder.amount;
          }
        }, {
          key: "backToSwap",
          value: function backToSwap() {
            this.router.navigate(['/nav/swap']);
          }
        }]);

        return PaypalpaymentoptionsPage;
      }();

      _PaypalpaymentoptionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _PaypalpaymentoptionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-paypalpaymentoptions',
        template: _raw_loader_paypalpaymentoptions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_paypalpaymentoptions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PaypalpaymentoptionsPage);
      /***/
    },

    /***/
    94690: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tittle {\n  text-align: center;\n}\n\n.paymentoption {\n  text-align: center;\n}\n\n.cancelbtn {\n  margin-top: 10%;\n  float: right;\n  margin-right: 10%;\n  margin-bottom: 5%;\n}\n\n.option-content {\n  height: 50%;\n}\n\n.cancel-content {\n  --offset-top: -240px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXBhbHBheW1lbnRvcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFBZ0Isb0JBQUE7RUFDWixrQkFBQTtBQUVKIiwiZmlsZSI6InBheXBhbHBheW1lbnRvcHRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRpdHRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGF5bWVudG9wdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYW5jZWxidG57XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLm9wdGlvbi1jb250ZW50e1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4uY2FuY2VsLWNvbnRlbnR7LS1vZmZzZXQtdG9wOiAtMjQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAiXX0= */";
      /***/
    },

    /***/
    78946: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " \n<ion-app>\n  <ion-header no-border>\n    <app-top-navigation-toolbar></app-top-navigation-toolbar>\n  </ion-header>\n  <ion-content class=\"option-content\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"tittle\">Seleccione una de las siguientes opciones: </h1><br/>\n          <app-paypalPaymentOptions class=\"paymentoption\" [amount]='depositAmount'></app-paypalPaymentOptions>     \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col> \n          <ion-button class=\"cancelbtn\" shape=\"round\" (click)=\"backToSwap()\" >Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>  \n  </ion-content>\n</ion-app>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_paypalpaymentoptions_paypalpaymentoptions_module_ts-es5.js.map