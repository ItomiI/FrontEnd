import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Dato } from '../../Interfaces';
import {Observable, observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDatosService {

  URL:string="http://localhost:8080/miapi/datos";

constructor(private http:HttpClient) { }

getAll():Observable<Dato[]>{
  return this.http.get<Dato[]>(this.URL);
}




}
