import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../models/userModel";



const url = 'http://6f63-2806-2f0-6060-509-e166-ec16-9ec6-1088.ngrok.io';

const username = new UserModel();

@Injectable({
  providedIn: 'root',
})

export class UserRepository{
  constructor(
    private httpClientModule: HttpClient,
  ){}

  async getUser(){
    await this.httpClientModule.get(url + '/users').subscribe(
      data => {
        console.log('UserData:'+ data);
      }, error => {
        console.log('ErrorMessage: '+ error);
      }
    );
  }

  // async createUser(){
  //   await this.httpClientModule.post(url + '/users').subscribe(

  //   )
  // }



}







