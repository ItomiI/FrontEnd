import { Component, OnInit,Input } from '@angular/core';
import { Dato } from 'src/Interfaces';

@Component({
  selector: 'app-Proyectos',
  templateUrl: './Proyectos.component.html',
  styleUrls: ['./Proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() ProyectosDato:Dato[]
  
  constructor() { }

  ngOnInit() {
  }

}
