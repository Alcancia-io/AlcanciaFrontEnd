import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { TransactionRepository } from "../repository/transaction.repository";
import { WithDrawModel } from '../models/withdraw';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

import { Transaction, UserTransactionResponse } from '../models/Transaction.model';
import { getUserTransaction } from '../graphql/queries';


@Injectable({
  providedIn: 'root'
})

export class TransactionService { 
  constructor(
    private transactionRepository: TransactionRepository,
		private apollo: Apollo
    ){  }

		getUserTransaction() {
			return this.apollo.watchQuery<UserTransactionResponse>({
				query: getUserTransaction,
				variables: {
					transactionId: "Np9zDuxc9BJAIOChTSo3",
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
