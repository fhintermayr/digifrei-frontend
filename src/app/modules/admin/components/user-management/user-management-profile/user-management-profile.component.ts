import {Component, OnInit} from '@angular/core';
import {SelectOption} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {FormBuilder, Validators} from "@angular/forms";
import {RestApiService} from "../../../../../core/services/rest-api.service";
import {UsernameValidators} from "../../../validators/username-validators";
import {User} from "../../../../../shared/models/user";
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../../../../../core/services/notification.service";

@Component({
  selector: 'app-user-management-profile',
  templateUrl: './user-management-profile.component.html',
  styleUrls: ['./user-management-profile.component.css']
})
export class UserManagementProfileComponent implements OnInit {

  currentManagingUser: User = new User()

  readonly genderSelectOptions: SelectOption[] = [
    { label: "Male", value: "MALE" },
    { label: "Female", value: "FEMALE" },
    { label: "Diverse", value: "DIVERSE" },
  ]

  private readonly roomNumberPattern: RegExp = new RegExp("^\\d{1,3}[.]\\d{1,3}[.]\\d{1,3}$")

  userEditingForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.minLength(7)]],
    dateOfBirth: [''],
    gender: ['', Validators.required],
    profession: ['', Validators.required],
    department: ['', Validators.required],
    roomNumber: ['', Validators.pattern(this.roomNumberPattern)]
  })

  constructor(
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    private activatedRoute: ActivatedRoute,
    private notification: NotificationService
    ) { }

  ngOnInit(): void {
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
    this.userEditingForm.controls.username.setValue(user.username)
    if (user.dateOfBirth) this.userEditingForm.controls.dateOfBirth.setValue(user.dateOfBirth.toString())
    this.userEditingForm.controls.gender.setValue(user.gender)
    this.userEditingForm.controls.profession.setValue(user.profession)
    this.userEditingForm.controls.department.setValue(user.department)
    if (user.roomNumber) this.userEditingForm.controls.roomNumber.setValue(user.roomNumber)
  }

  onSubmit() {
    this.setOptionalInputsToNullIfEmpty()

    Object.assign(this.currentManagingUser, this.userEditingForm.value)
    //TODO: Add call to endpoint
  }

  setOptionalInputsToNullIfEmpty() {
    const allEmptyOptionalFormControls = this.getEmptyOptionalFormControls()

    allEmptyOptionalFormControls.forEach(formControl => formControl.setValue(null))
  }

  getEmptyOptionalFormControls() {
    const allFormControls = Object.values(this.userEditingForm.controls)

    return allFormControls
      .filter(formControl => !formControl.hasValidator(Validators.required))
      .filter(formControl => formControl.value?.trim() === "")
  }

  skipUsernameAvailableValidatorIfUsernameDidntChange() {
    const usernameInput = this.userEditingForm.get('username')
    const usernameIsSameAsBefore = usernameInput?.value === this.currentManagingUser.username

    usernameIsSameAsBefore ?
      usernameInput?.clearAsyncValidators() :
      usernameInput?.setAsyncValidators(UsernameValidators.usernameAvailable(this.restApiService))

    usernameInput?.updateValueAndValidity()
  }

}
