(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_transactions_transactions_module_ts"], {
    /***/
    12752: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionsPageRoutingModule": function TransactionsPageRoutingModule() {
          return (
            /* binding */
            _TransactionsPageRoutingModule
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


      var _transactions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./transactions.page */
      47593);

      var routes = [{
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_0__.TransactionsPage
      }];

      var _TransactionsPageRoutingModule = function TransactionsPageRoutingModule() {
        _classCallCheck(this, TransactionsPageRoutingModule);
      };

      _TransactionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TransactionsPageRoutingModule);
      /***/
    },

    /***/
    34307: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionsPageModule": function TransactionsPageModule() {
          return (
            /* binding */
            _TransactionsPageModule
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


      var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./transactions-routing.module */
      12752);
      /* harmony import */


      var _transactions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./transactions.page */
      47593);
      /* harmony import */


      var src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/main-components.module */
      37597);

      var _TransactionsPageModule = function TransactionsPageModule() {
        _classCallCheck(this, TransactionsPageModule);
      };

      _TransactionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionsPageRoutingModule, src_app_components_main_components_module__WEBPACK_IMPORTED_MODULE_2__.MainComponentsModule],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_1__.TransactionsPage]
      })], _TransactionsPageModule);
      /***/
    },

    /***/
    47593: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionsPage": function TransactionsPage() {
          return (
            /* binding */
            _TransactionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_transactions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./transactions.page.html */
      5705);
      /* harmony import */


      var _transactions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./transactions.page.scss */
      69766);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/transaction.service */
      7565);

      var _TransactionsPage = /*#__PURE__*/function () {
        function TransactionsPage(transactionService) {
          _classCallCheck(this, TransactionsPage);

          this.transactionService = transactionService;
          this.transactionAvailable = true;
        }

        _createClass(TransactionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.doFetch();
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
            this.getUserTransactions();
          }
        }, {
          key: "getUserTransactions",
          value: function getUserTransactions() {
            var _this = this;

            this.transactionService.getUserTransactions().then(function (response) {
              if (response.length == 0) {
                _this.transactionAvailable == false;
              } else {
                response.forEach(function (item) {
                  var createdDate = new Date(item.create_time);
                  item.create_time = createdDate.toString().replace('GMT-0400 (Atlantic Standard Time)', '');
                });
                _this.transationHistory = response;
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }]);

        return TransactionsPage;
      }();

      _TransactionsPage.ctorParameters = function () {
        return [{
          type: src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_2__.TransactionService
        }];
      };

      _TransactionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-transactions',
        template: _raw_loader_transactions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_transactions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TransactionsPage);
      /***/
    },

    /***/
    69766: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".notransactionMessage {\n  text-align: center;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdHJhbnNhY3Rpb25NZXNzYWdle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59Il19 */";
      /***/
    },

    /***/
    5705: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header> \n    <app-top-navigation-toolbar>Historial Transaciones</app-top-navigation-toolbar> \n</ion-header>\n \n<!-- List of Text Items -->\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher> \n  <li style=\"list-style: none;\" *ngFor=\"let transation  of transationHistory\">\n    <ng-container *ngIf=\"!transactionAvailable\" >\n      <p class=\"notransactionMessage\">No hay transacciones para mostrar</p>\n    </ng-container>\n    <ion-card>\n      <ion-item> \n          <h3> <img src=\"../../../assets/Icon awesome-coins.png\"> {{transation.id}}  </h3>\n        <ion-label></ion-label>\n        <!-- <ion-button fill=\"outline\" slot=\"end\">Ver</ion-button> -->\n      </ion-item>\n      <ion-item>\n        Fecha: {{transation.create_time}} <br/>\n        Monto Total: {{transation.gross_amount}} $ <br/>\n        <!-- Monto Neto: {{transation.net_amount}} $ -->\n      </ion-item>\n    \n      <ion-card-content>\n        {{transation.status}}\n      </ion-card-content>\n    </ion-card>\n  </li>\n</ion-content> \n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_transactions_transactions_module_ts-es5.js.map