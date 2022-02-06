import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';

import { USER_NAME } from 'src/app/guards/auth.guard';
import { User } from '../../models/user';
import { UserModel } from '../../models/userModel';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AppCookieService } from '../../services/appcookie.service';
import { TransactionService } from '../../services/transaction.service';
import { SectionStorageService } from '../../services/sectionStorage.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {

  aUsername;
  aTotalInvestment: number = 0;
  transationHistory: Array<any>;
  constructor(
    private authService: AuthenticationService,
    private afAuth: AngularFireAuth,
    private storageService: StorageService,
    private router: Router,
    private userService: UserService,
    private alertController: AlertController,
    private appCookie: AppCookieService,
    private transactionService: TransactionService,
    private sectionStorageService: SectionStorageService
  ) { }

  ngOnInit() { 
    this.getUserData(); 
    this.getUserTransactions();
  }

  async getUserData(){
   
     this.aUsername = this.sectionStorageService.getData("Username"); 
      await this.userService.getUser().then(user => {  
        this.aTotalInvestment = user.balance;
      });
    
  }
 
  deposit(){ 
    this.router.navigate(['/swap']); 
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

  goToTransactionPage(){
    this.router.navigate(['/nav/transaction'])
  }


  getUserTransactions(){
    this.transactionService.getUserTransactions().then((response) => {
      console.log(response);
      response.forEach(function (item) {  
        const createdDate = new Date(item.create_time);  
        item.create_time =  createdDate.toString().replace('GMT-0400 (Atlantic Standard Time)',''); 
      });  
      this.transationHistory = response;
    }).catch((error) => {
      console.log(error);
    }); 
  }
}
