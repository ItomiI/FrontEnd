import { Component, Input, OnInit } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { EditarDatoService } from 'src/app/servicios/EditarDato.service';
import { EliminarDatoService } from 'src/app/servicios/EliminarDato.service';
import { LoginService } from 'src/app/servicios/Login.service';

@Component({
  selector: 'app-Logro',
  templateUrl: './Logro.component.html',
  styleUrls: ['./Logro.component.css']
})
export class LogroComponent implements OnInit {

  @Input() Dato:Dato;
 
  editable:boolean=false;

  logeado:boolean=this.l.logged();
  
  constructor(private editador:EditarDatoService,private l:LoginService,private elim:EliminarDatoService) {

  }

  ngOnInit() {
  }

  toEdit(){
    this.editable=!this.editable
  }

  editar(){
    this.editador.editar(this.Dato).subscribe(r=>{
      this.editable=false;
    });
  }
  eliminar(){
    if(confirm("seguro que queres eliminar")){
      this.elim.eliminar(this.Dato.id).subscribe(r=>{
        this.editable=false;
      });
    }
  }
}
