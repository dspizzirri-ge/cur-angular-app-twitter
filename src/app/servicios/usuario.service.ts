import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { RECOMENDADOS } from './mocks/usuario/recomendados';
import { TWEETS_AMIGOS_Y_MIOS } from './mocks/usuario/tweets_amigos_y_mios';
import { TWEETS_MIOS } from './mocks/usuario/tweets_mios';
import { DATA } from './mocks/usuario/data';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private api: ApiService
  ) { }

  getData(): Observable<any> {
    if (environment.mocks) {
      return of(DATA);
    } else {
      return this.api.get('');
    }
  }

  getTweetsAmigosYMios(): Observable<any> {
    if (environment.mocks) {
      return of(TWEETS_AMIGOS_Y_MIOS);
    } else {
      return this.api.get('');

    }
  }

  getTweetsMios(): Observable<any> {
    if (environment.mocks) {
      return of(TWEETS_MIOS);
    } else {
      return this.api.get('');
    }
  }

  getRecomendados(): Observable<any> {
    if (environment.mocks) {
      return of(RECOMENDADOS);
    } else {
      return this.api.get('');
    }
  }
}
