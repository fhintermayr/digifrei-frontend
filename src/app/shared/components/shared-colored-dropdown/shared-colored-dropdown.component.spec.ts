import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedColoredDropdownComponent } from './shared-colored-dropdown.component';

describe('SharedColoredDropdownComponent', () => {
  let component: SharedColoredDropdownComponent;
  let fixture: ComponentFixture<SharedColoredDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedColoredDropdownComponent ]
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
