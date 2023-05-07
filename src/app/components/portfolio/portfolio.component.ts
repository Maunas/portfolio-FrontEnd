import { Component } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolio: Portfolio = {
    persona: {
      urlBanner:
        'https://argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/sliderimage1/1676134779/banner-ok-argentina-programa.jpg',
      urlFoto: '../../../assets/f1.jpg',
      nombreCompleto: 'Gonzalo Maunás',
      profesion: 'Estudiante',
      descripcion: 'lorem',
    },
    experiencia: [
      {
        puesto: 'Ejemplo',
        institucion: 'Ejemplo insti',
        urlImagen:
          'http://www.frm.utn.edu.ar/templates/ja_spica/images/logo-blue.gif',
      },
    ],
    formacion: [
      {
        carrera: 'Ejemplo',
        institucion: 'Ejemplo insti',
        urlImagen:
          'http://www.frm.utn.edu.ar/templates/ja_spica/images/logo-blue.gif',
      },
    ],
    proyecto: [
      {
        tituloProyecto: 'Ejemplo',
        descripcion: 'Descripcion',
        urlProyecto: 'https://github.com/Maunas/portfolio-BackEnd/wiki',
      },
    ],
    habilidad: [
      {
        nombreHabilidad: 'A',
        valorMax: 5,
        nivelHabilidad: 3,
        idTipoSkill: 1
      },
      {
        nombreHabilidad: 'C',
        valorMax: 5,
        nivelHabilidad: 2,
        idTipoSkill: 1
      },
      {
        nombreHabilidad: 'Banana',
        valorMax: 5,
        nivelHabilidad: 5,
        idTipoSkill: 1
      },
    ],
    tipoSkill: [{
      idTipoSkill: 1,
      nombreTipoSkill: 'Hard Skills'
    },{
      idTipoSkill: 2,
      nombreTipoSkill: 'Soft Skills'
    }]
  } as Portfolio;
}
