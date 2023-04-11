import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dato } from 'src/Interfaces';
import { UrlService } from './url.service';
@Injectable({
  providedIn: 'root'
})
export class NuevoDatoService {

  URL:string = this.url.URL+"miapi/datos/";

  constructor(private http:HttpClient,private url:UrlService) { }

  enviar(a:Dato,donde:string):Observable<Dato>{
    var url = this.URL + donde;
    return this.http.post<Dato>(url,a);
  }
}
