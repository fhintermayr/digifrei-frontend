import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCheckboxComponent } from './shared-checkbox.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('SharedCheckboxComponent', () => {
  let component: SharedCheckboxComponent;
  let fixture: ComponentFixture<SharedCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedCheckboxComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
