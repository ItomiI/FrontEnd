import { Component, OnInit,Input  } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { EditarDatoService } from 'src/app/servicios/EditarDato.service';
import { LoginService } from 'src/app/servicios/Login.service';

@Component({
  selector: 'app-Aptitud',
  templateUrl: './Aptitud.component.html',
  styleUrls: ['./Aptitud.component.css']
})
export class AptitudComponent implements OnInit {

  @Input() AptitudDato:Dato;
  @Input() Color:string
  editable:boolean;

  logeado:boolean=this.l.logged();
  constructor(private editador:EditarDatoService,private l:LoginService) {this.editable=false}

  ngOnInit() { 
  }

  toEdit(){
    this.editable=!this.editable
  }

  editar(){
    if(!Number.isNaN(Number(this.AptitudDato.numero))){
      this.editador.editar(this.AptitudDato).subscribe(r=>{
        this.editable=false;
      });
    }
  }
}
