import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserModel } from "../models/userModel";
import { ALCANCIA_SERVER_URL } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";
import { catchError } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { AppCookieService } from '../services/appcookie.service';
import { USER_NAME } from 'src/app/guards/auth.guard';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SectionStorageService } from '../services/sectionStorage.service';
import { CSRFToken } from "../models/csrftoken";
const username = new UserModel();

@Injectable({
  providedIn: 'root',
})

export class AuthenticationRepository{
  constructor(
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private appCookie: AppCookieService,
    private sectionStorageService: SectionStorageService,
    private httpClientModule: HttpClient
  ){}
 
  async getCookieToken(token: string): Promise<any>{ 
    return new Promise((resolver) => {
      let subscription: Subscription; 

      const payload = new CSRFToken();

      payload.idToken = token;

      subscription = this.httpClientModule.post(ALCANCIA_SERVER_URL + '/login/',payload)
          .subscribe(user => {
            if (subscription) {
              subscription.unsubscribe();
            }
            resolver( Object.assign(user));
            return user; 
          });
    });
  }
 
}