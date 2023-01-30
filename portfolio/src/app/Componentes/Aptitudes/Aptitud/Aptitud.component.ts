import { Component, OnInit,Input  } from '@angular/core';
import { Dato } from 'src/Interfaces';

@Component({
  selector: 'app-Aptitud',
  templateUrl: './Aptitud.component.html',
  styleUrls: ['./Aptitud.component.css']
})
export class AptitudComponent implements OnInit {

  @Input() AptitudDato:Dato;
  @Input() Color:string

  editar:boolean;

  constructor() {this.editar=false}

  ngOnInit() {
  }

  toEdit(){
    this.editar=!this.editar
  }

}
