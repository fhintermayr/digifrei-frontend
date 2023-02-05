import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardListItemComponent } from './admin-dashboard-list-item.component';
import {SafeHtmlPipe} from "../../../../../shared/pipes/safe-html.pipe";
import {RouterTestingModule} from "@angular/router/testing";

describe('AdminDashboardListItemComponent', () => {
  let component: AdminDashboardListItemComponent;
  let fixture: ComponentFixture<AdminDashboardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardListItemComponent, SafeHtmlPipe ],imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
