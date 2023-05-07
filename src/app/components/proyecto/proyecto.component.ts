import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/interfaces';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  @Input() 
  proyecto: Proyecto = {} as Proyecto;
}
