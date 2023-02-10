import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchResultComponent } from './user-search-result.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('UserSearchResultComponent', () => {
  let component: UserSearchResultComponent;
  let fixture: ComponentFixture<UserSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchResultComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
