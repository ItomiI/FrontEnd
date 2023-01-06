import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { About,Experiencia,Educacion,Skills,Proyectos } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatosPaginaService {

  urlfirebase:string="https://argentinaprograma-39e7f-default-rtdb.firebaseio.com/about.json";

  urlAbout:string = "http://localhost:3000/about";

  urlExp:string = "http://localhost:3000/experiencias";

  urlEdu:string = "http://localhost:3000/educacion";

  urlSkih:string = "http://localhost:3000/skills-hard";

  urlSkis:string = "http://localhost:3000/skills-soft";

  urlProy:string = "http://localhost:3000/proyectos";


  constructor(private http:HttpClient){}

  /*getDB(){
    return this.http.get<any>(this.urldatos);
  }*/
  getAbout():Observable<About>{
    return this.http.get<About>(this.urlAbout);
  }
  getExp():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.urlExp);
  }
  getEdu(){
    return this.http.get<Educacion[]>(this.urlEdu);
  }
  getSkH(){
    return this.http.get<Skills[]>(this.urlSkih);
  }  
  getSkS(){
    return this.http.get<Skills[]>(this.urlSkis);
  }
  getProy(){
    return this.http.get<Proyectos[]>(this.urlProy);
  }
}