import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {

  constructor( private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDM0MmIwMjU1MDAyYWI3NWUwNTM0YzU4MmVjYzY2Y2YwZTE3ZDIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWxjYW5jaWEiLCJhdWQiOiJhbGNhbmNpYSIsImF1dGhfdGltZSI6MTYzMzM5OTk4MCwidXNlcl9pZCI6IkU0Y2tPd2RoNnpibE5tdU9YVzNlQmxKSjJJbTEiLCJzdWIiOiJFNGNrT3dkaDZ6YmxObXVPWFczZUJsSkoySW0xIiwiaWF0IjoxNjMzMzk5OTgwLCJleHAiOjE2MzM0MDM1ODAsImVtYWlsIjoic2ViYXN0aWFucmVzdGl0dXlvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNlYmFzdGlhbnJlc3RpdHV5b0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IP3UU9JFZgiV7Tn1vCIuhb_970m4-7npQp_UN-hhYB_rxA3f72seCgVffVwRaxmfl77fVhjxgDtaKmvhj9u0tYmnbi9gv-0w78VWHwJ681mb4egQrljagPxFUtybOGR3D-FP-cYwOowKW60iY1D3ugX7GPs66L69F-4dSegkLgoVGbisn_ML6BNOba4yJ0No8CTDYii99sWuYV5M3u6ljTmPXZlxsAi5PHC_vOnfjE8CnhmgA4uFv1RA9hFlVKCSff7IcZuAy-Yjc2MZ5w8PjzG349-arX5yxY4VTFUA8lbKCT6FlGrf6_3-1YZdASuJ_SGiaVtN6azLAHw7r9Q9Og';
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}
