import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { SkillComponent } from './components/skill/skill.component';
import { BotonModificarComponent } from './components/boton-modificar/boton-modificar.component';
import { ItemSkillComponent } from './components/item-skill/item-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    FooterComponent,
    PortfolioComponent,
    PersonalComponent,
    ExperienciaComponent,
    FormacionComponent,
    ProyectoComponent,
    SkillComponent,
    BotonModificarComponent,
    ItemSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
