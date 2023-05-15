import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { ModificarPortfolioComponent } from './components/formularios/modificar-portfolio/modificar-portfolio.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'portfolio/edit', component: ModificarPortfolioComponent },
    { path: 'portfolio/login' , component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
