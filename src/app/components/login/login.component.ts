import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:String = "";
  password: String = "";

  constructor(private router:Router){
  }
  iniciarSesion(){
    this.router.navigate(['/portfolio/edit']);
  }
}
