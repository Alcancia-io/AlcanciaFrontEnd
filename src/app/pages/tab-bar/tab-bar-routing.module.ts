import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabBarPage,
    children: [
      {
        path: 'fdafadf',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../main-screen/main-screen.module').then(m => m.MainScreenPageModule)
          }
        ]
      },
      {
        path: 'sdfsfsdff',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../transactions/transactions.module').then(m => m.TransactionsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/adsfadf',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/asdfsd',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule { }