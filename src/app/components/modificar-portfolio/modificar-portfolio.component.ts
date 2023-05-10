import { Component } from '@angular/core';
import { Persona, Portfolio } from 'src/app/interfaces';
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

  modificarPersona(persona: Persona){
    this.selectedItem = persona;
  }
}
