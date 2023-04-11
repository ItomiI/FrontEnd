import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Dato } from 'src/Interfaces';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class EditarDatoService {

  URL:string = this.url.URL+"miapi/datos/editar";

  constructor(private http:HttpClient,private cookies: CookieService,private url:UrlService) { }

  editar(dato:Dato):Observable<Dato>{
    let a = this.cookies.get("mitoken");
    let headers = new HttpHeaders({'clave': a})
    return this.http.put<Dato>(this.URL,dato,{headers:headers});
  }

}
