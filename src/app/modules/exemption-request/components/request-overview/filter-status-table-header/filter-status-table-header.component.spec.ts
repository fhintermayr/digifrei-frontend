import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStatusTableHeaderComponent } from './filter-status-table-header.component';

describe('FilterStatusTableHeaderComponent', () => {
  let component: FilterStatusTableHeaderComponent;
  let fixture: ComponentFixture<FilterStatusTableHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterStatusTableHeaderComponent]
    });
    fixture = TestBed.createComponent(FilterStatusTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
