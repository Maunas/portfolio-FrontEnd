import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces';
import { Observable, catchError, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router, private error: ErrorService) {}

  login(user: Usuario): Observable<any> {
    const url: string = 'https://gm-yoprogramo-portfolio.onrender.com/login';
    return this.http.post<any>(url, user, httpOptions).pipe(
      map((userData) => {
        sessionStorage.setItem("username", user.username);
        let tokenStr = "Bearer " + userData.token;
        sessionStorage.setItem("token", tokenStr);
        return userData;
      }, catchError((error: any) => {
        this.error.alertarErrorLogin(error);
        throw(error);
      }
      )
    ))
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    this.router.navigate(["/portfolio"]);
  }
}
