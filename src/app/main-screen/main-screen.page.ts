import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

import { USER_NAME } from 'src/app/guards/auth.guard';
import { User } from '../models/user';
import { UserModel } from '../models/userModel';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {

  aUsername: string;

  constructor(
    private authService: AuthenticationService,
    private storageService: StorageService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserName();
     
  }

  async getUserName(){
    const username =  await this.storageService.getData(USER_NAME); 
    if (username.length > 0 && username[0]) {
      this.aUsername = username[0].value;
    }
  }
  async logout() {
    await this.authService.logout();
  }

  async getUser(){
    await this.userService.getUser().then(data => console.log('user data from the Main-screen' + data));
  }

}
