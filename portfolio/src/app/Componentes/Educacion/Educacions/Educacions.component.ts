import { Component, OnInit,Input } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { LoginService } from 'src/app/servicios/Login.service';
import { NuevoDatoService } from 'src/app/servicios/NuevoDato.service';

@Component({
  selector: 'app-Educacions',
  templateUrl: './Educacions.component.html',
  styleUrls: ['./Educacions.component.css']
})
export class EducacionsComponent implements OnInit {

  @Input() EducacionsDato:Dato[]
  creado:boolean=false;
  logeado:boolean=this.l.logged();
  nuevoDato:Dato = new Dato();

  constructor(private nd:NuevoDatoService,private l:LoginService) { }
  ngOnInit() {
    this.nuevoDato.texto="";
    this.nuevoDato.rutaimagen="";
    this.nuevoDato.titulo="";
    this.nuevoDato.numero=0;
    this.nuevoDato.link="";
  }
  newDato():void{
    this.creado=!this.creado;
  }

  guardar(){
    if (this.nuevoDato.texto=="" || this.nuevoDato.titulo=="") return;
    this.nd.enviar(this.nuevoDato,this.EducacionsDato[0].tipodato.id.toString()).subscribe(r=>{
      this.newDato();
    })
  }

}
