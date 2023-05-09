import { Component } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolio: Portfolio = {} as Portfolio;

  constructor(private apiServ: ApiService){}

  ngOnInit() {
    this.apiServ.getPortfolio().subscribe(
      (portfolio) => (this.portfolio = portfolio)
    );
  }

}


