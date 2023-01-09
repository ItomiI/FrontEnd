import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token:string;
  usuario:string;
  constructor(public userService: LoginService) {
    if (this.userService.checkToken()) {
      this.token = this.userService.getToken();
      this.usuario = this.userService.getUsuario();
    }else{
      this.token ="";
    }
  }

  ngOnInit() {
  }

}
