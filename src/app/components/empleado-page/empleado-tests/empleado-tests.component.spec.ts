import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoTestsComponent } from './empleado-tests.component';

describe('EmpleadoTestsComponent', () => {
  let component: EmpleadoTestsComponent;
  let fixture: ComponentFixture<EmpleadoTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
