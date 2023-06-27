import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEduExpertFormComponent } from './socio-edu-expert-form.component';
import {NgIconsModule} from "@ng-icons/core";
import {heroChevronLeftMini, heroChevronRightMini} from "@ng-icons/heroicons/mini";
import {PageHeadingComponent} from "../../../../../shared/components/page-heading/page-heading.component";
import {CardComponent} from "../../../../../shared/components/card/card.component";
import {CardBodyComponent} from "../../../../../shared/components/card/card-body/card-body.component";
import {CardFooterComponent} from "../../../../../shared/components/card/card-footer/card-footer.component";
import {SharedInputComponent} from "../../../../../shared/components/shared-input/shared-input.component";
import {SharedButtonComponent} from "../../../../../shared/components/shared-button/shared-button.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {BreadcrumbComponent} from "../../../../../shared/components/breadcrumb/breadcrumb.component";

describe('SocioEduExpertFormComponent', () => {
  let component: SocioEduExpertFormComponent;
  let fixture: ComponentFixture<SocioEduExpertFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocioEduExpertFormComponent, PageHeadingComponent, CardComponent, CardBodyComponent, CardFooterComponent,
        SharedInputComponent, SharedButtonComponent, BreadcrumbComponent
      ],
      imports: [
        NgIconsModule.withIcons({heroChevronLeftMini, heroChevronRightMini}), ReactiveFormsModule, RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(SocioEduExpertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
