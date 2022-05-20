import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainScreenPageRoutingModule } from './main-screen-routing.module';

import { MainScreenPage } from './main-screen.page';
import { MainComponentsModule } from '../../components/main-components.module';
import { ComponentsModule } from '../../components/components.module';
import { TransactionDetailPage } from '../transaction-detail/transaction-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainComponentsModule,
    MainScreenPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MainScreenPage, TransactionDetailPage]
})
export class MainScreenPageModule {}
