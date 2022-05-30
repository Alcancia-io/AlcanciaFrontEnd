import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AuthorizeGuard, NegateAuthorizeGuard } from './guards/authorize.guard';
import { SwapGuard } from './guards/swap.guard';
import { RecoverUserGuard } from './guards/recoveruser.guard';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule),
    canActivate: [NegateAuthorizeGuard]
  },
  {
    path: 'bitcoin-deposit',
    loadChildren: () => import('./pages/bitcoin-deposit/bitcoin-deposit.module').then( m => m.BitcoinDepositPageModule),
    canLoad: [AuthorizeGuard,  RecoverUserGuard]
  },
  {
    path: 'paypalOrder/successfull',
    loadChildren: () => import('./pages/Paypal/SuccessfulDeposit/SuccessfulDeposit-routing.module').then( m => m.SuccefulDepositRoutingModule),
    canLoad: [AuthorizeGuard, RecoverUserGuard]
  }, 
  // {
  //   path: 'paypalpaymentoptions',
  //   loadChildren: () => import('./pages/paypalpaymentoptions/paypalpaymentoptions.module').then( m => m.PaypalpaymentoptionsPageModule),
  //   canLoad: [AuthorizeGuard]
  // },
  {
    path: 'paymenterror',
    loadChildren: () => import('./pages/paymenterror/paymenterror.module').then( m => m.PaymenterrorPageModule),
    canLoad: [AuthorizeGuard, RecoverUserGuard]
  },
  {
    path: 'recoveruser',
    loadChildren: () => import('./pages/recoveruser/recoveruser.module').then( m => m.RecoveruserPageModule),
    canLoad: [AuthorizeGuard]
  },
  {
    path: 'withdraw/successfull',
    loadChildren: () => import('./pages/withdraw/successfulrequest/successfulrequest.module').then( m => m.SuccessfulrequestPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule),
    canActivate: [NegateAuthorizeGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NegateAuthorizeGuard]
  },
  //{
  //  path: '',
  //  loadChildren: () => import('./pages/sidenav/sidenav.module').then( m => m.SidenavPageModule),
  //  // TODO: Toggle comment below to reenable guard
  //  //canLoad: [AuthorizeGuard, RecoverUserGuard]
  //},
  {
    path: '',
    loadChildren: () => import('./pages/tabs-bar/tabs-bar.module').then( m => m.TabsBarPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
