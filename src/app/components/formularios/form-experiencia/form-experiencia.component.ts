import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';
import { DatePipe } from '@angular/common';

import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FormularioService } from 'src/app/service/formulario.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  providers: [DatePipe],
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent {
  @Input()
  experiencia: Experiencia[] = [];
  @Output()
  deleteExperiencia: EventEmitter<number> = new EventEmitter<number>();
    @Output()
  editExperiencia: EventEmitter<Experiencia> = new EventEmitter<Experiencia>();
      @Output()
  newExperiencia: EventEmitter<Experiencia> = new EventEmitter<Experiencia>();

icono = faBriefcase;
modificar: Experiencia = {} as Experiencia;
agregar: boolean = false;
nuevaExperiencia: Experiencia = {institucion:"", puesto:"", urlImagen:""} as Experiencia;

  constructor(private formServ: FormularioService,
    private validation: ValidationService){}

  ngOnInit(){
    this.formServ.actualizarSeleccion().subscribe(
      (sel) => {
        this.modificar = sel.seleccion;
        this.agregar = (this.experiencia === sel.agregar);
      }
    )
  }

  onDeleteExperiencia(exp: Experiencia){
    this.deleteExperiencia.emit(exp.idExperiencia);
  }

  onSelectExperiencia(exp:Experiencia){
    this.formServ.seleccionarObjeto(exp);
  }
  onEditExperiencia(exp:Experiencia){
    if (this.validation.validarExperiencia(exp)) {
    this.editExperiencia.emit(exp);
    this.formServ.deseleccionarObjeto();
    }
  }
  onAddExperiencia(cont: Experiencia[]) {
    this.formServ.agregarObjeto(cont);
    this.nuevaExperiencia = {institucion:"", puesto:"", urlImagen:""} as Experiencia;
  }
  onNewExperiencia() {
    if (this.validation.validarExperiencia(this.nuevaExperiencia)) {
    this.newExperiencia.emit(this.nuevaExperiencia);
    this.onDeselect();
    }
  }
  onDeselect() {
    this.formServ.deseleccionarObjeto();
    this.nuevaExperiencia = {institucion:"", puesto:"", urlImagen:""} as Experiencia;
  }
}
