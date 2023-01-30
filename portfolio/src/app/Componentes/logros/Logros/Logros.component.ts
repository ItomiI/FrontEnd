import { Component, OnInit, Input } from '@angular/core';
import { Dato } from 'src/Interfaces';

@Component({
  selector: 'app-Logros',
  templateUrl: './Logros.component.html',
  styleUrls: ['./Logros.component.css']
})
export class LogrosComponent implements OnInit {

  @Input() LogrosDato:Dato[]


  constructor() { }

  ngOnInit() {
  }

}
