import { Injectable } from '@angular/core';
import { AppCookieService } from './appcookie.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
const TOKEN_KEY = 'the-token';

@Injectable()
export class TokenService {

    constructor(private fireAuth: AngularFireAuth) {
    }

    setToken(token: string) { 
      // Save data to sessionStorage
      sessionStorage.setItem(TOKEN_KEY, token ); 
    }

    getToken(){
      return sessionStorage.getItem(TOKEN_KEY);  
    }
    
    async updateToken(): Promise<Boolean>{
      return new Promise((resolve) => {
        let subscription: Subscription;
        subscription = this.fireAuth.idToken
            .subscribe(token => {
              if (subscription) {
                subscription.unsubscribe();
              }
              const tokenUpdated = token ? true : false;
              resolve(tokenUpdated);
            });
      });
    }

    async updateToken(): Promise<Boolean>{
      return new Promise((resolve) => {
        let subscription: Subscription;
        subscription = this.fireAuth.idToken
            .subscribe(token => {
              if (subscription) {
                subscription.unsubscribe();
              }
              const tokenUpdated = token ? true : false;
              resolve(tokenUpdated);
            });
      });
    }

    async isUserAuthenticated(){
      let currentUser = this.fireAuth.currentUser;
      console.log(currentUser);
    }

}
