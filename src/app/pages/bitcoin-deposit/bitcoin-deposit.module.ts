import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitcoinDepositPageRoutingModule } from './bitcoin-deposit-routing.module';

import { BitcoinDepositPage } from './bitcoin-deposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitcoinDepositPageRoutingModule
  ],
  declarations: [BitcoinDepositPage]
})
export class BitcoinDepositPageModule {}
