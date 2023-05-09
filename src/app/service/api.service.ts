import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto, Experiencia, Formacion, Habilidad, Persona, Portfolio, Proyecto } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:8080/portfolio';
  constructor(private http: HttpClient) {}

  getPortfolio(): Observable<Portfolio>{
    return this.http.get<Portfolio>(this.apiUrl);
  }

  modifyPersona(persona: Persona): Observable<Persona>{
    const url: string = this.apiUrl + "/edit/persona/modificar";
    return this.http.put<Persona>(url, JSON.stringify(persona));
  }

  modifyContacto(contacto: Contacto): Observable<Contacto>{
    const url: string = this.apiUrl + "/edit/contacto/modificar";
    return this.http.put<Contacto>(url, JSON.stringify(contacto));
  }
  modifyHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    const url: string = this.apiUrl + "/edit/habilidad/modificar";
    return this.http.put<Habilidad>(url, JSON.stringify(habilidad));
  }
    modifyProyecto(proyecto: Proyecto): Observable<Proyecto>{
    const url: string = this.apiUrl + "/edit/proyecto/modificar";
    return this.http.put<Proyecto>(url, JSON.stringify(proyecto));
  }
  modifyExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url: string = this.apiUrl + "/edit/experiencia/modificar";
    return this.http.put<Experiencia>(url, JSON.stringify(experiencia));
  }
  modifyFormacion(formacion: Formacion): Observable<Formacion>{
    const url: string = this.apiUrl + "/edit/formacion/modificar";
    return this.http.put<Formacion>(url, JSON.stringify(formacion));
  }
}
