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
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule),
    canActivate: [NegateAuthorizeGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NegateAuthorizeGuard]
  },
  {
    path: '',
    loadChildren: () => import('./pages/sidenav/sidenav.module').then( m => m.SidenavPageModule),
    canActivate: [AuthorizeGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
