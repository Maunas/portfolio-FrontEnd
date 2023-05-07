import { Component, Input } from '@angular/core';
import { Contacto } from '../../interfaces';
import { faGithub, faLinkedin, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  @Input() contacto: Contacto = {} as Contacto;
  faIcon = faEnvelope;

  ngOnInit(){
    switch(this.contacto.nombreContacto.toLowerCase()){
      //TODO averiguar enum
      case "github": this.faIcon = faGithub; break;
      case "gmail": this.faIcon = faEnvelope; break;
      case "facebook": this.faIcon = faFacebook; break;
      case "instagram": this.faIcon = faInstagram; break;
      case "twitter": this.faIcon = faTwitter; break;
      case "linkedin": this.faIcon = faLinkedin; break;
    }
  }
}
