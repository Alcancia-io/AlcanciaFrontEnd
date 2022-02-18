import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
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
export class AuthorizeGuard implements CanLoad {
  isLogIn: Boolean = false;
  constructor(
              private tokenService: TokenService,
              private router: Router,
              private fireAuth: AngularFireAuth) {
  }

  
  async canLoad(): Promise<boolean>{ 
    const token = this.tokenService.getToken();   
    if(token !== null){ 
      return true;
    }else {this.router.navigate(['/login'])}  
  } 
}

@Injectable({
  providedIn: 'root'
})
export class NegateAuthorizeGuard implements CanLoad {
  constructor (private tokenService: TokenService, private router: Router, private fireAuth: AngularFireAuth){}
   
  async canLoad(): Promise<boolean>{ 
      const token = this.tokenService.getToken();   
      if(token === null){ 
        return true;
      }else {this.router.navigate(['/'])} 
  }
 
}
