import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ExchangeService } from 'src/app/services/exchange.service'; 
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserModel } from '../../models/userModel';
import { User } from '../../models/user';
import { Exchange } from '../../models/exchange';
import { UserService } from '../../services/user.service';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-swap',
  templateUrl: './swap.page.html',
  styleUrls: ['./swap.page.scss'],
  
})
 
export class SwapPage implements OnInit {

  Amount: number;
  FromCurrencyCode: string;
  ToCurrencyCode: string = "USD";
  ExchangeTotal: string = '0';
  userModel;
  userData: User;
  Fee:number = .06;
  originAmout:string = '0';
 
  

  
  constructor(
    private toastr:  ToastController,
    private alertController: AlertController, 
    private loadingController: LoadingController,
    private router: Router,
    private exchangeService: ExchangeService,
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private userService: UserService
  ) { }
  
  ngOnInit() {
    this.updateUserSwapInteraction();
  }

  async updateUserSwapInteraction(){ 
    this.userService.getUser().then(user => {
      if(!user.swapScreenLoaded || user.swapScreenLoaded === false){
        this.firestore.collection('users').doc(user.userId).update({
          'swapScreenLoaded': true,
        }); 
      }
    });
  } 
     
  openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      href: href,
    }).click();
  }

  async toast(message, status) {

    const toast = await this.toastr.create({
       message: message,
       position: 'top',
       color: status,
       duration: 2000
    });
 
    toast.present();
   }

   backtoMenu(){
     this.router.navigate(['/']);
   }

  async calculateExchange(){
    if(this.Amount && this.FromCurrencyCode && this.ToCurrencyCode && this.FromCurrencyCode !== "BTC"){

      const exchange = new Exchange();
      exchange.FromCurrency = this.FromCurrencyCode;
      exchange.ToCurrency = this.ToCurrencyCode;

      this.exchangeService.exchangeCurrency(exchange).then((response) => {
        const result: number = this.Amount * response.conversion_rate; 
        this.originAmout = result.toString();
        const withFee: number = result * this.Fee;
        const finalResult = Number.parseFloat(result.toString()).toFixed(2);
        this.ExchangeTotal =  finalResult.toString();
      }).catch((error) => {
        console.log(error);
      }); 

    }
  }
}
