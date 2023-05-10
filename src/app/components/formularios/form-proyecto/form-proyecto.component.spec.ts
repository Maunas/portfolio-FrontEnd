import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProyectoComponent } from './form-proyecto.component';

describe('FormProyectoComponent', () => {
  let component: FormProyectoComponent;
  let fixture: ComponentFixture<FormProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
