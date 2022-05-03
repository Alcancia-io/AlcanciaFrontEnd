import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';

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
  userId;
  aTotalInvestment: number = 0;
  lastBalance: string;
  transactionHistory: Array<any>;
  transactionAvailable: boolean = true;
  
  constructor(
    private authService: AuthenticationService,
    private afAuth: AngularFireAuth,
    private storageService: StorageService,
    private router: Router,
    private userService: UserService,
    private alertController: AlertController,
    private appCookie: AppCookieService,
    private transactionService: TransactionService,
    private sectionStorageService: SectionStorageService, 
  ) { }

  ngOnInit() { 
    this.doFetch();
  }

  //Everytime the page is opened this is runned 
  ionViewWillEnter() {
    this.doFetch();
  }

  async getUserData(){
   
     this.aUsername = this.sectionStorageService.getData("Username"); 
     this.userId =  this.sectionStorageService.getData("UserId");
     await this.userService.getUserBalance(this.userId).then(userBalance => {
       console.log(userBalance);
       this.aTotalInvestment = userBalance.balance; 
       const lastUpdate = new Date(userBalance.lastUpdate);
       this.lastBalance = lastUpdate.toString().replace('GMT-0400 (Atlantic Standard Time)','');
     }); 
  }
 
  deposit(){ 
    this.router.navigate(['/nav/swap']); 
  }
     
    
  async logout() {
    this.presentAlertConfirm();
    
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.doFetch();
    setTimeout(() => {
      console.log('Async operation has ended');
      
      event.target.complete();
    }, 2000);
  }

  doFetch(){
    this.getUserData();
    this.getUserTransactions();
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
    this.router.navigate(['/nav/transaction']);
  }

  requestWithdraw(){
    this.router.navigate(['/nav/withdraw']);
  }


  getUserTransactions(){
    this.transactionService.getUserTransactions().then((response) => { 
      if(response.length == 0){
        this.transactionAvailable = false;
      }else{
        response.forEach(function (item) {  
          const createdDate = new Date(item.create_time);  
          item.create_time =  createdDate.toString().replace('GMT-0400 (Atlantic Standard Time)',''); 
        });  
        this.transactionHistory = response;
      } 
    }).catch((error) => {
      console.log(error);
    }); 
  }
}
