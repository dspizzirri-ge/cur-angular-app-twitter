import { TestBed } from '@angular/core/testing';

import { TendenciasService } from './tendencias.service';

describe('TendenciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendenciasService = TestBed.get(TendenciasService);
    expect(service).toBeTruthy();
  });
});
