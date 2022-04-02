const {Builder, By, Key, until} = require('selenium-webdriver');
 import {loginSuccess, loginWithOutCredentials, LoginWrongPassword, LoginWrongEmail} from  "./login-test";
 import {registerSuccess, registerPasswordNotMatch, registerEmailAlreadyExist} from  "./register-test";

(async function testRun() {
      loginSuccess();
      loginWithOutCredentials();
      LoginWrongPassword();
      LoginWrongEmail()();

      registerSuccess();
      registerPasswordNotMatch();
      registerEmailAlreadyExist();
  })(); 
