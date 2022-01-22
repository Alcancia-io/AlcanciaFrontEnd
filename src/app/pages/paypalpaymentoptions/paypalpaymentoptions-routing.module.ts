import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaypalpaymentoptionsPage } from './paypalpaymentoptions.page';

const routes: Routes = [
  {
    path: '',
    component: PaypalpaymentoptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaypalpaymentoptionsPageRoutingModule {}
