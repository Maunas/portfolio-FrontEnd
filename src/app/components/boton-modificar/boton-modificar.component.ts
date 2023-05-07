import { Component, Input } from '@angular/core';
import { faPen, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boton-modificar',
  templateUrl: './boton-modificar.component.html',
  styleUrls: ['./boton-modificar.component.css']
})
export class BotonModificarComponent {

  @Input() 
  accion: String ="";
  faIcon = faPen;

  ngOnInit(){
    switch (this.accion){
      case "eliminar": this.faIcon = faMinus; break;
      case "agregar": this.faIcon = faPlus; break;
      case "editar": this.faIcon = faPen; break;
    }
  }
}
