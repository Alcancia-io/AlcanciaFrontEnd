import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

import { USER_NAME } from 'src/app/guards/auth.guard';
import { User } from '../models/user';
import { UserModel } from '../models/userModel';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {

  aUsername: string;

  constructor(
    private authService: AuthenticationService,
    private afAuth: AngularFireAuth,
    private storageService: StorageService,
    private router: Router,
    private userService: UserService,
    private alertController: AlertController
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
    this.presentAlertConfirm();
    
  }

  async getUser(){
    await this.userService.getUser().then(data => console.log('user data from the Main-screen' + data));
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estas seguro de que quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Confirmar',
          handler: async () => {
            await this.authService.logout();
          }
        }
      ]
    });

    await alert.present();
  }
}
