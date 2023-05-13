import { Component, Input } from '@angular/core';
import { Contacto } from '../../interfaces';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  contacto: Contacto[] = [];
  logo = this.ui.logo;

  constructor(private ui: UiService) {}

}
