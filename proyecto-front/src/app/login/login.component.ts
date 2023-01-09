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

  ngOnInit() {
  }

  constructor(public userService: LoginService,public router: Router) {
    console.log(userService.getToken()!="")

  }

  logear() {
    const user = {usuario: this.user, contrasena: this.password};
    this.userService.login(user).subscribe( 
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/');
    });
  }
}

/*this.userService.setToken(data.token);
      this.router.navigateByUrl('/'); */
