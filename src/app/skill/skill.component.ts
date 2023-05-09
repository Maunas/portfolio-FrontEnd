import { Component , Input } from '@angular/core';
import { Habilidad } from '../interfaces';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  @Input()
  habilidad: Habilidad = {} as Habilidad;

}
