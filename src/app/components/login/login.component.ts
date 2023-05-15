import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces';
import { LoginService } from 'src/app/service/login.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private login: LoginService,
    private validation: ValidationService
  ) {}

  usuario: Usuario = {username: '', password: ''};

  iniciarSesion() {
    if (this.validation.validarLogin(this.usuario)) {
      this.login
        .login(this.usuario)
        .subscribe(() => this.router.navigate(['/portfolio/edit']));
    }
  }
}
