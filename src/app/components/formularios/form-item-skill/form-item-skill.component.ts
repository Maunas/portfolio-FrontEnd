import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habilidad } from 'src/app/interfaces';

@Component({
  selector: 'app-form-item-skill',
  templateUrl: './form-item-skill.component.html',
  styleUrls: ['./form-item-skill.component.css']
})
export class FormItemSkillComponent {
  @Input()
  skill: Habilidad = {} as Habilidad;
    @Input()
  tipoSkill: String = '';
  @Input()
  selected: boolean = false;
  @Output()
  onSelectObjeto: EventEmitter<Habilidad> = new EventEmitter<Habilidad>();
  @Output()
  deleteHabilidad: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  editHabilidad: EventEmitter<Habilidad> = new EventEmitter<Habilidad>();

  onDeleteHabilidad(skill: Habilidad){
    this.deleteHabilidad.emit(skill.idHabilidad);
  }

  onSelectHabilidad(skill: Habilidad){
    this.onSelectObjeto.emit(skill);
  }
  onEditHabilidad(skill: Habilidad){
    this.editHabilidad.emit(skill);
  }
}
