import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../models/userModel";
import { ALCANCIA_SERVER_URL } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";
import { catchError } from "rxjs/operators";

const username = new UserModel();

@Injectable({
  providedIn: 'root',
})

export class UserRepository{
  constructor(
    private httpClientModule: HttpClient,
  ){}

  async getUser(): Promise<UserModel>{
    return new Promise((resolver) => {
      let subscription: Subscription;
      subscription = this.httpClientModule.get(ALCANCIA_SERVER_URL + '/users')
          .subscribe(user => {
            if (subscription) {
              subscription.unsubscribe();
            }
            resolver( Object.assign(new UserModel(), user));
          });
    });
  }

  async addUserData(theUser: UserModel) {
    return this.httpClientModule.post<any>(ALCANCIA_SERVER_URL + '/users', theUser).subscribe(
      user => {
        console.log('user created' + user);
      }, error => {
        console.log('ErrorMessage', error);
      }
    );
  }

  // async createUser(){
  //   await this.httpClientModule.post(url + '/users').subscribe(

  //   )
  // }



}







