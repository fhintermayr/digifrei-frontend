import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardListItemComponent } from './admin-dashboard-list-item.component';
import {RouterTestingModule} from "@angular/router/testing";
import {NgIconsModule} from "@ng-icons/core";
import {heroChevronRightMini} from "@ng-icons/heroicons/mini";
import {heroAdjustmentsHorizontalSolid, heroCalendarSolid, heroUserPlusSolid} from "@ng-icons/heroicons/solid";

describe('AdminDashboardListItemComponent', () => {
  let component: AdminDashboardListItemComponent;
  let fixture: ComponentFixture<AdminDashboardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardListItemComponent ],
      imports: [ RouterTestingModule, NgIconsModule.withIcons({
        heroChevronRightMini, heroUserPlusSolid,
        heroAdjustmentsHorizontalSolid, heroCalendarSolid
      }) ]
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
