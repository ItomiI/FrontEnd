import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditarDatosService {

  urlabout:string = "http://localhost:3000/about";
  urlExp:string = "http://localhost:3000/experiencias";
  urlEdu:string = "http://localhost:3000/educacion";
  urlPro:string = "http://localhost:3000/proyectos";
  urlss:string = "http://localhost:3000/skills-soft";
  urlsh:string = "http://localhost:3000/skills-hard";



constructor(private http:HttpClient) { }

}
