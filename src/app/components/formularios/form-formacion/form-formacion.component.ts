import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Formacion } from 'src/app/interfaces';
import { FormularioService } from 'src/app/service/formulario.service';

@Component({
  selector: 'app-form-formacion',
  templateUrl: './form-formacion.component.html',
  styleUrls: ['./form-formacion.component.css']
})
export class FormFormacionComponent {
  @Input()
  formacion: Formacion[] = [];

  modificar: Formacion = {} as Formacion;
  agregar: boolean = false;

  icono = faGraduationCap;

  @Output()
  deleteFormacion: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  editFormacion: EventEmitter<Formacion> = new EventEmitter<Formacion>();
  @Output()
  newFormacion: EventEmitter<Formacion> = new EventEmitter<Formacion>();

  nuevaFormacion: Formacion = {institucion:"", carrera:"", urlImagen:""} as Formacion;

  constructor(private formServ: FormularioService){}

  ngOnInit(){
    this.formServ.actualizarSeleccion().subscribe(
      (sel) => {
        this.modificar = sel.seleccion;
        this.agregar = (this.formacion === sel.agregar);
      }
    )
  }

  onDeleteFormacion(form: Formacion){
    this.deleteFormacion.emit(form.idFormacion);
  }

  onSelectFormacion(form: Formacion){
    this.formServ.seleccionarObjeto(form);
  }
  onEditFormacion(form: Formacion){
    this.editFormacion.emit(form);
    this.formServ.deseleccionarObjeto();
  }
  onAddFormacion(cont: Formacion[]) {
    this.formServ.agregarObjeto(cont);
    this.nuevaFormacion = {institucion:"", carrera:"", urlImagen:""} as Formacion;
  }
  onNewFormacion() {
    this.newFormacion.emit(this.nuevaFormacion);
    this.onDeselect();
  }
  onDeselect() {
    this.formServ.deseleccionarObjeto();
    this.nuevaFormacion = {institucion:"", carrera:"", urlImagen:""} as Formacion;
  }
}
