import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOverviewComponent } from './request-overview.component';
import {
  SelfSubmittedRequestsOverviewComponent
} from "./self-submitted-requests-overview/self-submitted-requests-overview.component";
import {AlertComponent} from "../../../../shared/components/alert/alert.component";
import {PageHeadingComponent} from "../../../../shared/components/page-heading/page-heading.component";
import {ExemptionRequestsTableComponent} from "./exemption-requests-table/exemption-requests-table.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {NgIconsModule} from "@ng-icons/core";
import {heroChevronLeftMini, heroChevronRightMini} from "@ng-icons/heroicons/mini";

describe('RequestOverviewComponent', () => {
  let component: RequestOverviewComponent;
  let fixture: ComponentFixture<RequestOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RequestOverviewComponent, SelfSubmittedRequestsOverviewComponent, PageHeadingComponent,
        ExemptionRequestsTableComponent, AlertComponent ],
      imports: [
        HttpClientTestingModule, RouterTestingModule,
        NgIconsModule.withIcons({heroChevronLeftMini, heroChevronRightMini})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
