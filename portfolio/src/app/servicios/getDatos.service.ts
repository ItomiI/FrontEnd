import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Dato } from '../../Interfaces';
import {Observable, observable, of} from 'rxjs';
import { UrlService } from './url.service';


@Injectable({
  providedIn: 'root'
})
export class GetDatosService {

  URL:string = this.url.URL+"miapi/datos";

constructor(private http:HttpClient,private url:UrlService) { }

getAll():Observable<Dato[]>{
  return this.http.get<Dato[]>(this.URL);
}




}
