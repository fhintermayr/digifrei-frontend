import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemptionRequestsTableComponent } from './exemption-requests-table.component';
import {AlertComponent} from "../../../../../shared/components/alert/alert.component";
import {NgIconsModule} from "@ng-icons/core";
import {heroChevronLeftMini, heroChevronRightMini} from "@ng-icons/heroicons/mini";
import {TablePaginationComponent} from "../../../../../shared/components/table-pagination/table-pagination.component";

describe('ExemptionRequestsTableComponent', () => {
  let component: ExemptionRequestsTableComponent;
  let fixture: ComponentFixture<ExemptionRequestsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemptionRequestsTableComponent, TablePaginationComponent,AlertComponent ],
      imports: [NgIconsModule.withIcons({heroChevronLeftMini, heroChevronRightMini})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemptionRequestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
