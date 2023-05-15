import { Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Habilidad } from 'src/app/interfaces';
import { FormularioService } from 'src/app/service/formulario.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent {
  @Input()
  habilidad: Habilidad[] = [];
  habilidadHard: Habilidad[] = [];
  habilidadSoft: Habilidad[] = [];
  @Output()
  deleteHabilidad: EventEmitter<number> = new EventEmitter<number>();
    @Output()
  editHabilidad: EventEmitter<Habilidad> = new EventEmitter<Habilidad>();
  @Output()
  newHabilidad: EventEmitter<Habilidad> = new EventEmitter<Habilidad>();

  modificar: Habilidad = {} as Habilidad;
  agregar: boolean = false;
  nuevaHabilidad: Habilidad = {nombreHabilidad: '', nivelHabilidad: 0, valorMax:1, tipoSkill:'Hard'} as Habilidad;

constructor(private formServ: FormularioService,
  private validation: ValidationService){}

  ngOnInit(){
    this.formServ.actualizarSeleccion().subscribe(
      (sel) => {
        this.modificar = sel.seleccion;
        this.agregar = (this.habilidad === sel.agregar);
      }
    )
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.habilidad.length>0){
    this.filtrarHabilidad();
  }
  }

  filtrarHabilidad(){
    this.habilidadHard = this.habilidad.filter((item) => item.tipoSkill === 'Hard')
    this.habilidadSoft = this.habilidad.filter((item) => item.tipoSkill === 'Soft')
  }

  onDeleteHabilidad(id: number){
    this.deleteHabilidad.emit(id);
  }

  onSelectHabilidad(skill: Habilidad){
    this.formServ.seleccionarObjeto(skill);
  }
    onEditHabilidad(skill: Habilidad){
      if (this.validation.validarHabilidad(skill)) {
    this.editHabilidad.emit(skill);
    this.filtrarHabilidad();
    this.formServ.deseleccionarObjeto();}
  }
  onAddHabilidad(skill: Habilidad[]) {
    this.formServ.agregarObjeto(skill);
    this.nuevaHabilidad = {nombreHabilidad: '', nivelHabilidad: 0, valorMax:1, tipoSkill:'Hard'} as Habilidad;
  }
  onNewHabilidad() {
    if (this.validation.validarHabilidad(this.nuevaHabilidad)) {
    this.newHabilidad.emit(this.nuevaHabilidad);
    this.onDeselect();
    this.filtrarHabilidad();}
  }
  onDeselect() {
    this.formServ.deseleccionarObjeto();
    this.nuevaHabilidad = {nombreHabilidad: '', nivelHabilidad: 0, valorMax:1, tipoSkill:'Hard'} as Habilidad;
  }
}
