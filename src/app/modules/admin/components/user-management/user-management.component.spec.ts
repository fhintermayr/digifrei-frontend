import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementComponent } from './user-management.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {TabsComponent} from "../../../../shared/components/tabs/tabs.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementComponent, TabsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: of({id: 123})
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
