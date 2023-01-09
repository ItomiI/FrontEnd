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
  private token:string;
  constructor(private http: HttpClient, private cookies: CookieService) {
  }

  login(login:any): Observable<any> {
    return this.http.post(`${this.URL}Login.php`, JSON.stringify(login));
  }
  public setToken(token: string) {
    this.cookies.set("logintoken",token)
  }
  public getToken() {
    return this.cookies.get("logintoken");
  }
  public checkToken():boolean {
    if (this.cookies.check("logintoken")) {
      this.token= this.getToken()
      return true
    }else{
      this.token= "";
      return false
    }
  }
  public dameToken():string {
    return this.token;
  }
}
