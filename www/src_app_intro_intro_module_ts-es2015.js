(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_intro_intro_module_ts"],{

/***/ 75025:
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageRoutingModule": function() { return /* binding */ IntroPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 24876);




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ 45309:
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageModule": function() { return /* binding */ IntroPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-routing.module */ 75025);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page */ 24876);







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroPageRoutingModule
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_1__.IntroPage]
    })
], IntroPageModule);



/***/ }),

/***/ 24876:
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": function() { return /* binding */ IntroPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./intro.page.html */ 56077);
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss */ 70653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guards/intro.guard */ 85160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 60010);








let IntroPage = class IntroPage {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    ngOnInit() {
    }
    next() {
        this.slides.slideNext();
    }
    start() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storageService.addData({ key: src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__.INTRO_KEY, value: 'true' }, src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__.INTRO_KEY);
            this.router.navigateByUrl('/signup', { replaceUrl: true });
        });
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
IntroPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides,] }]
};
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-intro',
        template: _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IntroPage);



/***/ }),

/***/ 70653:
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\n  margin-top: 10vh;\n  text-align: center;\n}\n.heading h1 {\n  font-size: 1.5em;\n  text-align: left;\n  padding-left: 8%;\n}\n.heading p {\n  font-size: 1em;\n  color: #707070;\n  padding-top: 3px;\n  margin: 6px;\n  padding-left: 7.5%;\n  text-align: left;\n}\n.start-now {\n  margin-top: 45px;\n  text-align: center;\n}\n.start-now ion-button {\n  width: 85%;\n  height: 50px;\n  --background:#FECE2F;\n}\n.start-now .start-now-btn {\n  text-transform: none;\n  font-size: 1em;\n}\n@media only screen and (min-width: 960px) {\n  .heading h1 {\n    font-size: 1.5em;\n    text-align: center;\n  }\n  .heading p {\n    font-size: 1em;\n    color: #707070;\n    padding-top: 3px;\n    margin: 6px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ047QUFFSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFOO0FBTUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFISjtBQU1FO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBSko7QUFRQTtFQUdFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQVBGO0VBVUE7SUFDRSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBUkY7QUFDRiIsImZpbGUiOiJpbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3tcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGgxe1xuICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDglO1xuICAgIH1cblxuICAgIHB7XG4gICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgY29sb3I6IzcwNzA3MDtcbiAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICBtYXJnaW46IDZweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNy41JTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5cblxuLnN0YXJ0LW5vd3tcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDg1JTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiNGRUNFMkY7XG4gIH1cblxuICAuc3RhcnQtbm93LWJ0bntcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcblxuLmhlYWRpbmd7XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgcHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBtYXJnaW46IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxufVxuIl19 */");

/***/ }),

/***/ 56077:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"heading\">\n    <div class=\"image\">\n      <img src=\"/assets/taxi-money-care.svg\" alt=\"taxi-money-care\">\n    </div>\n    <h1>Creemos que ahorrar es\n      esencial para una buena vida</h1>\n      <p>Somos la nueva forma de ahorrar. Buscamos\n        maximizar el poder de tus ingresos con el uso\n        de las tecnologías emergentes.</p>\n  </div>\n  <div class=\"start-now\">\n    <ion-button class=\"start-now-btn\" (click)=\"start()\">Quiero empezar a ahorrar</ion-button>\n  </div>\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_intro_intro_module_ts-es2015.js.map