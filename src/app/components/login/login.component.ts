import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:String = "";
  password: String = "";

  constructor(private router:Router, private login:LoginService){
  }

  usuario: Usuario = {} as Usuario;

  iniciarSesion(){
    this.login.login(this.usuario).subscribe(
      () => this.router.navigate(["/portfolio/edit"])
    );
  }
}
