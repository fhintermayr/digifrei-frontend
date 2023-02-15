import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import {NgIconsModule} from "@ng-icons/core";
import {heroCheckCircleMini, heroExclamationTriangleMini, heroInformationCircleMini} from "@ng-icons/heroicons/mini";

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      imports: [NgIconsModule.withIcons({
        heroInformationCircleMini, heroCheckCircleMini, heroExclamationTriangleMini
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
