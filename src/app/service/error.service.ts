import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private router: Router) { }

  alertarError(error: any){
    switch(error.status){
      case 401:  alert("Acceso no Autorizado");
      this.router.navigate(['/portfolio']);
      break;
      case 500: alert("Campos Inválidos");
      break;
    }
  }
  alertarErrorLogin(error: any){
      alert("Credenciales Incorrectas");
  }
}
