import { Component, Input, OnInit } from '@angular/core';
import { Dato } from 'src/Interfaces';

@Component({
  selector: 'app-Logro',
  templateUrl: './Logro.component.html',
  styleUrls: ['./Logro.component.css']
})
export class LogroComponent implements OnInit {

  @Input() logroDato:Dato;

  editar:boolean;

  constructor() {this.editar=false}

  ngOnInit() {
  }

  toEdit(){
    this.editar=!this.editar
  }
}
