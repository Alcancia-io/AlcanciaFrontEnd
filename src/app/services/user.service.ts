import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { UserModel } from "../models/userModel";
import { UserRepository } from "../repository/user.repository";

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
    // async addUserData(theUser: UserModel){
    //   return await this.userRepository.addUserData(theUser);
    // }
}





