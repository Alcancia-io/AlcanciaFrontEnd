import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AuthorizeGuard, NegateAuthorizeGuard } from './guards/authorize.guard';
import { SwapGuard } from './guards/swap.guard';
import { RecoverUserGuard } from './guards/recoveruser.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    // canLoad: [IntroGuard], //Checking if we should show the introduction or forward to inside.
    canLoad: [NegateAuthorizeGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule),
    canLoad: [NegateAuthorizeGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule),
    canLoad: [NegateAuthorizeGuard]
  },  
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    canLoad: [NegateAuthorizeGuard]
  },
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  
  // {
  //   path: 'swap',
  //   loadChildren: () => import('./pages/swap/swap.module').then( m => m.SwapPageModule),
  //   canLoad: [SwapGuard,AuthorizeGuard]
  // },
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
    path: 'tabbar',
    loadChildren: () => import('./pages/tab-bar/tab-bar.module').then(m => m.TabBarPageModule),
    canLoad: [AuthorizeGuard, RecoverUserGuard]
  },
  {
    path: '',
    loadChildren: () => import('./pages/sidenav/sidenav.module').then( m => m.SidenavPageModule),
    canLoad: [AuthorizeGuard, RecoverUserGuard]
  }, 
  {
    path: 'paymenterror',
    loadChildren: () => import('./pages/paymenterror/paymenterror.module').then( m => m.PaymenterrorPageModule),
    canLoad: [AuthorizeGuard, RecoverUserGuard]
  },
  {
    path: 'recoveruser',
    loadChildren: () => import('./pages/recoveruser/recoveruser.module').then( m => m.RecoveruserPageModule),
    canLoad: [AuthorizeGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
