import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStatusTableHeaderComponent } from './filter-status-table-header.component';
import {SharedCheckboxComponent} from "../../../../../shared/components/shared-checkbox/shared-checkbox.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('FilterStatusTableHeaderComponent', () => {
  let component: FilterStatusTableHeaderComponent;
  let fixture: ComponentFixture<FilterStatusTableHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterStatusTableHeaderComponent, SharedCheckboxComponent],
      imports: [ BrowserAnimationsModule, ReactiveFormsModule ]
    });
    fixture = TestBed.createComponent(FilterStatusTableHeaderComponent);
    component = fixture.componentInstance;
    component.exemptionRequests = []

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
