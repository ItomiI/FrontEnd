import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from  '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DatosPaginaService } from 'src/datosPagina.service';
import { EditarDatosService } from 'src/editarDatos.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';



const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent}


];


@NgModule({
  declarations: [			
    AppComponent,
      HomeComponent,
      HeaderComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatosPaginaService,EditarDatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
