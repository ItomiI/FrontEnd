import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL:string = this.url.URL+"auto/logear";

  constructor(private http:HttpClient,private cookies: CookieService,private url:UrlService) { }

  login(usuario:string,contra:string):Observable<String[]>{
    let a= {usuario,contra};
    a["usuario"]=usuario;
    a["contra"]=contra;
    return this.http.post<String[]>(this.URL,a);
    
  }

  logged():boolean{
    return this.cookies.check("mitoken");
  }
  deslogear(){
    this.cookies.delete("mitoken");
    this.cookies.delete("nombre");
  }
  getCookie(a:string):string{
    return this.cookies.get(a);
  }
  setCookie(a:string,b:string){
    this.cookies.set(a,b);
  }
  checkCookie(a:string):boolean{
    return this.cookies.check(a)
  }





}
