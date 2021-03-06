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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main-screen.page.html */ 45281);
/* harmony import */ var _main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-screen.page.scss */ 71542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 9356);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 60010);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 11000);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/auth.guard */ 47316);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/userModel */ 54462);










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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const username = yield this.storageService.getData(src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.USER_NAME);
            if (username.length > 0 && username[0]) {
                this.aUsername = username[0].value;
            }
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.logout();
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const userModel = new _models_userModel__WEBPACK_IMPORTED_MODULE_6__.UserModel();
            userModel.email = 'sebastianrestituyo@gmail.com';
            userModel.lastname = 'Restituyo';
            userModel.name = 'sebastian';
            yield this.userService.getUser(userModel).then(data => console.log('user data from the Main-scree' + data));
        });
    }
};
MainScreenPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
MainScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-main-screen',
        template: _raw_loader_main_screen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainScreenPage);



/***/ }),

/***/ 54462:
/*!*************************************!*\
  !*** ./src/app/models/userModel.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": function() { return /* binding */ UserModel; }
/* harmony export */ });
class UserModel {
}


/***/ }),

/***/ 66359:
/*!***********************************************!*\
  !*** ./src/app/repository/user.repository.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRepository": function() { return /* binding */ UserRepository; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userModel */ 54462);




const url = 'http://6f63-2806-2f0-6060-509-e166-ec16-9ec6-1088.ngrok.io';
const username = new _models_userModel__WEBPACK_IMPORTED_MODULE_0__.UserModel();
let UserRepository = class UserRepository {
    constructor(httpClientModule) {
        this.httpClientModule = httpClientModule;
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.httpClientModule.get(url + '/users').subscribe(data => {
                console.log('UserData:' + data);
            }, error => {
                console.log('ErrorMessage: ' + error);
            });
        });
    }
};
UserRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
UserRepository = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], UserRepository);



/***/ }),

/***/ 11000:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _repository_user_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/user.repository */ 66359);



let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUser(theUser) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.userRepository.getUser();
        });
    }
};
UserService.ctorParameters = () => [
    { type: _repository_user_repository__WEBPACK_IMPORTED_MODULE_0__.UserRepository }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 71542:
/*!***************************************************!*\
  !*** ./src/app/main-screen/main-screen.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-msg {\n  text-align: left;\n}\n\n.general-msg {\n  text-align: left;\n  font-size: large;\n}\n\n.small-msg {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUVBLGdCQUFBO0FBTEY7O0FBT0E7RUFDRSxlQUFBO0FBSkYiLCJmaWxlIjoibWFpbi1zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXJvd3tcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLndlbGNvbWUtbXNne1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZ2VuZXJhbC1tc2d7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5zbWFsbC1tc2d7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuIl19 */");

/***/ }),

/***/ 45281:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/main-screen.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" fullscreen>\n    <img src=\"/assets/taxi-robot.png\" alt=\"taxi-money-care\">\n    <ion-card-header>\n      <ion-card-subtitle>En construcci??n</ion-card-subtitle>\n      <ion-card-title>Hola <b>{{aUsername}},</b></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n    ??Gracias por registrarte a Alcanc??a! En unos d??as estaremos en contacto contigo para darte mas informaci??n de nuestra beta. ??Estamos locos porque formes parte de este proyecto!\n     <br>\n     <br>\n     <br>\n     <br>\n     <br>\n     <br>\n     <br>\n     <br>\n     <br>\n    </ion-card-content> \n\n<!--\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <div>\n              <h2 class=\"welcome-msg\">Hola <b>{{aUsername}}</b><br> </h2>\n            </div>\n            <div class=\"image\">\n\n            </div>\n          </ion-card-header>\n          <ion-card-content>\n            <div class=\"general-msg\">\n\n            </div>\n        </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n<!-- <ion-button  (click)=\"logout()\">Logout</ion-button> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_main-screen_main-screen_module_ts-es2015.js.map