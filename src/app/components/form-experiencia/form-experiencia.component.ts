import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent {
  @Input()
  experiencia: Experiencia[] = [];
}
