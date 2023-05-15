import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contacto } from 'src/app/interfaces';
import { FormularioService } from 'src/app/service/formulario.service';
import { LoginService } from 'src/app/service/login.service';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css'],
})
export class FormContactoComponent {
  @Input()
  contacto: Contacto[] = [];
  @Output()
  editContacto: EventEmitter<Contacto> = new EventEmitter();
  @Output()
  deleteContacto: EventEmitter<number> = new EventEmitter();
  @Output()
  newContacto: EventEmitter<Contacto> = new EventEmitter();

  modificar: Contacto = {} as Contacto;
  agregar: boolean = false;

  nuevoContacto: Contacto = { nombreContacto: '', urlContacto: '' };
  logo = this.ui.logo;

  constructor(private formServ: FormularioService, private ui: UiService, private login: LoginService) {}

  ngOnInit() {
    this.formServ.actualizarSeleccion().subscribe((sel) => {
      this.modificar = sel.seleccion;
      this.agregar = this.contacto === sel.agregar;
    });
  }
  onDeleteContacto(cont: Contacto) {
    this.deleteContacto.emit(cont.id);
  }
  onEditContacto(cont: Contacto) {
    this.editContacto.emit(cont);
    this.onDeselect();
  }
  onSelectContacto(cont: Contacto) {
    this.formServ.seleccionarObjeto(cont);
  }
  onAddContacto(cont: Contacto[]) {
    this.formServ.agregarObjeto(cont);
    this.nuevoContacto = {nombreContacto: "", urlContacto: ""};
  }
  onNewContacto() {
    this.newContacto.emit(this.nuevoContacto);
    this.nuevoContacto = {nombreContacto: "", urlContacto: ""};
    this.onDeselect();
  }
  onDeselect() {
    this.formServ.deseleccionarObjeto();
  }

  cerrarSesion(){
    this.login.logOut();
  }
}
