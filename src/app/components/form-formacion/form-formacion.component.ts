import { Component, Input } from '@angular/core';
import { Formacion } from 'src/app/interfaces';

@Component({
  selector: 'app-form-formacion',
  templateUrl: './form-formacion.component.html',
  styleUrls: ['./form-formacion.component.css']
})
export class FormFormacionComponent {
  @Input()
  formacion: Formacion[] = [];
}
