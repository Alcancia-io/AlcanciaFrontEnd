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

    // async getUser(): Promise<any>{ 
    //   const userName =  this.appCookie.get(USER_NAME); 
    //   return new Promise((resolver) => {
    //     let subscription: Subscription;

    //     this.fireAuth.authState.subscribe(user => {
    //       subscription = this.firestore
    //       .collection("users",ref=>ref.where('userId','==', user.uid))
    //       .get()
    //       .subscribe(data=>data.forEach(user=> {  
    //         if (subscription) {
    //             subscription.unsubscribe();
    //         }  
    //         resolver( Object.assign(user)); 
    //       }));
    //     }); 
       
    //   });
    // }

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

  // async addUserData(theUser: UserModel) {
  //   return this.httpClientModule.post<any>(ALCANCIA_SERVER_URL + '/users', theUser).subscribe(
  //     user => {
  //       console.log('user created' + user);
  //     }, error => {
  //       console.log('ErrorMessage', error);
  //     }
  //   );
  // }
}