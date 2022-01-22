import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CreateOrder, ConfirmOrder, PaymentUrl } from "../models/paypalOrder";
import { ALCANCIA_SERVER_URL } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";  
 

@Injectable({
  providedIn: 'root',
})

export class PaypalRepository{
  constructor(
    private httpClientModule: HttpClient,
  ){}

  async createOrder(theOrder: CreateOrder): Promise<PaymentUrl>{
    return new Promise((resolver) => {
      let subscription: Subscription;
      subscription = this.httpClientModule.post(ALCANCIA_SERVER_URL + '/create-order', theOrder)
          .subscribe(reponse => {
            if (subscription) {
              subscription.unsubscribe();
            }
            resolver( Object.assign(reponse));
            return reponse;
          });
    });
  }
  
  async confirmOrder(theConfirmToken: ConfirmOrder): Promise<ConfirmOrder>{
    return new Promise((resolver) => {
      let subscription: Subscription;
      subscription = this.httpClientModule.post(ALCANCIA_SERVER_URL + '/deposits/execute-order', theConfirmToken)
          .subscribe(reponse => {
            if (subscription) {
              subscription.unsubscribe();
            }
            resolver(Object.assign(reponse));
          });
    });
  }
}