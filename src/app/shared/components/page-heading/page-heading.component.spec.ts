import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeadingComponent } from './page-heading.component';
import {RouterTestingModule} from "@angular/router/testing";
import {NgIconsModule} from "@ng-icons/core";
import {heroChevronLeftMini, heroChevronRightMini} from "@ng-icons/heroicons/mini";

describe('PageHeadingComponent', () => {
  let component: PageHeadingComponent;
  let fixture: ComponentFixture<PageHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHeadingComponent ],
      imports: [ RouterTestingModule, NgIconsModule.withIcons({heroChevronLeftMini, heroChevronRightMini}) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
