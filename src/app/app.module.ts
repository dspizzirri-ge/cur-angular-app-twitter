import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NavbarPerfilComponent } from './componentes/navbar-perfil/navbar-perfil.component';
import { ColumnaPerfilComponent } from './componentes/columna-perfil/columna-perfil.component';
import { ColumnaRecomendacionesComponent } from './componentes/columna-recomendaciones/columna-recomendaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarPerfilComponent,
    ColumnaPerfilComponent,
    ColumnaRecomendacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
