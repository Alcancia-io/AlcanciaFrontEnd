import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitcoinDepositPage } from './bitcoin-deposit.page';

const routes: Routes = [
  {
    path: '',
    component: BitcoinDepositPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitcoinDepositPageRoutingModule {}
