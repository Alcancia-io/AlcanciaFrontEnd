import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsListPageRoutingModule } from './transactions-list-routing.module';

import { TransactionsListPage } from './transactions-list.page';

import { TransactionListItemComponent } from '../../components/transaction-list-item/transaction-list-item.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsListPageRoutingModule,
		ComponentsModule,
  ],
  declarations: [
		TransactionsListPage,
	]
})
export class TransactionsListPageModule {}
