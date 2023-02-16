import { Component, OnInit,Input } from '@angular/core';
import { Dato } from 'src/Interfaces';

@Component({
  selector: 'app-Educacions',
  templateUrl: './Educacions.component.html',
  styleUrls: ['./Educacions.component.css']
})
export class EducacionsComponent implements OnInit {

  @Input() EducacionsDato:Dato[]

  constructor() { }

  ngOnInit() {
  }

}
