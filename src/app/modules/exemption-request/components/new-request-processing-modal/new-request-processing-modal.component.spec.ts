import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestProcessingModalComponent } from './new-request-processing-modal.component';
import {DialogRef} from "@angular/cdk/dialog";
import {SharedDropdownComponent} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {SharedInputComponent} from "../../../../shared/components/shared-input/shared-input.component";
import {SharedButtonComponent} from "../../../../shared/components/shared-button/shared-button.component";
import {ReactiveFormsModule} from "@angular/forms";

describe('NewRequestProcessingModalComponent', () => {
  let component: NewRequestProcessingModalComponent;
  let fixture: ComponentFixture<NewRequestProcessingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewRequestProcessingModalComponent, SharedDropdownComponent, SharedInputComponent, SharedButtonComponent
      ],
      imports: [ ReactiveFormsModule ],
      providers: [
        {provide: DialogRef, useValue: {}}
      ]
    });
    fixture = TestBed.createComponent(NewRequestProcessingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
