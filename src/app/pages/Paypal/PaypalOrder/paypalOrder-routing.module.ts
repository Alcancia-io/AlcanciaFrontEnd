import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaypalOrderPage } from './paypalOrder.page';

const routes: Routes = [
  {
    path: '',
    component: PaypalOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaypalOrderRoutingModule {}