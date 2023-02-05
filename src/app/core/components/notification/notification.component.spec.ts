import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';
import {IndividualConfig, ToastPackage, ToastRef, ToastrModule} from "ngx-toastr";
import {Observable} from "rxjs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let toastPackage: ToastPackage;
  let config: IndividualConfig;
  let toastRef: ToastRef<any>;

  beforeEach(async () => {
    config = {
      disableTimeOut: true,
      easeTime: 3,
      easing: "",
      enableHtml: false,
      extendedTimeOut: 0,
      messageClass: "",
      newestOnTop: false,
      onActivateTick: false,
      payload: {},
      positionClass: "",
      progressAnimation: "decreasing",
      progressBar: false,
      tapToDismiss: false,
      titleClass: "",
      toastClass: "",
      timeOut: 0,
      closeButton: true
    };

    // @ts-ignore
    toastRef = {
      _activate: undefined,
      _afterClosed: undefined,
      _countDuplicate: undefined,
      _manualClose: undefined,
      _overlayRef: undefined,
      _resetTimeout: undefined,
      componentInstance: undefined,
      duplicatesCount: undefined,
      activate(): void {
      },
      afterActivate(): Observable<any> {
        return new Observable<any>();
      },
      afterClosed(): Observable<any> {
        return new Observable<any>();
      },
      close(): void {
      },
      countDuplicate(): Observable<number> {
        return new Observable<any>();
      },
      isInactive(): boolean {
        return false;
      },
      manualClose(): void {
      },
      manualClosed(): Observable<any> {
        return new Observable<any>();
      },
      onDuplicate(resetTimeout: boolean, countDuplicate: boolean): void {
      },
      timeoutReset(): Observable<any> {
        return new Observable<any>();
      }
    }

    toastPackage = new ToastPackage(
      1,
      config,
      'Test message',
      'Test title',
      'success',
      toastRef
    );


    await TestBed.configureTestingModule({
      declarations: [ NotificationComponent ],
      imports: [ BrowserAnimationsModule,ToastrModule.forRoot() ],
      providers: [ { provide: ToastPackage, useValue: toastPackage } ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
