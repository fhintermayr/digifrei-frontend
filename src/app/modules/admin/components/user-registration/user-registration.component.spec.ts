import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationComponent } from './user-registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";
import {SharedInputComponent} from "../../../../shared/components/shared-input/shared-input.component";
import {SharedDropdownComponent} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {SharedButtonComponent} from "../../../../shared/components/shared-button/shared-button.component";
import {RouterTestingModule} from "@angular/router/testing";
import {PageHeadingComponent} from "../../../../shared/components/page-heading/page-heading.component";
import {NgIconsModule} from "@ng-icons/core";
import {heroChevronLeftMini, heroChevronRightMini} from "@ng-icons/heroicons/mini";

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationComponent, SharedInputComponent, SharedDropdownComponent, SharedButtonComponent, PageHeadingComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule, ToastrModule.forRoot(), RouterTestingModule,
        NgIconsModule.withIcons({heroChevronLeftMini, heroChevronRightMini})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
