import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Dato } from 'src/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class EliminarDatoService {

  URL:string = "http://localhost:8080/miapi/datos/editar";

  constructor(private http:HttpClient,private cookies: CookieService) { }

  eliminar(id:number):Observable<Dato>{
    let a = this.cookies.get("mitoken");
    let b= {
      clave:a,
      dato:id
  
    }
    return this.http.put<Dato>(this.URL,b);
  }



}
