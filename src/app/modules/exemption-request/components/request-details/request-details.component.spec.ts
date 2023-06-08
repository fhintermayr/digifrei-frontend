import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsComponent } from './request-details.component';
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";
import {DialogModule} from "@angular/cdk/dialog";

describe('RequestDetailsComponent', () => {
  let component: RequestDetailsComponent;
  let fixture: ComponentFixture<RequestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestDetailsComponent],
      imports: [ HttpClientTestingModule, ToastrModule.forRoot(), DialogModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '123' })
            }
          }
        }
      ]

    });
    fixture = TestBed.createComponent(RequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
