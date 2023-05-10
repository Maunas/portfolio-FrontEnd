import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';

import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent {
  @Input()
  experiencia: Experiencia[] = [];
    @Input()
  selectedItem: any = {};
  @Output()
  onSelectObjeto: EventEmitter<Experiencia> = new EventEmitter<Experiencia>();
  @Output()
  deleteExperiencia: EventEmitter<number> = new EventEmitter<number>();
icono = faBriefcase;

  onDeleteExperiencia(exp: Experiencia){
    this.deleteExperiencia.emit(exp.idExperiencia);
  }

  onEditExperiencia(exp:Experiencia){
    this.onSelectObjeto.emit(exp);
  }
  
  
}
