import { Component, OnInit, Input } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { EditarDatoService } from 'src/app/servicios/EditarDato.service';
import { LoginService } from 'src/app/servicios/Login.service';

@Component({
  selector: 'app-Acerca',
  templateUrl: './Acerca.component.html',
  styleUrls: ['./Acerca.component.css']
})
export class AcercaComponent implements OnInit {
 
  @Input() Dato:Dato;

  editable:boolean;

  logeado:boolean=this.l.logged();
  constructor(private editador:EditarDatoService,private l:LoginService) {this.editable=false}

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





}
