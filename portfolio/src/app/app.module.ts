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
      AcercaComponent
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
