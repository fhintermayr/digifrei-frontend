import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEduExpertRegistrationComponent } from './socio-edu-expert-registration.component';
import {PageHeadingComponent} from "../../../../../shared/components/page-heading/page-heading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";
import {SocioEduExpertFormComponent} from "../socio-edu-expert-form/socio-edu-expert-form.component";
import {CardComponent} from "../../../../../shared/components/card/card.component";
import {CardBodyComponent} from "../../../../../shared/components/card/card-body/card-body.component";
import {SharedInputComponent} from "../../../../../shared/components/shared-input/shared-input.component";
import {SharedButtonComponent} from "../../../../../shared/components/shared-button/shared-button.component";
import {CardFooterComponent} from "../../../../../shared/components/card/card-footer/card-footer.component";
import {NgIconsModule} from "@ng-icons/core";
import {heroChevronLeftMini, heroChevronRightMini} from "@ng-icons/heroicons/mini";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {BreadcrumbComponent} from "../../../../../shared/components/breadcrumb/breadcrumb.component";

describe('SocioEduExpertRegistrationComponent', () => {
  let component: SocioEduExpertRegistrationComponent;
  let fixture: ComponentFixture<SocioEduExpertRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocioEduExpertRegistrationComponent, PageHeadingComponent, SocioEduExpertFormComponent, CardComponent,
        CardBodyComponent, SharedInputComponent, SharedButtonComponent, CardFooterComponent, BreadcrumbComponent
      ],
      imports: [
        HttpClientTestingModule, ToastrModule.forRoot(), ReactiveFormsModule, RouterTestingModule,
        NgIconsModule.withIcons({heroChevronLeftMini, heroChevronRightMini})
      ]
    });
    fixture = TestBed.createComponent(SocioEduExpertRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
