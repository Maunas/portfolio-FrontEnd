import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Formacion } from 'src/app/interfaces';

@Component({
  selector: 'app-form-formacion',
  templateUrl: './form-formacion.component.html',
  styleUrls: ['./form-formacion.component.css']
})
export class FormFormacionComponent {
  @Input()
  formacion: Formacion[] = [];
  
  icono = faGraduationCap;
  @Input()
  selectedItem: any = {};
  @Output()
  onSelectObjeto: EventEmitter<Formacion> = new EventEmitter<Formacion>();
  @Output()
  deleteFormacion: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  editFormacion: EventEmitter<Formacion> = new EventEmitter<Formacion>();

  onDeleteFormacion(form: Formacion){
    this.deleteFormacion.emit(form.idFormacion);
  }

  onSelectFormacion(form: Formacion){
    this.onSelectObjeto.emit(form);
  }
  onEditFormacion(form: Formacion){
    this.editFormacion.emit(form);
  }
}
