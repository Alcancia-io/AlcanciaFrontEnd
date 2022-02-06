import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavPage } from './sidenav.page';

const routes: Routes = [
  {
    path: 'nav',
    component: SidenavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../main-screen/main-screen.module').then(m => m.MainScreenPageModule) 
      },
      {
        path: 'transaction',
        loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsPageModule) 
      }, 
      {
        path: 'swap',
        loadChildren: () => import('../swap/swap.module').then(m => m.SwapPageModule) 
      },
      {
        path: '',
        redirectTo: '/nav/home',
        pathMatch: 'full' 
      }
    ]
  },
  {
    path: '',
    redirectTo: '/nav/home',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SidenavPageRoutingModule {}