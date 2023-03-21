import { Component, OnInit,Input } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { LoginService } from 'src/app/servicios/Login.service';
import { NuevoDatoService } from 'src/app/servicios/NuevoDato.service';

@Component({ 
  selector: 'app-Aptitudes',
  templateUrl: './Aptitudes.component.html',
  styleUrls: ['./Aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  @Input() AptitudesS:Dato[]
  @Input() AptitudesH:Dato[]
  creados:boolean=false;
  creadoh:boolean=false;
  nuevoDatos:Dato = new Dato();
  nuevoDatoh:Dato = new Dato();
  logeado:boolean=this.l.logged();


  constructor(private nd:NuevoDatoService,private l:LoginService) { }


  newDatos():void{
    this.creados=!this.creados;
  }
  newDatoh():void{
    this.creadoh=!this.creadoh;
  }
  guardars(){
    if (this.nuevoDatos.titulo=="" || this.nuevoDatos.numero===undefined  ) {alert("error");return;};
    if(this.nuevoDatos.numero>10)this.nuevoDatos.numero=10;
    if(this.nuevoDatos.numero<0)this.nuevoDatos.numero=0;
    this.nd.enviar(this.nuevoDatos,this.AptitudesS[0].tipodato.id.toString()).subscribe(r=>{
      this.newDatos();
      window.location.reload();
    })
  }
  guardarh(){
    if (this.nuevoDatoh.numero===undefined  || this.nuevoDatoh.titulo=="") {alert("error");return;};
    if(this.nuevoDatoh.numero>10)this.nuevoDatoh.numero=10;
    if(this.nuevoDatoh.numero<0)this.nuevoDatoh.numero=0;
    this.nd.enviar(this.nuevoDatoh,this.AptitudesH[0].tipodato.id.toString()).subscribe(r=>{
      this.newDatoh();
      window.location.reload();
    })
  }
  ngOnInit() {
    
  }

}
