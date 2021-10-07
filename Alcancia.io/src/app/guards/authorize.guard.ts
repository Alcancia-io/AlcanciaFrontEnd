import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AppCookieService } from '../services/appcookie.service';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, take, tap } from 'rxjs/operators';


let currentUser: string;
@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService,
              private appCookieService: AppCookieService,
              private fireAuth: AngularFireAuth,
              private tokenService: TokenService,
              private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {

      return this.authenticationService.user$.pipe(
        take(1),
        map(user => user ? true : false),
        tap( isLoggedIn => {
          if(isLoggedIn) {
            if(this.tokenService.isTokenExpired()){
              console.log('token is expired');
              return this.router.navigate(['/login']);
            } else {
              console.log('is aunthenticated');
              return true;
            }
          } else {
            console.log('is not aunthenticated');
            return this.router.navigate(['/login']);
          }
        })
      );
    }
}

@Injectable()
export class NegateAuthorizeGuard implements CanActivate {
  constructor (private AuthorizeGuard: AuthorizeGuard, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
      let userNotAuth = !this.AuthorizeGuard.canActivate(next,state);
      if (userNotAuth) {
        console.log('user is not aunthenticated => proceed'+ userNotAuth);
        return true;
      } else {
        console.log('user is aunthenticated...Redirecting');
        return this.router.navigate(['/main-screen']);
      }
  }
}
