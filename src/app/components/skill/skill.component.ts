import { Component , Input, SimpleChanges } from '@angular/core';
import { Habilidad } from '../../interfaces';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  @Input()
  habilidad: Habilidad[] = [];

  habilidadHard: Habilidad[] = [];
  habilidadSoft: Habilidad[] = [];

  ngOnChanges(changes: SimpleChanges){
    this.filtrarHabilidad();
  }

  filtrarHabilidad(){
    this.habilidadHard = this.habilidad.filter((item) => item.tipoSkill === 'Hard')
    this.habilidadSoft = this.habilidad.filter((item) => item.tipoSkill === 'Soft')
  }
} 
