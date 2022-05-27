import { Injectable } from '@angular/core';
import {
  UrlTree,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from '@angular/router';

import { DateTime, Interval } from "luxon";

import { StorageService } from "../services/storage.service";
import { AuthenticationService } from '../services/authentication.service';


const LOGIN_MAX_DAYS = 2;

class AbstractAuthGuard {
  constructor(
    private storage: StorageService
  ){}
  async isAuthenticated() {
      const _loginTimestamp = await this.storage.get("loginTimestamp");
      console.debug(_loginTimestamp);
      if (!_loginTimestamp) return false;
      const rememberMe = await this.storage.get("rememberMe");
      const loginTimestamp = DateTime.fromISO(_loginTimestamp);
      const elapsedTime = Interval.fromDateTimes(
        loginTimestamp, DateTime.now()
      );
      if (!rememberMe && elapsedTime.length("days") > LOGIN_MAX_DAYS) {
        this.storage.remove("loginTimestamp");
        return false;
      }
      return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard extends AbstractAuthGuard implements CanActivate {
  constructor(
    storage: StorageService,
    private router: Router
  ){super(storage)}

  async canActivate(): Promise<boolean|UrlTree> {
    const authenticated = await this.isAuthenticated();
    if (authenticated) return true;
    return this.router.parseUrl("/welcome");
  }
}

@Injectable({
  providedIn: 'root'
})
export class NegateAuthorizeGuard extends AbstractAuthGuard implements CanActivate {
  constructor (
    storage: StorageService,
    private router: Router
  ){super(storage)}
  async canActivate(): Promise<boolean|UrlTree> {
    const authenticated = await this.isAuthenticated();
    if (!authenticated) return true;
    return this.router.parseUrl("/nav/home");
  }
}
