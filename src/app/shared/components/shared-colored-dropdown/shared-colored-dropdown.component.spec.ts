import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedColoredDropdownComponent } from './shared-colored-dropdown.component';
import {NgIconsModule} from "@ng-icons/core";
import {heroCheckMini, heroChevronDownMini, heroChevronUpMini} from "@ng-icons/heroicons/mini";

describe('SharedColoredDropdownComponent', () => {
  let component: SharedColoredDropdownComponent;
  let fixture: ComponentFixture<SharedColoredDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedColoredDropdownComponent ],
      imports: [NgIconsModule.withIcons({heroCheckMini, heroChevronDownMini, heroChevronUpMini})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedColoredDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
