import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/interfaces';
import { FormularioService } from 'src/app/service/formulario.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css'],
})
export class FormProyectoComponent {
  @Input()
  proyecto: Proyecto[] = [];
  @Output()
  deleteProyecto: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  editProyecto: EventEmitter<Proyecto> = new EventEmitter<Proyecto>();
  @Output()
  newProyecto: EventEmitter<Proyecto> = new EventEmitter<Proyecto>();

  modificar: Proyecto = {} as Proyecto;
  agregar: boolean = false;
  nuevoProyecto: Proyecto = {descripcion:"", tituloProyecto:"", urlProyecto:""} as Proyecto;

  constructor(private formServ: FormularioService,
    private validation: ValidationService){}

  ngOnInit(){
    this.formServ.actualizarSeleccion().subscribe(
      (sel) => {
        this.modificar = sel.seleccion;
        this.agregar = (this.proyecto === sel.agregar);
      }
    )
  }
  onDeleteProyecto(proy: Proyecto) {
    this.deleteProyecto.emit(proy.idProyecto);
  }

  onSelectProyecto(proy: Proyecto) {
    this.formServ.seleccionarObjeto(proy);
  }
  onEditProyecto(proy: Proyecto) {
    if (this.validation.validarProyecto(proy)) {
    this.editProyecto.emit(proy);
    this.formServ.deseleccionarObjeto();}
  }
    onAddProyecto(cont: Proyecto[]) {
    this.formServ.agregarObjeto(cont);
    this.nuevoProyecto = {descripcion:"", tituloProyecto:"", urlProyecto:""} as Proyecto;
  }
  onNewProyecto() {
    if (this.validation.validarProyecto(this.nuevoProyecto)) {
    this.newProyecto.emit(this.nuevoProyecto);
    this.onDeselect();}
  }
  onDeselect() {
    this.formServ.deseleccionarObjeto();
    this.nuevoProyecto = {descripcion:"", tituloProyecto:"", urlProyecto:""} as Proyecto;
  }
}
