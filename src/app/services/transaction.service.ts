import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { CreateOrder, ConfirmOrder } from "../models/paypalOrder";
import { TransactionRepository } from "../repository/transaction.repository";

@Injectable({
  providedIn: 'root'
})

export class TransactionService { 

  constructor(
    private transactionRepository: TransactionRepository
    ){  }

    async getUserTransactions() {
        return await this.transactionRepository.getUserTransactions();
    } 
} 