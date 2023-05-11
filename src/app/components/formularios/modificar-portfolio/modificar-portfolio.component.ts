import { Component } from '@angular/core';
import { Experiencia, Formacion, Habilidad, Persona, Portfolio, Proyecto } from 'src/app/interfaces';
import { ApiService } from 'src/app/service/api.service';
import { portfolioPrueba } from 'src/assets/prueba';

@Component({
  selector: 'app-modificar-portfolio',
  templateUrl: './modificar-portfolio.component.html',
  styleUrls: ['./modificar-portfolio.component.css']
})
export class ModificarPortfolioComponent {

  portfolio: Portfolio = portfolioPrueba;
  selectedItem = {};

  constructor(private apiServ: ApiService){}

  ngOnInit() {
    this.apiServ.getPortfolio().subscribe(
      (portfolio) => (this.portfolio = portfolio)
    );
  } 

  seleccionarObjeto(objeto: any){
    this.selectedItem = objeto;
  }
  eliminarFormacion(id: number){
    this.apiServ.deleteFormacion(id).subscribe(
      () => (this.portfolio.formacion = this.portfolio.formacion.filter((f) => f.idFormacion !== id)
    ))
  }
  eliminarHabilidad(id: number){
    this.apiServ.deleteHabilidad(id).subscribe(
      () => (this.portfolio.habilidad = this.portfolio.habilidad.filter((h) => h.idHabilidad !== id)
    ))
  }
  eliminarProyecto(id: number){
    this.apiServ.deleteProyecto(id).subscribe(
      () => (this.portfolio.proyecto = this.portfolio.proyecto.filter((p) => p.idProyecto !== id)
    ))
  }
  eliminarExperiencia(id: number){
    this.apiServ.deleteExperiencia(id).subscribe(
      () => (this.portfolio.experiencia = this.portfolio.experiencia.filter((e) => e.idExperiencia !== id)
    ))
  }

  editarPersona(p: Persona){
    this.apiServ.putPersona(p).subscribe()
  }
  editarFormacion(f: Formacion){
    this.apiServ.putFormacion(f).subscribe()
  }
  editarHabilidad(h: Habilidad){
    this.apiServ.putHabilidad(h).subscribe()
  }
  editarProyecto(p: Proyecto){
    this.apiServ.putProyecto(p).subscribe()
  }
  editarExperiencia(e: Experiencia){
    this.apiServ.putExperiencia(e).subscribe()
  }
}
