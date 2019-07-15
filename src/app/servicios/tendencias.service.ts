import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TENDENCIAS } from './mocks/tendencias';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TendenciasService {

  constructor(private api: ApiService) { }

  getTendencias(): Observable<any> {
    if (environment.mocks) {
      return of(TENDENCIAS);
    } else {
      return this.api.get('');
    }
  }
}
