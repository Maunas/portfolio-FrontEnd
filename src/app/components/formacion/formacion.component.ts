import { Component, Input } from '@angular/core';
import { Formacion } from 'src/app/interfaces';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

  @Input()
  formacion: Formacion[] = [];
  icono = faGraduationCap;
}
