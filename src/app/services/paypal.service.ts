import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { CreateOrder, ConfirmOrder } from "../models/paypalOrder";
import { PaypalRepository } from "../repository/paypal.respository";

@Injectable({
  providedIn: 'root'
})

export class PaypalService { 

  constructor(
    private paypalRespository: PaypalRepository
    ){  }

    async createOrder(theOrder: CreateOrder) {
        return await this.paypalRespository.createOrder(theOrder);
    }

    async confirmOrder(theConfirmOrder: ConfirmOrder) {
        return await this.paypalRespository.confirmOrder(theConfirmOrder);
    } 
} 