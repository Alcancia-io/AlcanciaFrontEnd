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
  constructor(
              private tokenService: TokenService,
              private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {

      const token = this.tokenService.getToken();
      if(token) {
        return true;
      }else {
        return this.router.navigate(['/login']);
      }
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
      const token = this.tokenService.getToken();
      if(!token) {
        return true;
      } else {
        return this.router.navigate(['/main-screen']);
      }
  }
}
