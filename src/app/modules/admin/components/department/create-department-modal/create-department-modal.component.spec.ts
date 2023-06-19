import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepartmentModalComponent } from './create-department-modal.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DialogRef} from "@angular/cdk/dialog";
import {SharedInputComponent} from "../../../../../shared/components/shared-input/shared-input.component";
import {SharedButtonComponent} from "../../../../../shared/components/shared-button/shared-button.component";
import {ReactiveFormsModule} from "@angular/forms";

describe('CreateDepartmentModalComponent', () => {
  let component: CreateDepartmentModalComponent;
  let fixture: ComponentFixture<CreateDepartmentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDepartmentModalComponent, SharedInputComponent, SharedButtonComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        {provide: DialogRef, useValue: {}}
      ]
    });
    fixture = TestBed.createComponent(CreateDepartmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
