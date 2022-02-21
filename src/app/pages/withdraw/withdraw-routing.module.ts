import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawPage } from './withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawPage
  },
  {
    path: 'successfulrequest',
    loadChildren: () => import('./successfulrequest/successfulrequest.module').then( m => m.SuccessfulrequestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawPageRoutingModule {}
