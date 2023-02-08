import { Component, OnInit,Input } from '@angular/core';
import { Dato } from 'src/Interfaces';

@Component({
  selector: 'app-Aptitudes',
  templateUrl: './Aptitudes.component.html',
  styleUrls: ['./Aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  @Input() AptitudesS:Dato[]
  @Input() AptitudesH:Dato[]
  

  constructor() { }

  ngOnInit() {
    
  }

}
