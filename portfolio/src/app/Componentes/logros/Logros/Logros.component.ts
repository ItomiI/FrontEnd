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
  nuevoDato:Dato = new Dato();
  logeado:boolean=false;

  constructor(private nd:NuevoDatoService,private l:LoginService) { }

  ngOnInit() {
    this.logeado=this.l.logged();
  }

  newDato():void{
    this.creado=!this.creado;
  }

  guardar(){
    if (this.nuevoDato.texto=="" || this.nuevoDato.titulo=="") {alert("error");return;};
    this.nd.enviar(this.nuevoDato,this.LogrosDato[0].tipodato.id.toString()).subscribe(r=>{
      this.newDato();
      window.location.reload();
    })
  }
  
}
