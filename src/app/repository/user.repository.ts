import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserModel } from "../models/userModel";
import { ALCANCIA_SERVER_URL } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";
import { catchError, subscribeOn } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { AppCookieService } from '../services/appcookie.service';
import { USER_NAME } from 'src/app/guards/auth.guard';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SectionStorageService } from '../services/sectionStorage.service';
import { RecoverUser } from '../models/revocerUserModel';
import {UserBalance} from '../models/userBalance';
const username = new UserModel();

@Injectable({
  providedIn: 'root',
})

export class UserRepository{
  constructor(
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private appCookie: AppCookieService,
    private sectionStorageService: SectionStorageService,
    private httpClientModule: HttpClient
  ){}

  async getUser(): Promise<any>{

    const userId = this.sectionStorageService.getData("UserId");
    return new Promise((resolver) => {
      let subscription: Subscription;
      subscription = this.httpClientModule.get(ALCANCIA_SERVER_URL + '/users/' +userId )
          .subscribe(user => {
            if (subscription) {
              subscription.unsubscribe();
            }
            resolver( Object.assign(user));
            return user; 
          });
    });
  }

  async recoverUserInfo(theUser: RecoverUser) {
    return this.httpClientModule.put<any>(ALCANCIA_SERVER_URL + '/users', theUser).subscribe(
      user => {
        return true;
      }, error => {
        console.log('ErrorMessage', error);
      }
    );
  } 

  async getUserBalance(userId: string):Promise<UserBalance> {
    return new Promise((resolver) => {
      let subscription: Subscription; 
      return this.httpClientModule.get<UserBalance>(`${ALCANCIA_SERVER_URL }/users/${userId}/balance`).subscribe(balance => {
        if(subscription){
          subscription.unsubscribe();
        }

        resolver(Object.assign(balance));
        return balance;
      });
    });
   
  }
}
