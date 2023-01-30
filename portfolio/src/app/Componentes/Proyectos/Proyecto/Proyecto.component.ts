import { Component, OnInit,Input } from '@angular/core';
import { Dato } from 'src/Interfaces';

@Component({
  selector: 'app-Proyecto',
  templateUrl: './Proyecto.component.html',
  styleUrls: ['./Proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @Input() ProyectoDato:Dato

  editar:boolean;

  constructor() {this.editar=false}

  ngOnInit() {
  }

  toEdit(){
    this.editar=!this.editar
  }
}
