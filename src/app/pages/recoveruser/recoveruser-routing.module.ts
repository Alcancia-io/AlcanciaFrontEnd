import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoveruserPage } from './recoveruser.page';

const routes: Routes = [
  {
    path: '',
    component: RecoveruserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoveruserPageRoutingModule {}
