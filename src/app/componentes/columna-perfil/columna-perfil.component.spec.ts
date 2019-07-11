import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaPerfilComponent } from './columna-perfil.component';

describe('ColumnaPerfilComponent', () => {
  let component: ColumnaPerfilComponent;
  let fixture: ComponentFixture<ColumnaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
