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
import { LoginComponent } from './components/login/login.component';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { FormExperienciaComponent } from './components/form-experiencia/form-experiencia.component';
import { FormFormacionComponent } from './components/form-formacion/form-formacion.component';
import { FormHabilidadComponent } from './components/form-habilidad/form-habilidad.component';
import { FormProyectoComponent } from './components/form-proyecto/form-proyecto.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { ModificarPortfolioComponent } from './components/modificar-portfolio/modificar-portfolio.component';

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
    ItemSkillComponent,
    LoginComponent,
    FormPersonaComponent,
    FormExperienciaComponent,
    FormFormacionComponent,
    FormHabilidadComponent,
    FormProyectoComponent,
    FormContactoComponent,
    ModificarPortfolioComponent
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
