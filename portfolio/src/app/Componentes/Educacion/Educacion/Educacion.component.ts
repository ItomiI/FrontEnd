import { Component, OnInit,Input } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { EditarDatoService } from 'src/app/servicios/EditarDato.service';
import { LoginService } from 'src/app/servicios/Login.service';

@Component({
  selector: 'app-Educacion',
  templateUrl: './Educacion.component.html',
  styleUrls: ['./Educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() EducacionDato:Dato;

  editable:boolean;
  
  logeado:boolean=this.l.logged();
  
  constructor(private editador:EditarDatoService,private l:LoginService) {this.editable=false}

  ngOnInit() {
  }

  toEdit(){
    this.editable=!this.editable
  }
  editar(){
    this.editador.editar(this.EducacionDato).subscribe(r=>{
      console.log(r)
      this.editable=false;
    });
    
  }
}
