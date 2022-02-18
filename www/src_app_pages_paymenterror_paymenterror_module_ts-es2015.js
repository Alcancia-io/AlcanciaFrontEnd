(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_paymenterror_paymenterror_module_ts"],{

/***/ 81305:
/*!*******************************************************************!*\
  !*** ./src/app/pages/paymenterror/paymenterror-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymenterrorPageRoutingModule": function() { return /* binding */ PaymenterrorPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _paymenterror_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymenterror.page */ 66752);




const routes = [
    {
        path: '',
        component: _paymenterror_page__WEBPACK_IMPORTED_MODULE_0__.PaymenterrorPage
    }
];
let PaymenterrorPageRoutingModule = class PaymenterrorPageRoutingModule {
};
PaymenterrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymenterrorPageRoutingModule);



/***/ }),

/***/ 26685:
/*!***********************************************************!*\
  !*** ./src/app/pages/paymenterror/paymenterror.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymenterrorPageModule": function() { return /* binding */ PaymenterrorPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _paymenterror_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymenterror-routing.module */ 81305);
/* harmony import */ var _paymenterror_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymenterror.page */ 66752);







let PaymenterrorPageModule = class PaymenterrorPageModule {
};
PaymenterrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _paymenterror_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymenterrorPageRoutingModule
        ],
        declarations: [_paymenterror_page__WEBPACK_IMPORTED_MODULE_1__.PaymenterrorPage]
    })
], PaymenterrorPageModule);



/***/ }),

/***/ 66752:
/*!*********************************************************!*\
  !*** ./src/app/pages/paymenterror/paymenterror.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymenterrorPage": function() { return /* binding */ PaymenterrorPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_paymenterror_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./paymenterror.page.html */ 13786);
/* harmony import */ var _paymenterror_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymenterror.page.scss */ 45579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);





let PaymenterrorPage = class PaymenterrorPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToMainMenu() {
        this.router.navigate(['/']);
    }
};
PaymenterrorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PaymenterrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-paymenterror',
        template: _raw_loader_paymenterror_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_paymenterror_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymenterrorPage);



/***/ }),

/***/ 45579:
/*!***********************************************************!*\
  !*** ./src/app/pages/paymenterror/paymenterror.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section {\n  text-align: left;\n  margin-left: 10%;\n  margin-top: 20%;\n}\n\n.section-icon {\n  margin-top: 20%;\n  text-align: center;\n}\n\n.checkmarkIcon {\n  text-align: center;\n  width: 200px;\n}\n\n.checkmarkicon-cotainer {\n  text-align: center;\n}\n\n.bill-details-card {\n  width: 80%;\n  text-align: left;\n  margin-left: 10%;\n}\n\n.sucessfull-span {\n  font-size: 24px;\n  text-align: left;\n}\n\n.title-deposite {\n  float: left;\n  font-size: 18px;\n}\n\n.order-details {\n  float: left;\n  padding-left: 5%;\n  font-size: 16px;\n}\n\n.btn-component {\n  padding-left: 40%;\n}\n\n.arrow-img {\n  width: 54px;\n  height: 18px;\n}\n\n.arrow-btn {\n  float: right;\n  padding-right: 22%;\n  bottom: 0;\n  margin: 25px;\n  margin-top: 20%;\n  margin-left: 50%;\n  height: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRlcnJvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFHSiIsImZpbGUiOiJwYXltZW50ZXJyb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuLnNlY3Rpb24taWNvbntcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hlY2ttYXJrSWNvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5jaGVja21hcmtpY29uLWNvdGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJpbGwtZGV0YWlscy1jYXJke1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uc3VjZXNzZnVsbC1zcGFueyBcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRpdGxlLWRlcG9zaXRle1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm9yZGVyLWRldGFpbHN7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5idG4tY29tcG9uZW50e1xuICAgIHBhZGRpbmctbGVmdDogNDAlXG59XG4uYXJyb3ctaW1ne1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogMThweDtcbiB9XG4uYXJyb3ctYnRue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMiU7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICBoZWlnaHQ6IDUlO1xufSJdfQ== */");

/***/ }),

/***/ 13786:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymenterror/paymenterror.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-content>\n      <br/>\n      <br/>\n      <section class=\"section-icon\"> \n          <img class=\"checkmarkIcon\" src=\"../../../assets/Icon awesome-exclamation-circle.png\" alt=\"taxi-money-care\">\n      </section>      \n      <br/>\n      <br/>\n      <section  class=\"section\">\n          <span class=\"sucessfull-span\">Tuvimos un problema al realizar el\n            depósito… </span><br/><br/><br/>\n          <span class=\"sucessfull-span\">\n            Por favor intentalo de nuevo.\n          </span>\n      </section>\n      <br/><br/><br/>\n      <ion-button class=\"arrow-btn\" type=\"submit\" expand=\"block\" shape=\"round\" (click)=\"backToMainMenu()\"><img class=\"arrow-img\" src=\"../../../../assets/arrow-alcui.png\" alt=\"arrow-alcui\"></ion-button>\n  </ion-content>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_paymenterror_paymenterror_module_ts-es2015.js.map