import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL:string = "http://localhost:8080/auto/logear";

  constructor(private http:HttpClient,private cookies: CookieService) { }

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
