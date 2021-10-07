import { Injectable } from "@angular/core";
import { UserModel } from "../models/userModel";
import { UserRepository } from "../repository/user.repository";

@Injectable({
  providedIn: 'root'
})

export class UserService {



  constructor(
    private userRepository: UserRepository
    ){  }


    async getUser(theUser: UserModel){
      return await this.userRepository.getUser();
    }
}





