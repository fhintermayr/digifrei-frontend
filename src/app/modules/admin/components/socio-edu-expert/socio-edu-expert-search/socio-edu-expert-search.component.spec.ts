import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEduExpertSearchComponent } from './socio-edu-expert-search.component';

describe('SocioEduExpertSearchComponent', () => {
  let component: SocioEduExpertSearchComponent;
  let fixture: ComponentFixture<SocioEduExpertSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocioEduExpertSearchComponent]
    });
    fixture = TestBed.createComponent(SocioEduExpertSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
