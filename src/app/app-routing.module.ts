import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { MomentosComponent } from './componentes/momentos/momentos.component';
import { NotificacionesComponent } from './componentes/notificaciones/notificaciones.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "momentos", component: MomentosComponent },
  { path: "notificaciones", component: NotificacionesComponent },
  { path: "mensajes", component: MensajesComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "**", component: HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
