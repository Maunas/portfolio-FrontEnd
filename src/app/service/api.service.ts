import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Contacto, Experiencia, Formacion, Habilidad, Persona, Portfolio, Proyecto} from '../interfaces';
import { ErrorService } from './error.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'https://gm-yoprogramo-portfolio.onrender.com/portfolio';
  constructor(private http: HttpClient, private error:ErrorService) {}

  getPortfolio(): Observable<Portfolio>{
    return this.http.get<Portfolio>(this.apiUrl);
  }
  editPortfolio(): Observable<Portfolio>{
    const url: string = this.apiUrl + "/edit";
    return this.http.get<Portfolio>(url).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }

  putPersona(persona: Persona): Observable<Persona>{
    const url: string = this.apiUrl + "/edit/persona/modificar";
    return this.http.put<Persona>(url, persona, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }

  putContacto(contacto: Contacto): Observable<Contacto>{
    const url: string = this.apiUrl + "/edit/contacto/modificar";
    return this.http.put<Contacto>(url, contacto, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  putHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    const url: string = this.apiUrl + "/edit/habilidad/modificar";
    return this.http.put<Habilidad>(url, habilidad, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  putProyecto(proyecto: Proyecto): Observable<Proyecto>{
    const url: string = this.apiUrl + "/edit/proyecto/modificar";
    return this.http.put<Proyecto>(url, proyecto, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  putExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url: string = this.apiUrl + "/edit/experiencia/modificar";
    return this.http.put<Experiencia>(url, experiencia, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  putFormacion(formacion: Formacion): Observable<Formacion>{
    const url: string = this.apiUrl + "/edit/formacion/modificar";
    return this.http.put<Formacion>(url, formacion, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }

  postContacto(contacto: Contacto): Observable<Contacto>{
    const url: string = this.apiUrl + "/edit/contacto/crear";
    return this.http.post<Contacto>(url, contacto, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  postHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    const url: string = this.apiUrl + "/edit/habilidad/crear";
    return this.http.post<Habilidad>(url, habilidad, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  postProyecto(proyecto: Proyecto): Observable<Proyecto>{
    const url: string = this.apiUrl + "/edit/proyecto/crear";
    return this.http.post<Proyecto>(url, proyecto, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  postExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    const url: string = this.apiUrl + "/edit/experiencia/crear";
    return this.http.post<Experiencia>(url, experiencia, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  postFormacion(formacion: Formacion): Observable<Formacion>{
    const url: string = this.apiUrl + "/edit/formacion/crear";
    return this.http.post<Formacion>(url, formacion, httpOptions).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        console.log(error);
        throw(error);
        
      })
    );
  }

  deleteContacto(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/contacto/eliminar/${id}`;
    return this.http.delete<String>(url).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  deleteHabilidad(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/habilidad/eliminar/${id}`;
    return this.http.delete<String>(url).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  deleteProyecto(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/proyecto/eliminar/${id}`;
    return this.http.delete<String>(url).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  deleteExperiencia(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/experiencia/eliminar/${id}`;
    return this.http.delete<String>(url).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }
  deleteFormacion(id: number): Observable<String>{
    const url: string = this.apiUrl + `/edit/formacion/eliminar/${id}`;
    return this.http.delete<String>(url).pipe(
      catchError((error: any) => {
        this.error.alertarError(error);
        throw(error);
      })
    );
  }

  
}
