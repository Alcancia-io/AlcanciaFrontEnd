import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {

  constructor( private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.tokenService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}
