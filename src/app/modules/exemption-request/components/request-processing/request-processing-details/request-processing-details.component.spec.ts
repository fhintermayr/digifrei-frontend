import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProcessingDetailsComponent } from './request-processing-details.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";
import {CardComponent} from "../../../../../shared/components/card/card.component";
import {CardHeaderComponent} from "../../../../../shared/components/card/card-header/card-header.component";
import {SharedButtonComponent} from "../../../../../shared/components/shared-button/shared-button.component";
import {IfRoleDirective} from "../../../../../shared/directives/if-role.directive";

describe('RequestProcessingDetailsComponent', () => {
  let component: RequestProcessingDetailsComponent;
  let fixture: ComponentFixture<RequestProcessingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RequestProcessingDetailsComponent, CardComponent, CardHeaderComponent, SharedButtonComponent, IfRoleDirective
      ],
      imports: [ HttpClientTestingModule, ToastrModule.forRoot() ]
    });
    fixture = TestBed.createComponent(RequestProcessingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
