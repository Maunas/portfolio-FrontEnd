import { Component } from '@angular/core';
import { Contacto } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  contactos: Contacto[] = [];
}
