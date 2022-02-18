(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_intro_intro_module_ts"],{

/***/ 85160:
/*!***************************************!*\
  !*** ./src/app/guards/intro.guard.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INTRO_KEY": function() { return /* binding */ INTRO_KEY; },
/* harmony export */   "IntroGuard": function() { return /* binding */ IntroGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage.service */ 60010);



//local storage

const INTRO_KEY = 'intro-seen';
let IntroGuard = class IntroGuard {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const hasSeenIntro = yield this.storageService.getData(INTRO_KEY);
            if (hasSeenIntro.length > 0 && (hasSeenIntro[0].value === 'true')) {
                return true;
            }
            else {
                return this.router.navigate[('/login')];
            }
        });
    }
};
IntroGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
IntroGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], IntroGuard);



/***/ }),

/***/ 56426:
/*!*****************************************************!*\
  !*** ./src/app/pages/intro/intro-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageRoutingModule": function() { return /* binding */ IntroPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 41954);




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

/***/ 16104:
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
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
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-routing.module */ 56426);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page */ 41954);







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

/***/ 41954:
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": function() { return /* binding */ IntroPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./intro.page.html */ 82698);
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss */ 37282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guards/intro.guard */ 85160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 60010);








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

/***/ 37282:
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\n  margin-top: 10vh;\n  text-align: center;\n}\n.heading h1 {\n  font-size: 48px;\n  text-align: left;\n  padding-left: 5%;\n  margin-bottom: 30%;\n}\n.heading p {\n  font-size: 1em;\n  color: #707070;\n  padding-top: 3px;\n  margin: 6px;\n  padding-left: 7.5%;\n  text-align: left;\n}\nsmall {\n  font-size: 16px;\n  color: #959595;\n  margin-left: 5%;\n  float: left;\n}\n.start-now {\n  margin-top: 45%;\n  text-align: center;\n}\n.start-now ion-button {\n  width: 85%;\n  height: 50px;\n  --background: #3554C4;\n}\n.start-now .start-now-btn {\n  text-transform: none;\n  font-size: 20px;\n  height: 65px;\n  border-radius: 10px;\n}\n@media only screen and (min-width: 960px) {\n  .heading h1 {\n    font-size: 1.5em;\n    text-align: center;\n  }\n  .heading p {\n    font-size: 1em;\n    color: #707070;\n    padding-top: 3px;\n    margin: 6px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNOO0FBRUk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZGO0FBT0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1FO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUpKO0FBT0U7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVNBO0VBR0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBUkY7RUFXQTtJQUNFLGNBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFURjtBQUNGIiwiZmlsZSI6ImludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ne1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaDF7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwJTtcbiAgICB9XG5cbiAgICBwe1xuICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgbWFyZ2luOiA2cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDcuNSU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxufVxuXG5zbWFsbHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzk1OTU5NTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuXG5cbi5zdGFydC1ub3d7XG4gIG1hcmdpbi10b3A6IDQ1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDg1JTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMzU1NEM0O1xuICB9XG5cbiAgLnN0YXJ0LW5vdy1idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcblxuLmhlYWRpbmd7XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgcHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBtYXJnaW46IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxufVxuIl19 */");

/***/ }),

/***/ 82698:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"heading\">\n    <h1>Creemos que ahorrar es\n      esencial para una buena vida</h1>\n  </div>\n  <div>\n    <small>\n      Somos la nueva forma de ahorrar. \n    </small>\n    <br/>\n    <br/>\n    <small>\n      Con la misión de empoderar \n      económicamente<br/>  a los latinoaméricanos mediante el ahorro proactivo.<br/><br/>\n    </small>\n    \n    <br/>\n    <br/>\n    <small>\n      ¿Te nos unes a esta causa?\n    </small> \n  </div>\n  <div class=\"start-now\">\n    <ion-button class=\"start-now-btn\" (click)=\"start()\">Quiero empezar a ahorrar</ion-button>\n  </div>\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_intro_intro_module_ts-es2015.js.map