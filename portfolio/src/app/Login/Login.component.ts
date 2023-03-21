import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/Login.service';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router: Router) { }

  public miform:FormGroup;


  ngOnInit() {
    this.miform =new FormGroup({
      user:new FormControl(),
      contra:new FormControl()
    })
  }

  onSubmit(){
    let user = this.miform.get('user')?.value;
    let pass = this.miform.get('contra')?.value;
    
    this.loginService.login(user,pass).subscribe(r=>{
      if(r[0] != null){
        this.loginService.setCookie("mitoken",r[0].toString());
        this.loginService.setCookie("nombre",r[1].toString());
        this.router.navigate(['/']);
      }else{
        alert("usuario o contraseña incorrectos")
      }


    });
  }


}
