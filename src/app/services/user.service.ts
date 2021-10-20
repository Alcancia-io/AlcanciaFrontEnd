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


    async getUser(){
      return await this.userRepository.getUser();
    }

    getName(){
       const user = this.userRepository.getUser();
       return user;
    }

    async addUserData(theUser: UserModel){
      return await this.userRepository.addUserData(theUser);
    }
}





