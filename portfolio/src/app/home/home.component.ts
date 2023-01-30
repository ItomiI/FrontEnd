import { Component, OnInit } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { GetDatosService } from '../servicios/getDatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  descripcion:Dato;
  logros:Dato[]=[];
  educacion:Dato[]=[];
  aptitudes:Dato[]=[];
  proyectos:Dato[]=[];

  constructor(private getDatosserv:GetDatosService){}

  ngOnInit(){
    this.getDatosserv.getAll().subscribe(r=>{

for (let j = 0; j < r.length; j++) {
        let a =r[j];
        switch (a.tipodato.quetipodato) {
          case "descrpcion":
            this.descripcion=(a);
            break;
          case "proyecto":
            this.proyectos.push(a);
            break;
          case "logro":
              this.logros.push(a);
              break; 
          case "educacion":
            this.educacion.push(a);
            break;
          case "aptitud":
            this.aptitudes.push(a);
            break;
          
          default:
            break;
        }
      }
    })
  }



}
