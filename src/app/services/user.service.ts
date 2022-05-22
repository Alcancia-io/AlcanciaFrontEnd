import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { UserModel } from "../models/userModel";
import { UserRepository } from "../repository/user.repository";
import { RecoverUser } from '../models/revocerUserModel';
import { UserBalance } from '../models/userBalance';
import { UserUpdate, UserLogin } from '../models/user';
import { Apollo } from "apollo-angular";
import { loginQuery } from "../graphql/queries";

@Injectable({
  providedIn: 'root'
})

export class UserService { 
  
  constructor(
    private userRepository: UserRepository,
    private apollo: Apollo
    ) {  
    } 

    login(email: string, password: string): Promise<UserLogin> {
      return new Promise((res, rej) => {
        this.apollo.watchQuery({query: loginQuery}).
          valueChanges.subscribe(({data, error}) => {
          if (error) return rej(error);
          return res({ ...data as UserLogin });
        }) ;
      });

    }

    async getUser(): Promise<any>{
      return await this.userRepository.getUser();
    } 

    async updateCurrentUser(update: UserUpdate): Promise<any> { 
      return await this.userRepository.updateCurrentUser(update);
    }

    async recoverUser(theUser: RecoverUser): Promise<any>{
      return await this.userRepository.recoverUserInfo(theUser);
    }

    async getUserBalance(userId: string): Promise<any>{
      return await this.userRepository.getUserBalance(userId);
    }
    // async addUserData(theUser: UserModel){
    //   return await this.userRepository.addUserData(theUser);
    // }
}





