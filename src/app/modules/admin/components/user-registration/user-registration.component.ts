import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RestApiService} from "../../../../core/services/rest-api.service";
import {User} from "../../../../shared/models/user";
import {SelectOption} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {NotificationService} from "../../../../core/services/notification.service";
import {UsernameValidators} from "../../validators/username-validators";
import {Subject, takeUntil} from "rxjs";
import {SiteNavigationLink} from "../../../../shared/types/site-navigation-link";
import {AccessRole} from "../../../../shared/enum/access-role";
import {UserCreationDto} from "../../dto/user-creation-dto";
import {ApprenticeCreationDto} from "../../dto/apprentice-creation-dto";
import {TrainerCreationDto} from "../../dto/trainer-creation-dto";
import {DepartmentService} from "../../service/department.service";
import {Department} from "../../model/department";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit, OnDestroy{
  private unsubscribe$ = new Subject<void>();
  private readonly namePattern: RegExp = new RegExp("^[a-zA-Z\x7f-\xff-]{2,}(\\s?[a-zA-Z\x7f-\xff-]{2,})*$")

  readonly registrationForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.namePattern)]],
    lastName: ['', [Validators.required, Validators.minLength(3),Validators.pattern(this.namePattern)]],
    email: ['', [Validators.required, Validators.minLength(7)], UsernameValidators.usernameAvailable(this.restApiService)],
    password: [null, [Validators.required, Validators.minLength(8)]],
    departmentId: [null, Validators.required],
    userType: [null, Validators.required]
  })

  readonly accessRoleSelectOptions: SelectOption[] = [
    { label: "Azubi", value: AccessRole[AccessRole.APPRENTICE] },
    { label: "Ausbilder", value: AccessRole[AccessRole.TRAINER] },
  ]

  departmentDropdownSelectOptions: SelectOption[] = []

  readonly breadcrumbs: SiteNavigationLink[] = [
    {displayName: "Admin", routerLink: "/admin"},
    {displayName: "User Registration", routerLink: "/admin/register"},
  ]

  constructor(
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    private departmentService: DepartmentService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.initializeDepartmentDropdownOptions()
  }

  onSubmit() {
    const userToRegister: UserCreationDto = this.createUserCreationDto()

    console.debug(userToRegister)

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

  createUserCreationDto(): UserCreationDto {

    const formValues = this.registrationForm.value

    switch (this.registrationForm.controls.userType.value!) {
      case AccessRole.APPRENTICE:
        return new ApprenticeCreationDto(
          formValues.firstName!,
          formValues.lastName!,
          formValues.email!,
          formValues.password!,
          parseInt(formValues.departmentId!),
          1
        )
      case AccessRole.TRAINER:
        return new TrainerCreationDto(
          formValues.firstName!,
          formValues.lastName!,
          formValues.email!,
          formValues.password!,
          parseInt(formValues.departmentId!)
        )
      default:
        throw new Error("Unknown user type. Must be apprentice or trainer")
    }
  }

  private initializeDepartmentDropdownOptions() {

    this.departmentService.getAllDepartments()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: departments => this.departmentDropdownSelectOptions = this.mapDepartmentsToDropdownSelect(departments)
      })

  }

  private mapDepartmentsToDropdownSelect(departments: Department[]): SelectOption[] {
    return departments.map(department => ({
      label: department.name,
      value: department.id
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
