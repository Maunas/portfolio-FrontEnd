import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';

@Component({
  selector: 'app-experiencia-section',
  templateUrl: './experiencia-section.component.html',
  styleUrls: ['./experiencia-section.component.css']
})
export class ExperienciaSectionComponent {

  @Input()
  experiencias: Experiencia[] = [];

}
