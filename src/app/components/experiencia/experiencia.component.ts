import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  @Input() 
  experiencia: Experiencia = {} as Experiencia;

}
