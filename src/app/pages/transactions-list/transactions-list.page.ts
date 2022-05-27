import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/Transaction.model';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.page.html',
  styleUrls: ['./transactions-list.page.scss'],
})
export class TransactionsListPage implements OnInit {
	userTransactions: Transaction[];
	showTransactionModal = false;
	currentTransaction: Transaction;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
		this.transactionService.getAllUserTransactions().subscribe(({ data, loading }) => {
			this.userTransactions = data['getAllUserTransactions'];
		});
  }

	ngOnDestroy() {
		console.log('hola mundo en el destroy');
		this.showTransactionModal = false;
	}

	toggleTransactionModal (currentTransaction: Transaction) {
		this.showTransactionModal = !this.showTransactionModal;
		this.currentTransaction = currentTransaction;
	}

}
