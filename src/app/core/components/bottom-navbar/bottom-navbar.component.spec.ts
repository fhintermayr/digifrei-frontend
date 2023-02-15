import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbarComponent } from './bottom-navbar.component';
import {RouterTestingModule} from "@angular/router/testing";
import {NgIconsModule} from "@ng-icons/core";
import {
  heroCalendarDaysSolid,
  heroChatBubbleOvalLeftSolid,
  heroFireSolid,
  heroHomeSolid
} from "@ng-icons/heroicons/solid";

describe('BottomNavbarComponent', () => {
  let component: BottomNavbarComponent;
  let fixture: ComponentFixture<BottomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNavbarComponent ],
      imports: [RouterTestingModule, NgIconsModule.withIcons({
        heroHomeSolid, heroFireSolid, heroCalendarDaysSolid, heroChatBubbleOvalLeftSolid
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
