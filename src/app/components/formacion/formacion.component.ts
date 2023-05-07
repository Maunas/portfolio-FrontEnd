import { Component, Input } from '@angular/core';
import { Formacion } from 'src/app/interfaces';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

  @Input()
  formacion: Formacion = {} as Formacion;

}
