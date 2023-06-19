import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEduExpertSearchResultComponent } from './socio-edu-expert-search-result.component';

describe('SocioEduExpertSearchResultComponent', () => {
  let component: SocioEduExpertSearchResultComponent;
  let fixture: ComponentFixture<SocioEduExpertSearchResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocioEduExpertSearchResultComponent]
    });
    fixture = TestBed.createComponent(SocioEduExpertSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
