import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Persona } from 'src/app/interfaces';
import { FormularioService } from 'src/app/service/formulario.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  providers: [DatePipe],
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent {
  @Input()
  persona: Persona = {} as Persona;
  @Output()
  editPersona: EventEmitter<Persona> = new EventEmitter<Persona>();

  modificar: boolean = false;

constructor(private formServ: FormularioService,
  private validation: ValidationService){}


ngOnInit(){
  this.formServ.actualizarSeleccion().subscribe(
    (sel) => this.modificar = (sel.seleccion === this.persona)
  )
}
  onSelectPersona(persona: Persona){
    this.formServ.seleccionarObjeto(persona);
  }
  onEditPersona(persona: Persona){
    if (this.validation.validarPersona(persona)) {
    this.editPersona.emit(persona);
    this.formServ.deseleccionarObjeto();}
  }
}
