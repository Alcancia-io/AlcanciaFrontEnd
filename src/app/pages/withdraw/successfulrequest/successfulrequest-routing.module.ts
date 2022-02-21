import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessfulrequestPage } from './successfulrequest.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessfulrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessfulrequestPageRoutingModule {}
