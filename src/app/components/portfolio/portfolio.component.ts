import { Component } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';
import { ApiService } from 'src/app/service/api.service';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolio: Portfolio = {} as Portfolio;

  constructor(private apiServ: ApiService, private fechas: DateService){}

  ngOnInit() {
    this.apiServ.getPortfolio().subscribe(
      (portfolio) => (
        //Las fechas vienen en Unix
        this.portfolio = this.fechas.formatearFechasPortfolio(portfolio)
      )
    );
  } 

}


