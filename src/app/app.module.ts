import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ExperienciaSectionComponent } from './components/experiencia-section/experiencia-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    FooterComponent,
    PortfolioComponent,
    PersonalComponent,
    ExperienciaComponent,
    ExperienciaSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
