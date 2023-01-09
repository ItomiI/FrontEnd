import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string;
  password:string;

  logeoCorrecto:boolean;

  ngOnInit() {
  }

  constructor(public userService: LoginService,public router: Router) {
  

  }

  hacerLogin() {
    const user = {user: this.user, password: this.password};
    this.userService.login(user).subscribe(data => 
      {
        if(data.loged==true){
          this.userService.setToken(data.token);
          this.userService.setUsuario(data.user);
          this.router.navigateByUrl('/');
        }else{
          alert("usuario o contraseña incorrectos");
        }
      });
  }
}

/*this.userService.setToken(data.token);*/
