import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionesComponent } from './recomendaciones.component';

describe('ColumnaRecomendacionesComponent', () => {
  let component: RecomendacionesComponent;
  let fixture: ComponentFixture<RecomendacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecomendacionesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
