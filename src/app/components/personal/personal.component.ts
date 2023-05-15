import { Component, Input, SimpleChanges } from '@angular/core';
import { Persona } from 'src/app/interfaces';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  constructor(private fechas: DateService){}

  @Input()
  persona: Persona = {} as Persona;
  edad?: number;
  
  ngOnChanges(changes: SimpleChanges){
    if(this.persona.nacimiento){
    this.edad = this.fechas.calcularEdad(this.persona.nacimiento);
  }}
}
