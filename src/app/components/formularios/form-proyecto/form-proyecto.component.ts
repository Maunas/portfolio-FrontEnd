import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/interfaces';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css'],
})
export class FormProyectoComponent {
  @Input()
  proyecto: Proyecto[] = [];
  @Input()
  selectedItem: any = {};
  @Output()
  onSelectObjeto: EventEmitter<Proyecto> = new EventEmitter<Proyecto>();
  @Output()
  deleteProyecto: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  editProyecto: EventEmitter<Proyecto> = new EventEmitter<Proyecto>();

  onDeleteProyecto(proy: Proyecto) {
    this.deleteProyecto.emit(proy.idProyecto);
  }

  onSelectProyecto(proy: Proyecto) {
    this.onSelectObjeto.emit(proy);
  }
  onEditProyecto(proy: Proyecto) {
    this.editProyecto.emit(proy);
  }
}
