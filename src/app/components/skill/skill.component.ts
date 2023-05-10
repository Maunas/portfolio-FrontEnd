import { Component , Input } from '@angular/core';
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
} 
