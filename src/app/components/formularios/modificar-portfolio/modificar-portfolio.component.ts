import { Component } from '@angular/core';
import { Contacto, Experiencia, Formacion, Habilidad, Persona, Portfolio, Proyecto } from 'src/app/interfaces';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-modificar-portfolio',
  templateUrl: './modificar-portfolio.component.html',
  styleUrls: ['./modificar-portfolio.component.css']
})
export class ModificarPortfolioComponent {

  portfolio: Portfolio = {} as Portfolio;

  constructor(private apiServ: ApiService){}

  ngOnInit() {
    this.apiServ.getPortfolio().subscribe(
      (portfolio) => (this.portfolio = portfolio)
    );
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
  eliminarContacto(id: number){
    this.apiServ.deleteContacto(id).subscribe(
      () => (this.portfolio.contacto = this.portfolio.contacto.filter((c) => c.id !== id)
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
  editarContacto(c: Contacto){
    this.apiServ.putContacto(c).subscribe()
  }

  crearFormacion(f: Formacion){
    this.apiServ.postFormacion(f).subscribe(
      (formacion) => this.portfolio.formacion.push(formacion)
    )
  }
  crearHabilidad(h: Habilidad){
    this.apiServ.postHabilidad(h).subscribe(
      (skill) => {this.portfolio.habilidad.push(skill);
      alert("Es necesario actualizar al agregar habilidades")}
    )
  }
  crearProyecto(p: Proyecto){
    this.apiServ.postProyecto(p).subscribe(
      (proy) => this.portfolio.proyecto.push(proy)
    )
  }
  crearExperiencia(e: Experiencia){
    this.apiServ.postExperiencia(e).subscribe(
      (exp) => this.portfolio.experiencia.push(exp)
    )
  }
  crearContacto(c: Contacto){
    this.apiServ.postContacto(c).subscribe(
      (cont) => this.portfolio.contacto.push(cont)
    )
  }
}
