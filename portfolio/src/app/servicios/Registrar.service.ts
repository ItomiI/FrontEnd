import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

constructor(private http:HttpClient,private url:UrlService) { }

URL:string = this.url.URL+"auto/registrar";


registro(usuario:string,contra:string,mailnose:string):Observable<boolean>{
  let nombre="";
  let a= {nombre,usuario,contra,mailnose};
  a["nombre"]=usuario;
  a["usuario"]=usuario;
  a["contra"]=contra;
  a["mailnose"]=mailnose;
  return this.http.post<boolean>(this.URL,a);
  
}

}
