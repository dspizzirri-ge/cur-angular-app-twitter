import { Component, OnInit, Input } from '@angular/core';
import { IRecomendado } from 'src/app/interfaces/irecomendado';

@Component({
  selector: 'app-usuario-recomendado',
  templateUrl: './usuario-recomendado.component.html',
  styleUrls: ['./usuario-recomendado.component.css']
})
export class UsuarioRecomendadoComponent implements OnInit {

  @Input("usuario") usuario:IRecomendado;

  constructor() { }

  ngOnInit() {
  }

}
