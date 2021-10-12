(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_main-screen_main-screen_module_ts"],{

/***/ 37424:
/*!***********************************************************!*\
  !*** ./src/app/main-screen/main-screen-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainScreenPageRoutingModule": function() { return /* binding */ MainScreenPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _main_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-screen.page */ 58762);




const routes = [
    {
        path: '',
        component: _main_screen_page__WEBPACK_IMPORTED_MODULE_0__.MainScreenPage
    }
];
let MainScreenPageRoutingModule = class MainScreenPageRoutingModule {
};
MainScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainScreenPageRoutingModule);



/***/ }),

/***/ 57226:
/*!***************************************************!*\
  !*** ./src/app/main-screen/main-screen.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainScreenPageModule": function() { return /* binding */ MainScreenPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-screen-routing.module */ 37424);
/* harmony import */ var _main_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-screen.page */ 58762);







let MainScreenPageModule = class MainScreenPageModule {
};
MainScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainScreenPageRoutingModule
        ],
        declarations: [_main_screen_page__WEBPACK_IMPORTED_MODULE_1__.MainScreenPage]
    })
], MainScreenPageModule);



/***/ }),

/***/ 58762:
/*!*************************************************!*\
  !*** ./src/app/main-screen/main-screen.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainScreenPage": function() { return /* binding */ MainScreenPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main-screen.page.html */ 45281);
/* harmony import */ var _main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-screen.page.scss */ 71542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 9356);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 60010);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 11000);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/auth.guard */ 47316);









let MainScreenPage = class MainScreenPage {
    constructor(authService, storageService, router, userService) {
        this.authService = authService;
        this.storageService = storageService;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.getUserName();
    }
    getUserName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const username = yield this.storageService.getData(src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.USER_NAME);
            if (username.length > 0 && username[0]) {
                this.aUsername = username[0].value;
            }
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.logout();
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getUser().then(data => console.log('user data from the Main-screen' + data));
        });
    }
};
MainScreenPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
MainScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-main-screen',
        template: _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainScreenPage);



/***/ }),

/***/ 71542:
/*!***************************************************!*\
  !*** ./src/app/main-screen/main-screen.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  text-align: center;\n  width: 100%;\n}\n\n.heading {\n  margin-top: 10vh;\n  text-align: center;\n}\n\n.heading .image {\n  width: 30%;\n}\n\n.welcome-msg {\n  position: relative;\n  text-align: left;\n  font-size: 30px;\n}\n\nion-list {\n  text-align: left;\n}\n\n.action-content {\n  background: #FECE2F;\n  background-color: aliceblue;\n}\n\n.insta-icon {\n  float: right;\n  right: 50px;\n  width: 10%;\n}\n\nion-row {\n  display: block;\n  margin: auto;\n  width: 50%;\n}\n\n@media only screen and (max-width: 960px) {\n  ion-content {\n    font-size: 16px;\n  }\n\n  .image {\n    width: 90%;\n  }\n\n  .p {\n    font-size: 60px;\n  }\n\n  ion-row {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUFFO0VBQ0UsVUFBQTtBQUVKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxlQUFBO0VBQUY7O0VBRUE7SUFDRSxVQUFBO0VBQ0Y7O0VBQ0Q7SUFDRSxlQUFBO0VBRUQ7O0VBQUE7SUFDRSxlQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJtYWluLXNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLmltYWdle1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiBcbn1cblxuLndlbGNvbWUtbXNne1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLWxpc3R7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hY3Rpb24tY29udGVudHtcbiAgYmFja2dyb3VuZDogI0ZFQ0UyRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG4gIC5pbnN0YS1pY29ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAlO1xuICB9XG5cbmlvbi1yb3d7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgaW9uLWNvbnRlbnR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5pbWFnZXtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gLnB7XG4gICBmb250LXNpemU6IDYwcHg7XG4gfVxuICBpb24tcm93e1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ 45281:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/main-screen.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content class=\"ion-padding\">\n  <div class=\"header\">\n    <div class=image>\n        <img src=\"/assets/taxi-robot.png\" width=\"300px\" alt=\"taxi-money-care\">\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-card-header>\n        <div class=\"welcome-msg\">\n          Hola <b><br>{{aUsername}}<b *ngIf=\"aUsername\" >,</b></b>\n      </div>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n          ¡Gracias por registrarte a Alcancía! \n        </ion-list>\n        <ion-list>\n          Juntos cambiaremos la forma en la que ahorramos en Latinoamérica.\n        </ion-list>\n        <ion-list>\n          ¡Pronto nos pondremos en contacto contigo!\n        </ion-list>\n     </ion-card-content>\n     <a class=\"insta-content\" href=\"https://instagram.com/yo.ahorro?utm_medium=copy_link\"><img class=\"insta-icon\" src=\"/assets/instagram-yellow.png\" alt=\"insta-icon\"></a>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_main-screen_main-screen_module_ts-es2015.js.map