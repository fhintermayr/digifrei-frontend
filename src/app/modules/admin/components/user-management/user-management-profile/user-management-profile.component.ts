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
import {UserUpdateDto} from "../../../dto/user-update-dto";
import {Apprentice} from "../../../../../shared/models/apprentice";
import {lastValueFrom, Observable} from "rxjs";
import {SocioEduExpert} from "../../../../../shared/models/socio-edu-expert";
import {SocioEduExpertService} from "../../../service/socio-edu-expert.service";

@Component({
  selector: 'app-user-management-profile',
  templateUrl: './user-management-profile.component.html',
  styleUrls: ['./user-management-profile.component.css']
})
export class UserManagementProfileComponent implements OnInit {

  currentManagingUser!: User
  currentManagingApprentice?: Apprentice
  departmentDropdownSelectOptions!: SelectOption[]

  socioEduExperts$: Observable<SocioEduExpert[]> = this.socioEduExpertService.findAllContainingSearchTerm()

  private readonly namePattern: RegExp = new RegExp("^[a-zA-Z\x7f-\xff-]{2,}(\\s?[a-zA-Z\x7f-\xff-]{2,})*$")

  userEditingForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.namePattern)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.namePattern)]],
    email: ['', Validators.required],
    department: ['', Validators.required],
    socioEduExpert: [null, Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    private departmentService: DepartmentService,
    private activatedRoute: ActivatedRoute,
    private socioEduExpertService: SocioEduExpertService,
    private notification: NotificationService
    ) { }

  async ngOnInit(): Promise<void> {
    this.currentManagingUser = await this.getUserToEdit();
    this.insertUsersDataIntoForm(this.currentManagingUser)

    if ('socioEduExpert' in this.currentManagingUser) this.currentManagingApprentice = this.currentManagingUser as Apprentice
    console.debug(this.currentManagingApprentice)

    this.initializeDepartmentDropdownOptions()
  }

  private async getUserToEdit() {
    const userId: number = this.activatedRoute.snapshot.params['userId']
    const user$ = this.restApiService.getUserById(userId)

    return await lastValueFrom(user$)
  }

  private insertUsersDataIntoForm(user: User) {
    this.userEditingForm.controls.firstName.setValue(user.firstName)
    this.userEditingForm.controls.lastName.setValue(user.lastName)
    this.userEditingForm.controls.email.setValue(user.email)
    this.userEditingForm.controls.department.setValue(user.department.id.toString())
  }

  onSubmit() {
    const userUpdateDto: UserUpdateDto = new UserUpdateDto()
    Object.assign(userUpdateDto, this.userEditingForm.value)
    userUpdateDto.departmentId = parseInt(this.userEditingForm.controls.department.value!)

    this.restApiService.updateUserById(this.currentManagingUser.id, userUpdateDto).subscribe({
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

  skipUsernameAvailableValidatorIfUsernameDidntChange() {
    const usernameInput = this.userEditingForm.get('email')
    const usernameIsSameAsBefore = usernameInput?.value === this.currentManagingUser.email

    usernameIsSameAsBefore ?
      usernameInput?.clearAsyncValidators() :
      usernameInput?.setAsyncValidators(UsernameValidators.usernameAvailable(this.restApiService))

    usernameInput?.updateValueAndValidity()
  }
}
