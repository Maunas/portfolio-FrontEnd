import { Component, Input } from '@angular/core';
import { Contacto } from 'src/app/interfaces';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent {
  @Input()
  contacto: Contacto[] = [];
}
