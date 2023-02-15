import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchResultComponent } from './user-search-result.component';
import {RouterTestingModule} from "@angular/router/testing";
import {NgIconsModule} from "@ng-icons/core";
import {heroArrowRightSolid} from "@ng-icons/heroicons/solid";

describe('UserSearchResultComponent', () => {
  let component: UserSearchResultComponent;
  let fixture: ComponentFixture<UserSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchResultComponent ],
      imports: [ RouterTestingModule, NgIconsModule.withIcons({heroArrowRightSolid}) ]
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
