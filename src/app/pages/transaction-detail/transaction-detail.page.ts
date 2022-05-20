import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction.model';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.page.html',
  styleUrls: ['./transaction-detail.page.scss'],
})
export class TransactionDetailPage implements OnInit {
	@Input() transaction: Transaction;
  constructor() { }

  ngOnInit() {
  }

}
