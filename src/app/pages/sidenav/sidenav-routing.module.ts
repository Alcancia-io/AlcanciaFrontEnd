import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/app/guards/authorize.guard';

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
        path: 'withdraw',
        loadChildren: () => import('../withdraw/withdraw.module').then(m => m.WithdrawPageModule) 
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('../edit-profile/edit-profile.module').then( m => m.EditProfilePageModule),
        canActivate: [AuthorizeGuard]
      },
      {
        path: '',
        redirectTo: '/nav/home',
        pathMatch: 'full',
        canActivate: [AuthorizeGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/nav/home',
    pathMatch: 'full',
    canActivate: [AuthorizeGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SidenavPageRoutingModule {}
