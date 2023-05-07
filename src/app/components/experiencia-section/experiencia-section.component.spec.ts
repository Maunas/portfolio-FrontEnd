import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaSectionComponent } from './experiencia-section.component';

describe('ExperienciaSectionComponent', () => {
  let component: ExperienciaSectionComponent;
  let fixture: ComponentFixture<ExperienciaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
