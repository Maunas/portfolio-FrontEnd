import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/interfaces';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent {
  @Input()
  proyecto: Proyecto[] = [];
}
