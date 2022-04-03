import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { endPoints } from '@config/endPoints';
import { AuthService } from '@services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     if(request.url.toLowerCase().includes(endPoints.auth)){
       return next.handle(request);
     }
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {
    const apiKey = this.authService.getAuthCookie('apiKey');

    return request.clone({
      params: (request.params ? request.params : new HttpParams())
                 .set('api_key', apiKey)
    });
  }
}