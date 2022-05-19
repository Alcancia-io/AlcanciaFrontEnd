import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { CreateOrder, ConfirmOrder } from "../models/paypalOrder";
import { TransactionRepository } from "../repository/transaction.repository";
import { WithDrawModel } from '../models/withdraw';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

import { Transaction } from '../models/Transaction.model';


@Injectable({
  providedIn: 'root'
})

export class TransactionService { 
  constructor(
    private transactionRepository: TransactionRepository,
		private apollo: Apollo
    ){  }

		userTransactions() {
			// return this.apollo.watchQuery<any>({
			// 	query: GET_USER_TRANSACTION,
			// 	variables: {
			// 		transactionId: "FmwiRyMThaEtejAHwMlG",
			// 		userId: "MMHoNsa1JxhB4hWN2sHGRb4ir4m2"
			// 	}
			// }).valueChanges;
		}

    async getUserTransactions() {
        return await this.transactionRepository.getUserTransactions();
    } 

    async requestWithdraw(withDrawData: WithDrawModel){
      return await this.transactionRepository.requestWithdraw(withDrawData);
    }
} 
