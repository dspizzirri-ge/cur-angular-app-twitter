import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { IUsuario } from '../../interfaces/iusuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: IUsuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getData()
      .subscribe((data) => {
        this.usuario = { ...data };
      })
  }

}
