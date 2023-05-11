import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Habilidad } from 'src/app/interfaces';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent {
  @Input()
  habilidad: Habilidad[] = [];
  habilidadHard: Habilidad[] = [];
  habilidadSoft: Habilidad[] = [];
  @Input()
  selectedItem: any = {};
  @Output()
  onSelectObjeto: EventEmitter<Habilidad> = new EventEmitter<Habilidad>();
  @Output()
  deleteHabilidad: EventEmitter<number> = new EventEmitter<number>();
    @Output()
  editHabilidad: EventEmitter<Habilidad> = new EventEmitter<Habilidad>();

  ngOnInit(){
    this.filtrarHabilidad();
  }
  filtrarHabilidad(){
    for(let skill of this.habilidad){
      switch(skill.tipoSkill){
        case 'Hard':this.habilidadHard.push(skill); break;
        case 'Soft':this.habilidadSoft.push(skill); break;
      }
    }
  }

  onDeleteHabilidad(id: number){
    this.deleteHabilidad.emit(id);
  }

  onSelectHabilidad(skill: Habilidad){
    this.onSelectObjeto.emit(skill);
  }
    onEditHabilidad(skill: Habilidad){
    this.editHabilidad.emit(skill);
  }
}
