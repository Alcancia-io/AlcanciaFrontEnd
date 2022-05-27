import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../models/Transaction.model';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent implements OnInit {
	@Input() transaction: Transaction;

  constructor() { }

  ngOnInit() {}

}
