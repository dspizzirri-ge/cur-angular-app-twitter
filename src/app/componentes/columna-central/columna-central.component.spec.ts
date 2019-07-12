import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaCentralComponent } from './columna-central.component';

describe('ColumnaCentralComponent', () => {
  let component: ColumnaCentralComponent;
  let fixture: ComponentFixture<ColumnaCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnaCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
