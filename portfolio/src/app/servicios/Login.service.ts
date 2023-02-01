import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL:string = "http://localhost:8080/auto/logear";

  constructor(private http:HttpClient) { }

  login(usuario:string,contra:string):Observable<String[]>{
    let a= {usuario,contra};
    a["usuario"]=usuario;
    a["contra"]=contra;
    return this.http.post<String[]>(this.URL,a);
    
  }





}
