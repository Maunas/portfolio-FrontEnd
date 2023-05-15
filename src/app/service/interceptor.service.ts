import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//toma las requests salientes de la app
//https://www.techgeeknext.com/spring/angular-spring-boot-jwt-authentication
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){

    //Si hay tanto un username y un token guardados, coloca el jwt en el header del request
    //Si no, lo envia sin el header
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token') ?? ''
        }
      })
    }

    return next.handle(req);

  }
}
