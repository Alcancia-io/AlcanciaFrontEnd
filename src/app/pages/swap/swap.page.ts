import { Component, OnInit } from '@angular/core';
import { PaypalService } from 'src/app/services/paypal.service';  
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { CreateOrder } from 'src/app/models/paypalOrder';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ExchangeService } from 'src/app/services/exchange.service'; 
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserModel } from '../../models/userModel';
import { User } from '../../models/user';
import { Exchange } from '../../models/exchange';
import { USER_NAME } from 'src/app/guards/auth.guard';
@Component({
  selector: 'app-swap',
  templateUrl: './swap.page.html',
  styleUrls: ['./swap.page.scss'],
  
})
 
export class SwapPage implements OnInit {

  Amount: number;
  FromCurrencyCode: string;
  ToCurrencyCode: string;
  ExchangeTotal: string = '0';
  userModel;
  userData: User;
  Fee:number = .06;
  originAmout:string = '0';
 
  

  
  constructor(
    private toastr:  ToastController,
    private alertController: AlertController, 
    private loadingController: LoadingController,
    private PaypalService: PaypalService,
    private router: Router,
    private exchangeService: ExchangeService,
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth

  ) { }
  
  ngOnInit() {
    this.updateUserSwapInteraction();
  }

  async updateUserSwapInteraction(){ 

    const userName = 'Sebastian';

    this.firestore
    .collection("users",ref=>ref.where("name","==", userName))
    .get()
    .subscribe(data=>data.forEach(user=> {
      this.userModel = user.data();   
      if(!this.userModel.swapScreenLoaded || this.userModel.swapScreenLoaded === false) {
        this.firestore.collection('users').doc(this.userModel.userId).update({
          'swapScreenLoaded': true,
        }); 
      }else{
        this.router.navigate(['/main-screen']);
      } 
    }));
    
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

  async calculateExchange(){
    if(this.Amount && this.FromCurrencyCode && this.ToCurrencyCode && this.FromCurrencyCode !== "BTC"){

      const exchange = new Exchange();
      exchange.FromCurrency = this.FromCurrencyCode;
      exchange.ToCurrency = this.ToCurrencyCode;

      this.exchangeService.exchangeCurrency(exchange).then((response) => {
        const result = this.Amount * response.conversion_rate; 
        this.originAmout = result.toString();
        const withFee = result * this.Fee;
        const finalResult = result - withFee;
        this.ExchangeTotal = Math.round(finalResult).toString();
      }).catch((error) => {
        console.log(error);
      }); 

    }
  }

  async createPaypalOrder( ){  
    if (this.Amount && this.FromCurrencyCode !== "BTC" && this.ToCurrencyCode === "USD" && this.ExchangeTotal !== '0') {
 
      const loading = await this.loadingController.create({
          message: 'Realizando Deposito!',
          spinner: 'crescent',
          showBackdrop: true
      });

      loading.present();
      const newPaypalOrder = new CreateOrder();
      newPaypalOrder.amount = Math.round(Number(this.originAmout)).toString();
      newPaypalOrder.currency_code = this.ToCurrencyCode;

      this.router.navigate(['/paypalpaymentoptions'], {state: {data: {newPaypalOrder}}});
      loading.dismiss();
    } else if (this.Amount && this.FromCurrencyCode === "BTC" && this.ToCurrencyCode ) {
       this.router.navigate(['/bitcoin-deposit'], { replaceUrl:true });
      
    } else {
      this.toast('Porfavor seleccionar el tipo de moneda y el monto', 'danger');
    }

    
  }


}
