import { Component, OnInit } from '@angular/core';
import { IRecomendado } from 'src/app/interfaces/irecomendado';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  recomendados: Array<IRecomendado>

  constructor(private usuarioSerivce: UsuarioService) {
    this.recomendados = new Array<IRecomendado>();
  }

  ngOnInit() {
    this.usuarioSerivce.getRecomendados()
      .subscribe((data) => {
        this.recomendados = [...data]
      })
  }
}
