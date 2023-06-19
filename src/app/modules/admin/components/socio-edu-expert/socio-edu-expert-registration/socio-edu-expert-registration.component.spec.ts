import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEduExpertRegistrationComponent } from './socio-edu-expert-registration.component';

describe('SocioEduExpertRegistrationComponent', () => {
  let component: SocioEduExpertRegistrationComponent;
  let fixture: ComponentFixture<SocioEduExpertRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocioEduExpertRegistrationComponent]
    });
    fixture = TestBed.createComponent(SocioEduExpertRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
