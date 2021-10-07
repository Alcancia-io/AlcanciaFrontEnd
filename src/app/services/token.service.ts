import { Injectable } from '@angular/core';
import { AppCookieService } from './appcookie.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
const TOKEN_KEY = 'the-token';

@Injectable()
export class TokenService {

    constructor(private appCookie: AppCookieService, private fireAuth: AngularFireAuth) {
    }

    setToken(token: string) {
      this.appCookie.set(TOKEN_KEY, token);
    }

    getToken(){
      this.appCookie.get(TOKEN_KEY);
    }

    isTokenExpired(): boolean{
      let theToken = this.fireAuth.idToken;

      if(theToken){
        return false;
      }

      return true;
    }

    async isUserAuthenticated(){
      let currentUser = this.fireAuth.currentUser;
      console.log(currentUser);
    }

}
