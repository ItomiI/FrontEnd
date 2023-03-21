import { Component, OnInit,Input  } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { EditarDatoService } from 'src/app/servicios/EditarDato.service';
import { EliminarDatoService } from 'src/app/servicios/EliminarDato.service';
import { LoginService } from 'src/app/servicios/Login.service';

@Component({
  selector: 'app-Aptitud',
  templateUrl: './Aptitud.component.html',
  styleUrls: ['./Aptitud.component.css']
})
export class AptitudComponent implements OnInit {

  @Input() Dato:Dato;
  @Input() Color:string
  editable:boolean;

  logeado:boolean=this.l.logged();
  constructor(private editador:EditarDatoService,private elim:EliminarDatoService,private l:LoginService) {this.editable=false}

  ngOnInit() { 
  }

  toEdit(){
    this.editable=!this.editable
  }

  editar(){
    let n=Number(this.Dato.numero);
    if(!Number.isNaN(n)){
      if(n>10)this.Dato.numero=10;
      if(n<0)this.Dato.numero=0;
      this.editador.editar(this.Dato).subscribe(r=>{
        this.editable=false;
      });
    }
  }
  eliminar(){
    if(confirm("seguro que queres eliminar")){
      this.elim.eliminar(this.Dato.id).subscribe(r=>{
        this.editable=false;
        window.location.reload();
      });
    }
  }
}
