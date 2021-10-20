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

          this.tokenService.updateToken().then(token => {
                if (token) {
                  return true;
                } else{
                  this.authenticationService.logout();
                  this.router.navigateByUrl('/login', { replaceUrl:true });
                  return false;
                }
              });
          } else {
             this.router.navigate(['/login'], { replaceUrl:true });
             return false;
          }
        })
      );
    }
}

@Injectable({
  providedIn: 'root'
})
export class NegateAuthorizeGuard implements CanActivate {
  constructor (private tokenService: TokenService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
      return this.tokenService.updateToken().then(token =>{
        if(token){
          return this.router.navigate(['/main-screen']);
        }

        return true;
      })
  }
}
