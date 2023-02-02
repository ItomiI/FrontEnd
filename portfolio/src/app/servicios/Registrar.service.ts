import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

constructor(private http:HttpClient) { }

URL:string="http://localhost:8080/auto/registrar";


registro(usuario:string,contra:string,mailnose:string):Observable<boolean>{
  let nombre="";
  let a= {nombre,usuario,contra,mailnose};
  a["nombre"]=usuario;
  a["usuario"]=usuario;
  a["contra"]=contra;
  a["mailnose"]=mailnose;
  console.log(a)
  return this.http.post<boolean>(this.URL,a);
  
}

}
