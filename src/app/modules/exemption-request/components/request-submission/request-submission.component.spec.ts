import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSubmissionComponent } from './request-submission.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";
import {PageHeadingComponent} from "../../../../shared/components/page-heading/page-heading.component";
import {CardComponent} from "../../../../shared/components/card/card.component";
import {CardBodyComponent} from "../../../../shared/components/card/card-body/card-body.component";
import {SharedInputComponent} from "../../../../shared/components/shared-input/shared-input.component";
import {SharedDropdownComponent} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {SharedCheckboxComponent} from "../../../../shared/components/shared-checkbox/shared-checkbox.component";
import {SharedButtonComponent} from "../../../../shared/components/shared-button/shared-button.component";
import {CardFooterComponent} from "../../../../shared/components/card/card-footer/card-footer.component";
import {NgIconsModule} from "@ng-icons/core";
import {heroChevronLeftMini, heroChevronRightMini} from "@ng-icons/heroicons/mini";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";

describe('RequestSubmissionComponent', () => {
  let component: RequestSubmissionComponent;
  let fixture: ComponentFixture<RequestSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RequestSubmissionComponent,PageHeadingComponent, CardComponent, CardBodyComponent, CardFooterComponent,
        SharedInputComponent, SharedDropdownComponent, SharedCheckboxComponent, SharedButtonComponent, BreadcrumbComponent
      ],
      imports: [
        HttpClientTestingModule, ToastrModule.forRoot(), ReactiveFormsModule, RouterTestingModule,
        NgIconsModule.withIcons({heroChevronLeftMini, heroChevronRightMini})
  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
