import { Component } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolio: Portfolio = {} as Portfolio;

  constructor(private portfolioServ: PortfolioService){}

  ngOnInit() {
    this.portfolioServ.getPortfolio().subscribe(
      (portfolio) => (this.portfolio = portfolio)
    );
  }

}


