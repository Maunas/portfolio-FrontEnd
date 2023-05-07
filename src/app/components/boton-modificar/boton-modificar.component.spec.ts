import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonModificarComponent } from './boton-modificar.component';

describe('BotonModificarComponent', () => {
  let component: BotonModificarComponent;
  let fixture: ComponentFixture<BotonModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
