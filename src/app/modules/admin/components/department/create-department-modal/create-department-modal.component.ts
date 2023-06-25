import { Component } from '@angular/core';
import {DepartmentService} from "../../../service/department.service";
import {FormBuilder, Validators} from "@angular/forms";
import {DialogRef} from "@angular/cdk/dialog";
import {ModalComponent} from "../../../../../shared/components/modal/modal.component";

@Component({
  selector: 'app-create-department-modal',
  templateUrl: './create-department-modal.component.html',
  styleUrls: ['./create-department-modal.component.css']
})
export class CreateDepartmentModalComponent extends ModalComponent {

  readonly createDepartmentForm = this.formBuilder.group({
    name: [null, Validators.required]
  })

  constructor(
    private departmentService: DepartmentService,
    dialogRef: DialogRef<string>,
    private formBuilder: FormBuilder
  ) {
    super(dialogRef);
  }

  onSubmit() {
    const departmentName = this.createDepartmentForm.controls.name.value!
    this.dialogRef.close(departmentName)
  }

}
