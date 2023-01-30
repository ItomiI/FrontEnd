import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from  '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/Login.component';
import { RegistrarComponent } from './Registrar/Registrar.component';
import { HeaderComponent } from './Componentes/Header/Header.component';

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
      HomeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
