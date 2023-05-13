import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RestApiService} from "../../../../core/services/rest-api.service";
import {User} from "../../../../shared/models/user";
import {SelectOption} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {NotificationService} from "../../../../core/services/notification.service";
import {UsernameValidators} from "../../validators/username-validators";
import {Subject, takeUntil} from "rxjs";
import {SiteNavigationLink} from "../../../../shared/types/site-navigation-link";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnDestroy{
  private unsubscribe$ = new Subject<void>();
  private readonly roomNumberPattern: RegExp = new RegExp("^\\d{1,3}[.]\\d{1,3}[.]\\d{1,3}$")
  private readonly namePattern: RegExp = new RegExp("^[a-zA-Z\x7f-\xff-]{2,}(\\s?[a-zA-Z\x7f-\xff-]{2,})*$")

  readonly registrationForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.namePattern)]],
    lastName: ['', [Validators.required, Validators.minLength(3),Validators.pattern(this.namePattern)]],
    email: ['', [Validators.required, Validators.minLength(7)], UsernameValidators.usernameAvailable(this.restApiService)],
    password: [null, [Validators.required, Validators.minLength(8)]],
    profession: [null, [Validators.required, Validators.pattern(this.namePattern)]],
    department: [null, [Validators.required, Validators.pattern(this.namePattern)]],
    roomNumber: [null, Validators.pattern(this.roomNumberPattern)],
    accessRole: [null, Validators.required]
  })

  readonly accessRoleSelectOptions: SelectOption[] = [
    { label: "Member", value: "MEMBER" },
    { label: "Administrator", value: "ADMINISTRATOR" },
  ]

  readonly breadcrumbs: SiteNavigationLink[] = [
    {displayName: "Admin", routerLink: "/admin"},
    {displayName: "User Registration", routerLink: "/admin/register"},
  ]

  constructor(
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    private notification: NotificationService
  ) { }

  onSubmit() {
    const formValues = this.registrationForm.value
    const userToRegister: User = Object.assign(new User(), formValues)

    this.restApiService.createUser(userToRegister)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (createdUser: User) => {
      this.notification.showSuccess(`Nutzer ${createdUser.email} wurde erstellt`)
      this.registrationForm.reset()
      },
      error: () => this.notification.showError("Nutzer konnte nicht erstellt werden. Bitte versuche es erneut")
    })

  }

  autofillDefaultUsername() {
    const firstName = this.registrationForm.get('firstName')?.value
    const lastName = this.registrationForm.get('lastName')?.value
    const username = this.registrationForm.get('email')

    firstName && lastName ?
      username?.setValue(`${firstName}.${lastName}`.toLowerCase()) :
      username?.reset()

    username?.markAsTouched()
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
