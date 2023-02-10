import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementProfileComponent } from './user-management-profile.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {ToastrModule} from "ngx-toastr";
import {SharedInputComponent} from "../../../../../shared/components/shared-input/shared-input.component";
import {SharedButtonComponent} from "../../../../../shared/components/shared-button/shared-button.component";
import {SharedDropdownComponent} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";

describe('UserManagementProfileComponent', () => {
  let component: UserManagementProfileComponent;
  let fixture: ComponentFixture<UserManagementProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementProfileComponent, SharedInputComponent, SharedButtonComponent, SharedDropdownComponent ],
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

    fixture = TestBed.createComponent(UserManagementProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
