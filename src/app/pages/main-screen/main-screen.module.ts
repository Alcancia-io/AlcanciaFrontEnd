import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainScreenPageRoutingModule } from './main-screen-routing.module';

import { MainScreenPage } from './main-screen.page';
import { MainComponentsModule } from '../../components/main-components.module';
import { TransactionDetailComponent } from '../../components/transaction-detail/transaction-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainComponentsModule,
    MainScreenPageRoutingModule
  ],
  declarations: [MainScreenPage, TransactionDetailComponent]
})
export class MainScreenPageModule {}
