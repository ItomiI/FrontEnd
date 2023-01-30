import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from  '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/Login.component';
import { RegistrarComponent } from './Registrar/Registrar.component';
import { HeaderComponent } from './Componentes/Header/Header.component';
import { BannerComponent } from './Componentes/Banner/Banner.component';
import { HttpClientModule } from '@angular/common/http';
import { AcercaComponent } from './Componentes/Acerca/Acerca.component';
import { LogroComponent } from './Componentes/logros/Logro/Logro.component';
import { LogrosComponent } from './Componentes/logros/Logros/Logros.component';
import { EducacionComponent } from './Componentes/Educacion/Educacion/Educacion.component';
import { EducacionsComponent } from './Componentes/Educacion/Educacions/Educacions.component';
import { ProyectoComponent } from './Componentes/Proyectos/Proyecto/Proyecto.component';
import { ProyectosComponent } from './Componentes/Proyectos/Proyectos/Proyectos.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registrar',component:RegistrarComponent}

];


@NgModule({
  declarations: [		
    AppComponent,
      LoginComponent,
      RegistrarComponent,
      HeaderComponent,
      HomeComponent,
      BannerComponent,
      AcercaComponent,
      LogroComponent,
      LogrosComponent,
      EducacionComponent,
      EducacionsComponent,
      ProyectoComponent,
      ProyectosComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
