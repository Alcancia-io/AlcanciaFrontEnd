import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AuthorizeGuard, NegateAuthorizeGuard } from './guards/authorize.guard';
import { SwapGuard } from './guards/swap.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    // canLoad: [IntroGuard], //Checking if we should show the introduction or forward to inside.
    // canActivate: [NegateAuthorizeGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
    // canActivate: [NegateAuthorizeGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
    // canActivate: [NegateAuthorizeGuard]
  },  
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
    // canActivate: [NegateAuthorizeGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'swap',
    loadChildren: () => import('./pages/swap/swap.module').then( m => m.SwapPageModule),
    // canActivate: [AuthorizeGuard], 
    canLoad: [SwapGuard]
  },
  {
    path: 'bitcoin-deposit',
    loadChildren: () => import('./pages/bitcoin-deposit/bitcoin-deposit.module').then( m => m.BitcoinDepositPageModule)
    // canActivate: [AuthorizeGuard]
  },
  {
    path: 'paypalOrder/successfull',
    loadChildren: () => import('./pages/Paypal/SuccessfulDeposit/SuccessfulDeposit-routing.module').then( m => m.SuccefulDepositRoutingModule),
    canActivate: [AuthorizeGuard]
  }, 
  {
    path: 'paypalpaymentoptions',
    loadChildren: () => import('./pages/paypalpaymentoptions/paypalpaymentoptions.module').then( m => m.PaypalpaymentoptionsPageModule),
    // canActivate: [AuthorizeGuard]
  },
  {
    path: 'tabbar',
    loadChildren: () => import('./pages/tab-bar/tab-bar.module').then(m => m.TabBarPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
