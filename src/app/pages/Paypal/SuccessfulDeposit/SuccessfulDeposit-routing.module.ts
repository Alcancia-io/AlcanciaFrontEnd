import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessfulComponent } from './SuccessfulDeposit.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessfulComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccefulDepositRoutingModule {}