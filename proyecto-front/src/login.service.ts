import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private URL = "http://localhost/dashboard/Angular/";
  constructor(private http: HttpClient, private cookies: CookieService) {
  }
  usuario:string;
  login(login:any): Observable<any> {
    return this.http.post(`${this.URL}Login.php`, JSON.stringify(login));
  }
  public setToken(token: string):void {
    this.cookies.set("login",token)
  }
  public getToken(){
    return this.cookies.get("login");
  }
  public checkToken(){
    return this.cookies.check("login");
  }
  public setUsuario(usuario:string):void{
    this.usuario = usuario;
  }
  public getUsuario():string{
    return this.usuario;
  }


}
