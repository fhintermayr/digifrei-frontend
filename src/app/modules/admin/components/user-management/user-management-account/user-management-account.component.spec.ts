import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementAccountComponent } from './user-management-account.component';
import {SectionHeadingComponent} from "../../../../../shared/components/section-heading/section-heading.component";
import {SharedInputComponent} from "../../../../../shared/components/shared-input/shared-input.component";
import {SharedButtonComponent} from "../../../../../shared/components/shared-button/shared-button.component";
import {ReactiveFormsModule} from "@angular/forms";

describe('UserManagementAccountComponent', () => {
  let component: UserManagementAccountComponent;
  let fixture: ComponentFixture<UserManagementAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementAccountComponent, SectionHeadingComponent, SharedInputComponent, SharedButtonComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
