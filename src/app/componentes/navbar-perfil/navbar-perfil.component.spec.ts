import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPerfilComponent } from './navbar-perfil.component';

describe('NavbarPerfilComponent', () => {
  let component: NavbarPerfilComponent;
  let fixture: ComponentFixture<NavbarPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
