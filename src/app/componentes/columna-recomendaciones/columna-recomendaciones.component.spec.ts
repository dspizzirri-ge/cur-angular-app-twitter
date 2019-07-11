import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaRecomendacionesComponent } from './columna-recomendaciones.component';

describe('ColumnaRecomendacionesComponent', () => {
  let component: ColumnaRecomendacionesComponent;
  let fixture: ComponentFixture<ColumnaRecomendacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnaRecomendacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaRecomendacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
