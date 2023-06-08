import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequestProcessingComponent } from './edit-request-processing.component';

describe('EditRequestProcessingComponent', () => {
  let component: EditRequestProcessingComponent;
  let fixture: ComponentFixture<EditRequestProcessingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRequestProcessingComponent]
    });
    fixture = TestBed.createComponent(EditRequestProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
