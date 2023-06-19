import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEduExpertFormComponent } from './socio-edu-expert-form.component';

describe('SocioEduExpertFormComponent', () => {
  let component: SocioEduExpertFormComponent;
  let fixture: ComponentFixture<SocioEduExpertFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocioEduExpertFormComponent]
    });
    fixture = TestBed.createComponent(SocioEduExpertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
