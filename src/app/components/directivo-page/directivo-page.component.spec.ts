import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivoPageComponent } from './directivo-page.component';

describe('DirectivoPageComponent', () => {
  let component: DirectivoPageComponent;
  let fixture: ComponentFixture<DirectivoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
