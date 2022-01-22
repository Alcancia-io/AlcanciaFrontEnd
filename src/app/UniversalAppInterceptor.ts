import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ALCANCIA_SERVER_URL } from "src/environments/environment";
@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {

  constructor( private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.tokenService.getToken(); 

    if(req.url.includes(ALCANCIA_SERVER_URL)){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    
    return next.handle(req);
  }
}
