import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NavbarPerfilComponent } from './componentes/navbar-perfil/navbar-perfil.component';
import { ColumnaPerfilComponent } from './componentes/columna-perfil/columna-perfil.component';
import { RecomendacionesComponent } from './componentes/recomendaciones/recomendaciones.component';
import { TweetsComponent } from './componentes/tweets/tweets.component';
import { TweetComponent } from './componentes/tweet/tweet.component';
import { UsuarioRecomendadoComponent } from './componentes/usuario-recomendado/usuario-recomendado.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { HomeComponent } from './componentes/home/home.component';
import { MomentosComponent } from './componentes/momentos/momentos.component';
import { NotificacionesComponent } from './componentes/notificaciones/notificaciones.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { TendenciasComponent } from './componentes/tendencias/tendencias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarPerfilComponent,
    ColumnaPerfilComponent,
    RecomendacionesComponent,
    TweetsComponent,
    TweetComponent,
    UsuarioRecomendadoComponent,
    ModalComponent,
    HomeComponent,
    MomentosComponent,
    NotificacionesComponent,
    MensajesComponent,
    PerfilComponent,
    TendenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
