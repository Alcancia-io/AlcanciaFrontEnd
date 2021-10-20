import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhitepaperPage } from './whitepaper.page';

const routes: Routes = [
  {
    path: '',
    component: WhitepaperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhitepaperPageRoutingModule {}
