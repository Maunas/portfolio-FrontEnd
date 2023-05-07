import { Component } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  portfolio: Portfolio = {persona: 
    {urlBanner:"https://argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/sliderimage1/1676134779/banner-ok-argentina-programa.jpg",
  urlFoto:"../../../assets/f1.jpg", nombreCompleto: "Gonzalo Maunás", profesion: "Estudiante",
descripcion: "lorem"}} as Portfolio;

}
