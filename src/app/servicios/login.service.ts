import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { LOGIN } from './mocks/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService:ApiService) { }

  private usuarioLogueado:number;

  login(usuario): Observable<any> {
    if (environment.mocks) {
      return of(LOGIN);
    } else {
      return this.apiService.post('login', usuario);
    }
  }

  getUsuarioLogueado():number{
    return this.usuarioLogueado;
  }

  setUsuarioLogueado(idUsuarioLogueado:number):number{
    return this.usuarioLogueado = idUsuarioLogueado;
  }
}
