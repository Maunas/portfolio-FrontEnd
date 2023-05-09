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
    return this.http.put<Persona>(url, persona, httpOptions);
  }

  modifyContacto(contacto: Contacto): Observable<Contacto>{
    const url: string = this.apiUrl + "/edit/contacto/modificar";
    return this.http.put<Contacto>(url, contacto, httpOptions);
  }
  modifyHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    const url: string = this.apiUrl + "/edit/habilidad/modificar";
    return this.http.put<Habilidad>(url, habilidad, httpOptions);
  }
    modifyProyecto(proyecto: Proyecto): Observable<Proyecto>{
    const url: string = this.apiUrl + "/edit/proyecto/modificar";
    return this.http.put<Proyecto>(url, proyecto, httpOptions);
  }
  modifyExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url: string = this.apiUrl + "/edit/experiencia/modificar";
    return this.http.put<Experiencia>(url, experiencia, httpOptions);
  }
  modifyFormacion(formacion: Formacion): Observable<Formacion>{
    const url: string = this.apiUrl + "/edit/formacion/modificar";
    return this.http.put<Formacion>(url, formacion, httpOptions);
  }

  createContacto(contacto: Contacto): Observable<Contacto>{
    const url: string = this.apiUrl + "/edit/contacto/crear";
    return this.http.post<Contacto>(url, contacto, httpOptions);
  }
  createHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    const url: string = this.apiUrl + "/edit/habilidad/crear";
    return this.http.post<Habilidad>(url, habilidad, httpOptions);
  }
  createProyecto(proyecto: Proyecto): Observable<Proyecto>{
    const url: string = this.apiUrl + "/edit/proyecto/crear";
    return this.http.post<Proyecto>(url, proyecto, httpOptions);
  }
  createExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url: string = this.apiUrl + "/edit/experiencia/crear";
    return this.http.post<Experiencia>(url, experiencia, httpOptions);
  }
  createFormacion(formacion: Formacion): Observable<Formacion>{
    const url: string = this.apiUrl + "/edit/formacion/crear";
    return this.http.post<Formacion>(url, formacion, httpOptions);
  }

  deleteContacto(contacto: Contacto): Observable<String>{
    const url: string = this.apiUrl + `/edit/contacto/eliminar/${contacto.id}`;
    return this.http.delete<String>(url);
  }
  deleteHabilidad(habilidad: Habilidad): Observable<String>{
    const url: string = this.apiUrl + "/edit/habilidad/crear";
    return this.http.delete<String>(url);
  }
  deleteProyecto(proyecto: Proyecto): Observable<String>{
    const url: string = this.apiUrl + "/edit/proyecto/crear";
    return this.http.delete<String>(url);
  }
  deleteExperiencia(experiencia: Experiencia): Observable<String>{
    const url: string = this.apiUrl + "/edit/experiencia/crear";
    return this.http.delete<String>(url);
  }
  deleteFormacion(formacion: Formacion): Observable<String>{
    const url: string = this.apiUrl + "/edit/formacion/crear";
    return this.http.delete<String>(url);
  }
}
