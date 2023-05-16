import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfSubmittedRequestsOverviewComponent } from './self-submitted-requests-overview.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {PageHeadingComponent} from "../../../../../shared/components/page-heading/page-heading.component";
import {ExemptionRequestsTableComponent} from "../exemption-requests-table/exemption-requests-table.component";
import {NgIconsModule} from "@ng-icons/core";
import {heroChevronLeftMini, heroChevronRightMini} from "@ng-icons/heroicons/mini";
import {RouterTestingModule} from "@angular/router/testing";
import {AlertComponent} from "../../../../../shared/components/alert/alert.component";

describe('SelfSubmittedRequestsOverviewComponent', () => {
  let component: SelfSubmittedRequestsOverviewComponent;
  let fixture: ComponentFixture<SelfSubmittedRequestsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SelfSubmittedRequestsOverviewComponent, PageHeadingComponent, ExemptionRequestsTableComponent,
        AlertComponent
      ],
      imports: [
        HttpClientTestingModule, RouterTestingModule,
        NgIconsModule.withIcons({heroChevronLeftMini, heroChevronRightMini})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfSubmittedRequestsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
