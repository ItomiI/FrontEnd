import { Component, OnInit,Input } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { LoginService } from 'src/app/servicios/Login.service';
import { NuevoDatoService } from 'src/app/servicios/NuevoDato.service';
 
@Component({
  selector: 'app-Proyectos',
  templateUrl: './Proyectos.component.html',
  styleUrls: ['./Proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() ProyectosDato:Dato[]
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
    if (this.nuevoDato.texto=="" || this.nuevoDato.titulo=="" || this.nuevoDato.link=="") {alert("error");return;};
    this.nd.enviar(this.nuevoDato,this.ProyectosDato[0].tipodato.id.toString()).subscribe(r=>{
      this.newDato();
      window.location.reload();
    })
  }
 
}
