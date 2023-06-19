import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DepartmentService} from "../../../service/department.service";
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-edit-department-modal',
  templateUrl: './edit-department-modal.component.html',
  styleUrls: ['./edit-department-modal.component.css']
})
export class EditDepartmentModalComponent implements OnInit {
  readonly editDepartmentForm = this.formBuilder.group({
    name: ['', Validators.required]
  })

  constructor(
    private departmentService: DepartmentService,
    public dialogRef: DialogRef<string>,
    private formBuilder: FormBuilder,
    @Inject(DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.editDepartmentForm.controls.name.setValue(this.data.currentDepartmentName)
  }

  onSubmit() {
    const newDepartmentName = this.editDepartmentForm.controls.name.value

    if (!newDepartmentName) return

    this.dialogRef.close(newDepartmentName)
  }

}
