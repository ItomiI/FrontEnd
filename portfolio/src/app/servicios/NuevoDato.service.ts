import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dato } from 'src/Interfaces';
@Injectable({
  providedIn: 'root'
})
export class NuevoDatoService {

  URL:string = "http://localhost:8080/miapi/datos/";

  constructor(private http:HttpClient) { }

  enviar(a:Dato,donde:string):Observable<Dato>{
    var url = this.URL + donde;
    return this.http.post<Dato>(url,a);
  }
}
