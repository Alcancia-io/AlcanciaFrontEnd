import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { UserModel } from "../models/userModel";
import { UserRepository } from "../repository/user.repository";
import { RecoverUser } from '../models/revocerUserModel';

@Injectable({
  providedIn: 'root'
})

export class UserService { 
  
  constructor(
    private userRepository: UserRepository
    ){  } 

    async getUser(): Promise<any>{   
      return await this.userRepository.getUser();
    } 

    async recoverUser(theUser: RecoverUser): Promise<any>{
      return await this.userRepository.recoverUserInfo(theUser);
    }
    // async addUserData(theUser: UserModel){
    //   return await this.userRepository.addUserData(theUser);
    // }
}





