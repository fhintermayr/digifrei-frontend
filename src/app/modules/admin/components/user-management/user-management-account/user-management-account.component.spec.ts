import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementAccountComponent } from './user-management-account.component';
import {SectionHeadingComponent} from "../../../../../shared/components/section-heading/section-heading.component";
import {SharedInputComponent} from "../../../../../shared/components/shared-input/shared-input.component";
import {SharedButtonComponent} from "../../../../../shared/components/shared-button/shared-button.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";
import {ToastrModule} from "ngx-toastr";

describe('UserManagementAccountComponent', () => {
  let component: UserManagementAccountComponent;
  let fixture: ComponentFixture<UserManagementAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementAccountComponent, SectionHeadingComponent, SharedInputComponent, SharedButtonComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule, ToastrModule.forRoot() ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: of({id: 123})
            }
          }
        }
      ]
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
