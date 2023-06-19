import { Component } from '@angular/core';
import {DepartmentService} from "../../../service/department.service";
import {FormBuilder, Validators} from "@angular/forms";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-create-department-modal',
  templateUrl: './create-department-modal.component.html',
  styleUrls: ['./create-department-modal.component.css']
})
export class CreateDepartmentModalComponent {

  readonly createDepartmentForm = this.formBuilder.group({
    name: [null, Validators.required]
  })

  constructor(
    private departmentService: DepartmentService,
    public dialogRef: DialogRef<string>,
    private formBuilder: FormBuilder
  ) { }

  onSubmit() {
    const departmentName = this.createDepartmentForm.controls.name.value

    if (!departmentName) return

    this.dialogRef.close(departmentName)
  }
}
