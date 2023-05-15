import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemptionRequestsTableComponent } from './exemption-requests-table.component';

describe('ExemptionRequestsTableComponent', () => {
  let component: ExemptionRequestsTableComponent;
  let fixture: ComponentFixture<ExemptionRequestsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemptionRequestsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemptionRequestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
