import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { FormPersonaComponent } from './components/formularios/form-persona/form-persona.component';
import { FormExperienciaComponent } from './components/formularios/form-experiencia/form-experiencia.component';
import { FormFormacionComponent } from './components/formularios/form-formacion/form-formacion.component';
import { FormSkillComponent } from './components/formularios/form-skill/form-skill.component';
import { FormProyectoComponent } from './components/formularios/form-proyecto/form-proyecto.component';
import { FormContactoComponent } from './components/formularios/form-contacto/form-contacto.component';
import { ModificarPortfolioComponent } from './components/formularios/modificar-portfolio/modificar-portfolio.component';
import { FormItemSkillComponent } from './components/formularios/form-item-skill/form-item-skill.component';
import { InterceptorService } from './service/interceptor.service';

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
    FormSkillComponent,
    FormProyectoComponent,
    FormContactoComponent,
    ModificarPortfolioComponent,
    FormItemSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
