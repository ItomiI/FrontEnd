import { Component, OnInit } from '@angular/core';
import { DatosPaginaService } from 'src/datosPagina.service';
import { About,Experiencia,Educacion,Skills,Proyectos } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  about:About;
  experiencias:Experiencia[];
  educacion:Educacion[];
  skillsh:Skills[];
  skillss:Skills[];
  proyectos:Proyectos[];
  n:number = 0;
  datos:any;

  constructor(private miServicio:DatosPaginaService) { }

  ngOnInit() { this.getData();
  }

  getData(){
    this.miServicio.getAbout().subscribe(response => {
      this.about = response;
      this.n+=1;
    });
    this.miServicio.getProy().subscribe(response => {
      this.proyectos = response;
      this.n+=1;
    });
    this.miServicio.getSkS().subscribe(response => {
      this.skillss = response;
      this.n+=1;
    });
    this.miServicio.getSkH().subscribe(response => {
      this.skillsh = response;
      this.n+=1;
    });
    this.miServicio.getEdu().subscribe(response => {
      this.educacion = response;
      this.n+=1;
    });
    this.miServicio.getExp().subscribe(response => {
      this.experiencias = response;
      this.n+=1;
    });
  }


}
