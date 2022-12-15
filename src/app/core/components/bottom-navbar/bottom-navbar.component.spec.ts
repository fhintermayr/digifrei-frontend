import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbarComponent } from './bottom-navbar.component';
import {SafeHtmlPipe} from "../../../shared/pipes/safe-html.pipe";
import {RouterTestingModule} from "@angular/router/testing";

describe('BottomNavbarComponent', () => {
  let component: BottomNavbarComponent;
  let fixture: ComponentFixture<BottomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNavbarComponent, SafeHtmlPipe ],
      imports: [RouterTestingModule]
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
