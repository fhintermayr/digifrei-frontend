import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {JwtModule} from "@auth0/angular-jwt";
import {ToastrModule} from "ngx-toastr";
import {SharedInputComponent} from "../../../../shared/components/shared-input/shared-input.component";
import {SharedButtonComponent} from "../../../../shared/components/shared-button/shared-button.component";
import {ReactiveFormsModule} from "@angular/forms";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, SharedInputComponent, SharedButtonComponent ],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => localStorage.getItem('access_token'),
            allowedDomains: ['example.com'],
            disallowedRoutes: ['example.com/examplebadroute/'],
          }
        })
      ],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
