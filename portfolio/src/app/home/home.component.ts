import { Component, OnInit } from '@angular/core';
import { Dato } from 'src/Interfaces';
import { GetDatosService } from '../servicios/getDatos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  descripcion:Dato;
  logros:Dato[]=[];
  educacion:Dato[]=[];
  aptitudesH:Dato[]=[];
  aptitudesS:Dato[]=[];
  proyectos:Dato[]=[];

  esperando:boolean=true;
  errorr:boolean=false;
  
  constructor(private getDatosserv:GetDatosService, private router:Router){}

  ngOnInit(){

    this.getDatosserv.getAll().subscribe({

      next:(r)=>{
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
          case "aptitudH":
            this.aptitudesH.push(a);
            break;
          case "aptitudS":
            this.aptitudesS.push(a);
            break;
                    
          default:
            break;
          }
        }
        this.esperando=false;
      },
      error:(errr)=>{
        this.esperando=false;
        this.errorr=true;
      }


    })
  }



}
