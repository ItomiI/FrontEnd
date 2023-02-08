import { Component, OnInit, Input } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { LoginService } from 'src/app/servicios/Login.service';
import { NuevoDatoService } from 'src/app/servicios/NuevoDato.service';

@Component({
  selector: 'app-Logros',
  templateUrl: './Logros.component.html',
  styleUrls: ['./Logros.component.css']
})
export class LogrosComponent implements OnInit {

  @Input() LogrosDato:Dato[]
  creado:boolean=false;
  emptyDato:Dato = new Dato();
  logeado:boolean=this.l.logged();

  constructor(private nd:NuevoDatoService,private l:LoginService) { }

  ngOnInit() {
  }

  newDato():void{
    this.creado=!this.creado;
  }
  


}
