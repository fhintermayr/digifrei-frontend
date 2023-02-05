import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDropdownComponent } from './shared-dropdown.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('SharedDropdownComponent', () => {
  let component: SharedDropdownComponent;
  let fixture: ComponentFixture<SharedDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDropdownComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
