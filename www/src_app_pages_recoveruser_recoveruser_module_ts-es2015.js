(self["webpackChunkAlcancia_io"] = self["webpackChunkAlcancia_io"] || []).push([["src_app_pages_recoveruser_recoveruser_module_ts"],{

/***/ 63955:
/*!********************************************!*\
  !*** ./src/app/models/revocerUserModel.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverUser": function() { return /* binding */ RecoverUser; }
/* harmony export */ });
class RecoverUser {
}


/***/ }),

/***/ 95380:
/*!*****************************************************************!*\
  !*** ./src/app/pages/recoveruser/recoveruser-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveruserPageRoutingModule": function() { return /* binding */ RecoveruserPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _recoveruser_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recoveruser.page */ 38402);




const routes = [
    {
        path: '',
        component: _recoveruser_page__WEBPACK_IMPORTED_MODULE_0__.RecoveruserPage
    }
];
let RecoveruserPageRoutingModule = class RecoveruserPageRoutingModule {
};
RecoveruserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecoveruserPageRoutingModule);



/***/ }),

/***/ 97233:
/*!*********************************************************!*\
  !*** ./src/app/pages/recoveruser/recoveruser.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveruserPageModule": function() { return /* binding */ RecoveruserPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _recoveruser_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recoveruser-routing.module */ 95380);
/* harmony import */ var _recoveruser_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recoveruser.page */ 38402);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 39258);








let RecoveruserPageModule = class RecoveruserPageModule {
};
RecoveruserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _recoveruser_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecoveruserPageRoutingModule
        ],
        declarations: [_recoveruser_page__WEBPACK_IMPORTED_MODULE_1__.RecoveruserPage]
    })
], RecoveruserPageModule);



/***/ }),

/***/ 38402:
/*!*******************************************************!*\
  !*** ./src/app/pages/recoveruser/recoveruser.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveruserPage": function() { return /* binding */ RecoveruserPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_recoveruser_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recoveruser.page.html */ 38111);
/* harmony import */ var _recoveruser_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recoveruser.page.scss */ 36253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 11000);
/* harmony import */ var _models_revocerUserModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/revocerUserModel */ 63955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sectionStorage.service */ 14314);









let RecoveruserPage = class RecoveruserPage {
    constructor(userService, router, sectionStorage) {
        this.userService = userService;
        this.router = router;
        this.sectionStorage = sectionStorage;
        this.errorMessages = {
            name: [
                { type: 'required', message: "Nombre es requerido" }
            ],
            surname: [
                { type: 'required', message: "Apellidos es requerido" }
            ]
        };
    }
    ngOnInit() {
        this.exform = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            'surname': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
    }
    recoverUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.exform.value.name && this.exform.value.surname) {
                const userData = new _models_revocerUserModel__WEBPACK_IMPORTED_MODULE_3__.RecoverUser();
                userData.name = this.exform.value.name;
                userData.surname = this.exform.value.surname;
                yield this.userService.recoverUser(userData).then(resp => {
                    this.sectionStorage.saveData("Username", userData.name);
                    this.sectionStorage.saveData("Surname", userData.name);
                    this.router.navigate(['/']);
                });
            }
        });
    }
};
RecoveruserPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_sectionStorage_service__WEBPACK_IMPORTED_MODULE_4__.SectionStorageService }
];
RecoveruserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-recoveruser',
        template: _raw_loader_recoveruser_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recoveruser_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecoveruserPage);



/***/ }),

/***/ 36253:
/*!*********************************************************!*\
  !*** ./src/app/pages/recoveruser/recoveruser.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  width: 100%;\n}\n\n.form {\n  width: 375px;\n}\n\n.button-row {\n  float: right;\n}\n\n.arrow-btn {\n  float: right;\n  margin: 25px;\n}\n\n.welcome-msg {\n  position: relative;\n  text-align: left;\n  margin-top: 10%;\n  font-size: 20px;\n}\n\n.colomn {\n  text-align: center;\n}\n\n.item-content {\n  --ion-item-background:#121212;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY292ZXJ1c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNJLGtCQUFBO0FBQ047O0FBQ0E7RUFDSSw2QkFBQTtBQUVKIiwiZmlsZSI6InJlY292ZXJ1c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm17IFxuICAgIHdpZHRoOiAzNzVweDtcbn1cblxuLmJ1dHRvbi1yb3d7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmFycm93LWJ0bntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAyNXB4O1xuICB9XG5cblxuICAud2VsY29tZS1tc2d7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5jb2xvbW57XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbi5pdGVtLWNvbnRlbnR7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiMxMjEyMTI7XG4gICAgXG4gIH0iXX0= */");

/***/ }),

/***/ 38111:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recoveruser/recoveruser.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-grid>\n    <ion-row> \n          <div  class=\"welcome-msg ion-align-items-center\">\n            <!-- class=\"welcome-msg\" -->\n            Hola <b>Usuario,</b> <br>\n            <small>Recuerdanos tu nombre y apellidos</small>\n          </div>  \n    </ion-row>\n    <ion-row class=\"ion-align-items-center\"> \n            <form [formGroup]=\"exform\" class=\"form\">\n              <br/> \n              <br/>\n              <ion-item class=\"item-content\">\n                <ion-input formControlName=\"name\" position=\"floating\" placeholder=\"Nombre\" type=\"text\"></ion-input>\n              </ion-item>\n              <div *ngFor=\"let error of errorMessages.name\">\n                <ng-container *ngIf=\"exform.get('name').hasError(error.type) && (exform.get('name').dirty || exform.get('name').touched)\">\n                  <small class=\"error-message\">{{error.message}}</small>\n                </ng-container>\n              </div>\n              <br/>\n              <br/> \n              <br/>\n              <ion-item class=\"item-content\"> \n                <ion-input formControlName=\"surname\" position=\"floating\" placeholder=\"Apellidos\" type=\"text\"></ion-input>\n              </ion-item>\n              <div *ngFor=\"let error of errorMessages.surname\">\n                <ng-container *ngIf=\"exform.get('surname').hasError(error.type) && (exform.get('surname').dirty || exform.get('surname').touched)\">\n                  <small class=\"error-message\">{{error.message}}</small>\n                </ng-container>\n              </div> \n            </form>\n  \n    </ion-row>\n    <br/> \n    <br/> \n    <ion-row class=\"ion-align-items-center\"> \n      <ion-col class=\"colomn\">\n        <ion-button class=\"ion-button\" (click)=\"recoverUser()\" (keyup.enter)=\"recoverUser()\">Guardar</ion-button>\n      </ion-col> \n    </ion-row>\n  </ion-grid>  \n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recoveruser_recoveruser_module_ts-es2015.js.map