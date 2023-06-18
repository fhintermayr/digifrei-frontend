import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentGridListItemComponent } from './department-grid-list-item.component';

describe('DepartmentGridListItemComponent', () => {
  let component: DepartmentGridListItemComponent;
  let fixture: ComponentFixture<DepartmentGridListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentGridListItemComponent]
    });
    fixture = TestBed.createComponent(DepartmentGridListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
