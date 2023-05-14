import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RestApiService} from "../../../../../core/services/rest-api.service";
import {UsernameValidators} from "../../../validators/username-validators";
import {User} from "../../../../../shared/models/user";
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../../../../../core/services/notification.service";
import {SelectOption} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {DepartmentService} from "../../../service/department.service";
import {Department} from "../../../model/department";

@Component({
  selector: 'app-user-management-profile',
  templateUrl: './user-management-profile.component.html',
  styleUrls: ['./user-management-profile.component.css']
})
export class UserManagementProfileComponent implements OnInit {

  currentManagingUser!: User
  departmentDropdownSelectOptions!: SelectOption[]

  private readonly namePattern: RegExp = new RegExp("^[a-zA-Z\x7f-\xff-]{2,}(\\s?[a-zA-Z\x7f-\xff-]{2,})*$")

  userEditingForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.namePattern)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.namePattern)]],
    email: ['', Validators.required],
    department: ['', Validators.required],
  })

  constructor(
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    private departmentService: DepartmentService,
    private activatedRoute: ActivatedRoute,
    private notification: NotificationService
    ) { }

  ngOnInit(): void {
    this.initializeUserToEdit();
    this.initializeDepartmentDropdownOptions()
  }

  private initializeUserToEdit() {
    const userIdProvidedInRoute: number = this.activatedRoute.snapshot.params['userId']

    this.restApiService.getUserById(userIdProvidedInRoute).subscribe({
      next: queriedUser => {
        this.currentManagingUser = queriedUser
        this.insertUsersDataIntoForm(queriedUser)
      },
      error: () => this.notification.showError("Der zu bearbeitende Nutzer konnte nicht geladen werden")
    })
  }

  private insertUsersDataIntoForm(user: User) {
    this.userEditingForm.controls.firstName.setValue(user.firstName)
    this.userEditingForm.controls.lastName.setValue(user.lastName)
    this.userEditingForm.controls.email.setValue(user.email)
    this.userEditingForm.controls.department.setValue(user.department.id.toString())
  }

  onSubmit() {
    this.trimAllFormValues()
    Object.assign(this.currentManagingUser, this.userEditingForm.value)

    this.restApiService.updateUserById(this.currentManagingUser).subscribe({
      next: updatedUser => {
        this.notification.showSuccess(`${updatedUser.email} was updated successfully.`)
        this.currentManagingUser = updatedUser
      },
      error: () => this.notification.showError("Wasn't able to perform the update. Please try again later.")
    })
  }

  private initializeDepartmentDropdownOptions() {
    this.departmentService.getAllDepartments().subscribe({
        next: departments => this.departmentDropdownSelectOptions = this.mapDepartmentsToDropdownSelect(departments)
      })

  }

  private mapDepartmentsToDropdownSelect(departments: Department[]): SelectOption[] {
    return departments.map(department => ({
      label: department.name,
      value: department.id
    }));
  }

  private trimAllFormValues() {
    const allFormControls = Object.values(this.userEditingForm.controls)

    allFormControls.forEach(formControl => {
      const trimmedInputValue = formControl.value?.trim() || null
      formControl.setValue(trimmedInputValue)
    })
  }

  skipUsernameAvailableValidatorIfUsernameDidntChange() {
    const usernameInput = this.userEditingForm.get('email')
    const usernameIsSameAsBefore = usernameInput?.value === this.currentManagingUser.email

    usernameIsSameAsBefore ?
      usernameInput?.clearAsyncValidators() :
      usernameInput?.setAsyncValidators(UsernameValidators.usernameAvailable(this.restApiService))

    usernameInput?.updateValueAndValidity()
  }
}
