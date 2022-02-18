import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
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

  async createOrder(theOrder: CreateOrder): Promise<any>{
    return new Promise((resolver) => {
   this.httpClientModule.post(ALCANCIA_SERVER_URL + '/deposits/create-order', theOrder)
          .subscribe(reponse => {
             
            return reponse;
          });
    });
  }
  
 
}