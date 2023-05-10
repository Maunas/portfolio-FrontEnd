import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/app/interfaces';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent {
  @Input()
  persona: Persona = {} as Persona;
  @Input()
  selected: boolean = false;
  @Output()
  onSelectObjeto: EventEmitter<Persona> = new EventEmitter<Persona>();
  edad: number = 23;


  modificarPersona: boolean = false;

  onEditPersona(persona: Persona){
    this.onSelectObjeto.emit(persona);
  }

}
