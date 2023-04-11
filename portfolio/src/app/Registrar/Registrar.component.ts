import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../servicios/Registrar.service';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Registrar',
  templateUrl: './Registrar.component.html',
  styleUrls: ['./Registrar.component.css']
})
export class RegistrarComponent implements OnInit {


  public registroForm:FormGroup;
  public submited:boolean=false;
  
  constructor(private rs:RegistrarService,private router: Router) { }
  
  ngOnInit():void {
    this.registroForm = new FormGroup({
      user: new FormControl('', [Validators.required,Validators.minLength(4)]),
      mail: new FormControl('',[Validators.required,Validators.email]),
      contra: new FormControl('',[Validators.required,Validators.minLength(8)])
    }
  );
}
  get registerFormControl() {
    return this.registroForm.controls;
  }
  onSubmit():void{

    this.submited=true;
    if (this.registroForm.valid) {

      let user = this.registroForm.get('user')?.value;
      let pass = this.registroForm.get('contra')?.value;
      let mail = this.registroForm.get('mail')?.value;

      this.rs.registro(user,pass,mail).subscribe(r=>{
        if(r){
          this.router.navigate(['/']);
        }
        else{
          alert("nombre en uso")
        }
        
      })


    }
  }
}
