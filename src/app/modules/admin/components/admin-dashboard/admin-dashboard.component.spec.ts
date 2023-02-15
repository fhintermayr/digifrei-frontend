import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardComponent } from './admin-dashboard.component';
import {AdminDashboardListItemComponent} from "./admin-dashboard-list-item/admin-dashboard-list-item.component";
import {RouterTestingModule} from "@angular/router/testing";
import {NgIconsModule} from "@ng-icons/core";
import {heroUserGroup} from "@ng-icons/heroicons/outline";

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardComponent, AdminDashboardListItemComponent ],
      imports: [ RouterTestingModule, NgIconsModule.withIcons({heroUserGroup}) ]
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
