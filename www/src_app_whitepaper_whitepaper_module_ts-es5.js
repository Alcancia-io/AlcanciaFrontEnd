(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_whitepaper_whitepaper_module_ts"], {
    /***/
    42947: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WhitepaperPageRoutingModule": function WhitepaperPageRoutingModule() {
          return (
            /* binding */
            _WhitepaperPageRoutingModule
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


      var _whitepaper_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./whitepaper.page */
      88298);

      var routes = [{
        path: '',
        component: _whitepaper_page__WEBPACK_IMPORTED_MODULE_0__.WhitepaperPage
      }];

      var _WhitepaperPageRoutingModule = function WhitepaperPageRoutingModule() {
        _classCallCheck(this, WhitepaperPageRoutingModule);
      };

      _WhitepaperPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _WhitepaperPageRoutingModule);
      /***/
    },

    /***/
    9263: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WhitepaperPageModule": function WhitepaperPageModule() {
          return (
            /* binding */
            _WhitepaperPageModule
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


      var _whitepaper_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./whitepaper-routing.module */
      42947);
      /* harmony import */


      var _whitepaper_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./whitepaper.page */
      88298);

      var _WhitepaperPageModule = function WhitepaperPageModule() {
        _classCallCheck(this, WhitepaperPageModule);
      };

      _WhitepaperPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _whitepaper_routing_module__WEBPACK_IMPORTED_MODULE_0__.WhitepaperPageRoutingModule],
        declarations: [_whitepaper_page__WEBPACK_IMPORTED_MODULE_1__.WhitepaperPage]
      })], _WhitepaperPageModule);
      /***/
    },

    /***/
    88298: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WhitepaperPage": function WhitepaperPage() {
          return (
            /* binding */
            _WhitepaperPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_whitepaper_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./whitepaper.page.html */
      23103);
      /* harmony import */


      var _whitepaper_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./whitepaper.page.scss */
      90837);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _WhitepaperPage = /*#__PURE__*/function () {
        function WhitepaperPage(router) {
          _classCallCheck(this, WhitepaperPage);

          this.router = router;
        }

        _createClass(WhitepaperPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var myPdfUrl = '../assets/whitepaper-alcancía.pdf';
            window.open(myPdfUrl);
            this.router.navigate(['']);
          }
        }]);

        return WhitepaperPage;
      }();

      _WhitepaperPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _WhitepaperPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-whitepaper',
        template: _raw_loader_whitepaper_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_whitepaper_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _WhitepaperPage);
      /***/
    },

    /***/
    90837: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aGl0ZXBhcGVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    23103: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <ion-content>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_whitepaper_whitepaper_module_ts-es5.js.map