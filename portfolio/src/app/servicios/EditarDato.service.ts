import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Dato } from 'src/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class EditarDatoService {

  URL:string = "http://localhost:8080/miapi/datos/editar";

  constructor(private http:HttpClient,private cookies: CookieService) { }

  editar(eldato:Dato):Observable<Dato>{
    let a = this.cookies.get("mitoken");
    let b= {
      clave:a,
      dato:eldato
  
    }
    return this.http.put<Dato>(this.URL,b);
  }



}
