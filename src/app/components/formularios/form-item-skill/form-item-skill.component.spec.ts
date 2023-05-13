import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemSkillComponent } from './form-item-skill.component';

describe('FormItemSkillComponent', () => {
  let component: FormItemSkillComponent;
  let fixture: ComponentFixture<FormItemSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormItemSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormItemSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
