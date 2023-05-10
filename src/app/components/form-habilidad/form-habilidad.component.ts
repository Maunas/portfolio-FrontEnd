import { Component, Input } from '@angular/core';
import { Habilidad } from 'src/app/interfaces';

@Component({
  selector: 'app-form-habilidad',
  templateUrl: './form-habilidad.component.html',
  styleUrls: ['./form-habilidad.component.css']
})
export class FormHabilidadComponent {
  @Input()
  habilidad: Habilidad[] = [];
}
