import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPortfolioComponent } from './modificar-portfolio.component';

describe('ModificarPortfolioComponent', () => {
  let component: ModificarPortfolioComponent;
  let fixture: ComponentFixture<ModificarPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
