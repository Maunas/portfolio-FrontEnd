import { Component, Input } from '@angular/core';
import { Formacion } from 'src/app/interfaces';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  providers: [DatePipe],
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

  @Input()
  formacion: Formacion[] = [];
  icono = faGraduationCap;
}
