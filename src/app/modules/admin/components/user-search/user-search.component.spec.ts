import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SharedInputComponent} from "../../../../shared/components/shared-input/shared-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgIconsModule} from "@ng-icons/core";
import {heroLightBulb, heroMagnifyingGlass} from "@ng-icons/heroicons/outline";
import {heroArrowLongRightMini} from "@ng-icons/heroicons/mini";

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchComponent, SharedInputComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule,
        NgIconsModule.withIcons({heroMagnifyingGlass, heroLightBulb, heroArrowLongRightMini})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
