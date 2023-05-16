import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentRequestsOverviewComponent } from './department-requests-overview.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DepartmentRequestsOverviewComponent', () => {
  let component: DepartmentRequestsOverviewComponent;
  let fixture: ComponentFixture<DepartmentRequestsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentRequestsOverviewComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentRequestsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
