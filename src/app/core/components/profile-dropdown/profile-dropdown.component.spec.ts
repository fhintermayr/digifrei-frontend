import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropdownComponent } from './profile-dropdown.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProfileDropdownComponent', () => {
  let component: ProfileDropdownComponent;
  let fixture: ComponentFixture<ProfileDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDropdownComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ProfileDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
