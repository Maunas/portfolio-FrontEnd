import { Component, Input } from '@angular/core';
import { Habilidad } from 'src/app/interfaces';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.css']
})
export class ItemSkillComponent {

  @Input()
  skill: Habilidad = {} as Habilidad;
    @Input()
  tipoSkill: String = '';
}
