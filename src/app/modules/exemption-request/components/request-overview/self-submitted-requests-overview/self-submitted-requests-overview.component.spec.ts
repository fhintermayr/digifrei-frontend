import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfSubmittedRequestsOverviewComponent } from './self-submitted-requests-overview.component';

describe('SelfSubmittedRequestsOverviewComponent', () => {
  let component: SelfSubmittedRequestsOverviewComponent;
  let fixture: ComponentFixture<SelfSubmittedRequestsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfSubmittedRequestsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfSubmittedRequestsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
