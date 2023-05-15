import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  providers: [DatePipe],
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  @Input() 
  experiencia: Experiencia[] = [];
  icono = faBriefcase;
}
