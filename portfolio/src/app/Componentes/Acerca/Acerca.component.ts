import { Component, OnInit, Input } from '@angular/core';
import { Dato } from 'src/Interfaces';

@Component({
  selector: 'app-Acerca',
  templateUrl: './Acerca.component.html',
  styleUrls: ['./Acerca.component.css']
})
export class AcercaComponent implements OnInit {

  @Input() AcercaDato:Dato;
  editar:boolean;

  constructor() {this.editar=false}

  ngOnInit() {
  }

  toEdit(){
    this.editar=!this.editar
  }


}
