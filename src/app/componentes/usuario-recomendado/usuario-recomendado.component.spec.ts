import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRecomendadoComponent } from './usuario-recomendado.component';

describe('UsuarioRecomendadoComponent', () => {
  let component: UsuarioRecomendadoComponent;
  let fixture: ComponentFixture<UsuarioRecomendadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRecomendadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRecomendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
