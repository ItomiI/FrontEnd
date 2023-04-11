import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class EliminarDatoService {

  URL:string = this.url.URL+"miapi/datos/eliminar/";

  constructor(private http:HttpClient,private cookies: CookieService,private url:UrlService) { }

  eliminar(id:number):Observable<boolean>{
    let a = this.cookies.get("mitoken");
    let headers = new HttpHeaders({'clave': a});
    return this.http.delete<boolean>(this.URL+id,{headers:headers});
     
  }

}

