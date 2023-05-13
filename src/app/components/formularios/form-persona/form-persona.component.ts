import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/app/interfaces';
import { FormularioService } from 'src/app/service/formulario.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent {
  @Input()
  persona: Persona = {} as Persona;
  @Output()
  editPersona: EventEmitter<Persona> = new EventEmitter<Persona>();
  edad: number = 23;

  modificar: boolean = false;

constructor(private formServ: FormularioService){}

ngOnInit(){
  this.formServ.actualizarSeleccion().subscribe(
    (sel) => this.modificar = (sel.seleccion === this.persona)
  )
}
  onSelectPersona(persona: Persona){
    this.formServ.seleccionarObjeto(persona);
  }
  onEditPersona(persona: Persona){
    this.editPersona.emit(persona);
    this.formServ.deseleccionarObjeto();
  }
}
