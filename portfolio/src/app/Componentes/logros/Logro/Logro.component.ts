import { Component, Input, OnInit } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { EditarDatoService } from 'src/app/servicios/EditarDato.service';
import { LoginService } from 'src/app/servicios/Login.service';

@Component({
  selector: 'app-Logro',
  templateUrl: './Logro.component.html',
  styleUrls: ['./Logro.component.css']
})
export class LogroComponent implements OnInit {

  @Input() logroDato:Dato;
 
  editable:boolean;

  logeado:boolean=this.l.logged();
  
  constructor(private editador:EditarDatoService,private l:LoginService) {this.editable=false}

  ngOnInit() {
  }

  toEdit(){
    this.editable=!this.editable
  }

  editar(){
    this.editador.editar(this.logroDato).subscribe(r=>{
      console.log(r)
      this.editable=false;
    });
    
  }
}
