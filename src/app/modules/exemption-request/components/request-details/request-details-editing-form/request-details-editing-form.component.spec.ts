import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsEditingFormComponent } from './request-details-editing-form.component';
import {DialogModule} from "@angular/cdk/dialog";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";

describe('RequestDetailsEditingFormComponent', () => {
  let component: RequestDetailsEditingFormComponent;
  let fixture: ComponentFixture<RequestDetailsEditingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestDetailsEditingFormComponent],
      imports: [ DialogModule, HttpClientTestingModule, ToastrModule.forRoot() ]
    });
    fixture = TestBed.createComponent(RequestDetailsEditingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
