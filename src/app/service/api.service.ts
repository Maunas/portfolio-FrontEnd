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

  putPersona(persona: Persona): Observable<Persona>{
    const url: string = this.apiUrl + "/edit/persona/modificar";
    return this.http.put<Persona>(url, persona, httpOptions);
  }

  putContacto(contacto: Contacto): Observable<Contacto>{
    const url: string = this.apiUrl + "/edit/contacto/modificar";
    return this.http.put<Contacto>(url, contacto, httpOptions);
  }
  putHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    const url: string = this.apiUrl + "/edit/habilidad/modificar";
    return this.http.put<Habilidad>(url, habilidad, httpOptions);
  }
  putProyecto(proyecto: Proyecto): Observable<Proyecto>{
    const url: string = this.apiUrl + "/edit/proyecto/modificar";
    return this.http.put<Proyecto>(url, proyecto, httpOptions);
  }
  putExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url: string = this.apiUrl + "/edit/experiencia/modificar";
    return this.http.put<Experiencia>(url, experiencia, httpOptions);
  }
  putFormacion(formacion: Formacion): Observable<Formacion>{
    const url: string = this.apiUrl + "/edit/formacion/modificar";
    return this.http.put<Formacion>(url, formacion, httpOptions);
  }

  postContacto(contacto: Contacto): Observable<Contacto>{
    const url: string = this.apiUrl + "/edit/contacto/crear";
    return this.http.post<Contacto>(url, contacto, httpOptions);
  }
  postHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    const url: string = this.apiUrl + "/edit/habilidad/crear";
    return this.http.post<Habilidad>(url, habilidad, httpOptions);
  }
  postProyecto(proyecto: Proyecto): Observable<Proyecto>{
    const url: string = this.apiUrl + "/edit/proyecto/crear";
    return this.http.post<Proyecto>(url, proyecto, httpOptions);
  }
  postExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url: string = this.apiUrl + "/edit/experiencia/crear";
    return this.http.post<Experiencia>(url, experiencia, httpOptions);
  }
  postFormacion(formacion: Formacion): Observable<Formacion>{
    const url: string = this.apiUrl + "/edit/formacion/crear";
    return this.http.post<Formacion>(url, formacion, httpOptions);
  }

  deleteContacto(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/contacto/eliminar/${id}`;
    return this.http.delete<String>(url);
  }
  deleteHabilidad(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/habilidad/eliminar/${id}`;
    return this.http.delete<String>(url);
  }
  deleteProyecto(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/proyecto/eliminar/${id}`;
    return this.http.delete<String>(url);
  }
  deleteExperiencia(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/experiencia/eliminar/${id}`;
    return this.http.delete<String>(url);
  }
  deleteFormacion(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/formacion/eliminar/${id}`;
    return this.http.delete<String>(url);
  }
}
