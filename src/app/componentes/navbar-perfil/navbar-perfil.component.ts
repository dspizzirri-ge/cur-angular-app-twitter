import { Component, OnInit, Input } from '@angular/core';
import { IActividad } from 'src/app/interfaces/iactividad';

@Component({
  selector: 'app-navbar-perfil',
  templateUrl: './navbar-perfil.component.html',
  styleUrls: ['./navbar-perfil.component.css']
})
export class NavbarPerfilComponent implements OnInit {

  @Input("imagenFondo") imagenFondo: string;
  @Input("actividad") actividad: IActividad;

  backgroundImage: string;

  constructor() { }

  ngOnInit() {
    this.backgroundImage = "url('" + this.imagenFondo + "')";
  }

}
