import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction.model';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent implements OnInit {
	@Input() transaction: Transaction;
  constructor() { }

  ngOnInit() {}

}
