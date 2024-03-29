import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from  '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
 
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
import { AptitudComponent } from './Componentes/Aptitudes/Aptitud/Aptitud.component';
import { AptitudesComponent } from './Componentes/Aptitudes/Aptitudes/Aptitudes.component';
import { ErrorrComponent } from './Errorr/Errorr.component';
import { PlusComponent } from './Componentes/icons/Plus/Plus.component';
import { ElimComponent } from './Componentes/icons/Elim/Elim.component';
import { SaveComponent } from './Componentes/icons/Save/Save.component';
import { EditComponent } from './Componentes/icons/Edit/Edit.component';
import { AvionComponent } from './Componentes/icons/Avion/Avion.component';

const appRoutes:Routes=[
  {path: '', component: HomeComponent  },
  {path:'index',redirectTo: ''},
  {path:'login',component:LoginComponent},
  /*{path:'registrar',component:RegistrarComponent}*/
  {path: '404', component: ErrorrComponent},
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
      ProyectosComponent,
      AptitudComponent,
      AptitudesComponent,
      PlusComponent,
      ElimComponent,
      SaveComponent,
      EditComponent,
      AvionComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
