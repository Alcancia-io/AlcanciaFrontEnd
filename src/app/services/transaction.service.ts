import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { CreateOrder, ConfirmOrder } from "../models/paypalOrder";
import { TransactionRepository } from "../repository/transaction.repository";
import { WithDrawModel } from '../models/withdraw';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

import { Transaction } from '../models/Transaction.model';
import { getAllUserTransactions } from '../graphql/queries';


@Injectable({
  providedIn: 'root'
})

export class TransactionService { 
  constructor(
    private transactionRepository: TransactionRepository,
		private apollo: Apollo
    ){  }

		getAllUserTransactions() {
			return this.apollo.watchQuery<Transaction>({
				query: getAllUserTransactions,
				variables: {
					userId: "MMHoNsa1JxhB4hWN2sHGRb4ir4m2"
				}
			}).valueChanges;
		}

    async getUserTransactions() {
        return await this.transactionRepository.getUserTransactions();
    } 

    async requestWithdraw(withDrawData: WithDrawModel){
      return await this.transactionRepository.requestWithdraw(withDrawData);
    }
} 
