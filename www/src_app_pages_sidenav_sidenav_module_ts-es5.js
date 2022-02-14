(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_sidenav_sidenav_module_ts"], {
    /***/
    76245: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidenavPageRoutingModule": function SidenavPageRoutingModule() {
          return (
            /* binding */
            _SidenavPageRoutingModule
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


      var src_app_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/guards/authorize.guard */
      33874);
      /* harmony import */


      var _sidenav_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidenav.page */
      58123);

      var routes = [{
        path: 'nav',
        component: _sidenav_page__WEBPACK_IMPORTED_MODULE_1__.SidenavPage,
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_main-screen_main-screen_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../main-screen/main-screen.module */
            76597)).then(function (m) {
              return m.MainScreenPageModule;
            });
          }
        }, {
          path: 'transaction',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_transactions_transactions_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../transactions/transactions.module */
            34307)).then(function (m) {
              return m.TransactionsPageModule;
            });
          }
        }, {
          path: 'swap',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("src_app_pages_swap_swap_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../swap/swap.module */
            17233)).then(function (m) {
              return m.SwapPageModule;
            });
          }
        }, {
          path: 'paypalpaymentoptions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_main-components_module_ts"), __webpack_require__.e("src_app_pages_paypalpaymentoptions_paypalpaymentoptions_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../paypalpaymentoptions/paypalpaymentoptions.module */
            77292)).then(function (m) {
              return m.PaypalpaymentoptionsPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/nav/home',
          pathMatch: 'full',
          canLoad: [src_app_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard]
        }]
      }, {
        path: '',
        redirectTo: '/nav/home',
        pathMatch: 'full',
        canLoad: [src_app_guards_authorize_guard__WEBPACK_IMPORTED_MODULE_0__.AuthorizeGuard]
      }];

      var _SidenavPageRoutingModule = function SidenavPageRoutingModule() {
        _classCallCheck(this, SidenavPageRoutingModule);
      };

      _SidenavPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _SidenavPageRoutingModule);
      /***/
    },

    /***/
    69145: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidenavPageModule": function SidenavPageModule() {
          return (
            /* binding */
            _SidenavPageModule
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


      var _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sidenav-routing.module */
      76245);
      /* harmony import */


      var _sidenav_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidenav.page */
      58123);

      var _SidenavPageModule = function SidenavPageModule() {
        _classCallCheck(this, SidenavPageModule);
      };

      _SidenavPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_0__.SidenavPageRoutingModule],
        declarations: [_sidenav_page__WEBPACK_IMPORTED_MODULE_1__.SidenavPage]
      })], _SidenavPageModule);
      /***/
    },

    /***/
    58123: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidenavPage": function SidenavPage() {
          return (
            /* binding */
            _SidenavPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_sidenav_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./sidenav.page.html */
      4942);
      /* harmony import */


      var _sidenav_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidenav.page.scss */
      77232);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _SidenavPage = /*#__PURE__*/function () {
        function SidenavPage(router) {
          var _this = this;

          _classCallCheck(this, SidenavPage);

          this.router = router;
          this.active = '';
          this.NAV = [{
            name: 'Menu Principal',
            link: '/nav/home',
            icon: 'home-outline'
          }, {
            name: 'Movimientos',
            link: '/nav/transaction',
            icon: 'swap-horizontal-outline'
          }];
          this.router.events.subscribe(function (event) {
            _this.active = event.url;
          });
        }

        _createClass(SidenavPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidenavPage;
      }();

      _SidenavPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _SidenavPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sidenav',
        template: _raw_loader_sidenav_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sidenav_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SidenavPage);
      /***/
    },

    /***/
    77232: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlbmF2LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    4942: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-menu contentId=\"main-content\" side=\"start\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Alcancia.io</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let nav of NAV\">\n          <ion-item \n            routerDirection=\"root\" \n             [routerLink]=\"nav.link\" \n             [class.active-menu]=\"active === nav.link\">\n              {{nav.name}}\n              <ion-icon slot=\"start\" [ios]=\"nav.icon\" [md]=\"nav.icon\"></ion-icon>              \n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main-content\" main></ion-router-outlet>\n\n</ion-app>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sidenav_sidenav_module_ts-es5.js.map