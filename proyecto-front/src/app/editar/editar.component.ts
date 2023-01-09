import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/login.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  loged:boolean;
  
  constructor(public userService: LoginService) {
    this.loged = this.userService.checkToken();
  }

  ngOnInit() {
  }

}
