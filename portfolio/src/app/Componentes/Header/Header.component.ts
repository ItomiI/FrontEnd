import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/Login.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre:string;
  b:boolean;
  constructor(private login:LoginService,private router: Router) {    
    this.b = this.login.logged()
    if(this.b)this.nombre=this.login.getCookie("nombre");
  }

  ngOnInit() {

  }

  deslogear(){
    this.login.deslogear();
    this.router.navigate(['/']);
  }

}
