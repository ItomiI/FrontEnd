import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Dato } from 'src/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class EliminarDatoService {

  URL:string = "http://localhost:8080/miapi/datos/";
  log:string = "http://localhost:8080/auto/verif";

  constructor(private http:HttpClient,private cookies: CookieService) { }

  eliminar(id:number):Observable<boolean>{
    var laurl=this.URL + id.toString();
    return this.http.delete<boolean>(laurl);
     
  }

}

