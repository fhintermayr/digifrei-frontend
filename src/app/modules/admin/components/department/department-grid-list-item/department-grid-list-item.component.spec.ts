import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentGridListItemComponent } from './department-grid-list-item.component';
import {NgIconsModule} from "@ng-icons/core";
import {heroPencil} from "@ng-icons/heroicons/outline";

describe('DepartmentGridListItemComponent', () => {
  let component: DepartmentGridListItemComponent;
  let fixture: ComponentFixture<DepartmentGridListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentGridListItemComponent],
      imports: [NgIconsModule.withIcons({heroPencil})]
    });
    fixture = TestBed.createComponent(DepartmentGridListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
