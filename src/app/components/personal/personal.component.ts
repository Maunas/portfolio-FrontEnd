import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/interfaces';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  @Input()
  persona: Persona = {} as Persona;
  edad: number = 23;
  
}
