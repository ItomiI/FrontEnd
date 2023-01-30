import { Component, OnInit,Input } from '@angular/core';
import { Dato } from 'src/Interfaces';

@Component({
  selector: 'app-Educacion',
  templateUrl: './Educacion.component.html',
  styleUrls: ['./Educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() EducacionDato:Dato;

  editar:boolean;

  constructor() {this.editar=false}

  ngOnInit() {
  }

  toEdit(){
    this.editar=!this.editar
  }

}
