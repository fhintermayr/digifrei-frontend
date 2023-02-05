import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardComponent } from './admin-dashboard.component';
import {AdminDashboardListItemComponent} from "./admin-dashboard-list-item/admin-dashboard-list-item.component";
import {SafeHtmlPipe} from "../../../../shared/pipes/safe-html.pipe";
import {RouterTestingModule} from "@angular/router/testing";

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardComponent, AdminDashboardListItemComponent, SafeHtmlPipe ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
