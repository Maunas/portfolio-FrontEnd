import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }
  private subject = new Subject(); 
  objetoSeleccionado = {};
  objetoAgregar = [];


  seleccionarObjeto(objeto: any){
    this.objetoSeleccionado = objeto;
    this.objetoAgregar = [];
    this.subject.next({seleccion: this.objetoSeleccionado, agregar: this.objetoAgregar});
  }
    agregarObjeto(objeto: any){
    this.objetoSeleccionado = {};
    this.objetoAgregar = objeto;
    this.subject.next({seleccion: this.objetoSeleccionado, agregar: this.objetoAgregar});
  }
  deseleccionarObjeto(){
    this.objetoSeleccionado = {};
    this.objetoAgregar = [];
    this.subject.next({seleccion: this.objetoSeleccionado, agregar: this.objetoAgregar});
  }
  actualizarSeleccion(): Observable<any>{
    return this.subject.asObservable();
  }
}
