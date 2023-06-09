import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SocioEduExpert} from "../../../../../shared/models/socio-edu-expert";
import {FormBuilder, Validators} from "@angular/forms";
import {SocioEduExpertCreationDto} from "../../../dto/socio-edu-expert-creation-dto";

@Component({
  selector: 'app-socio-edu-expert-form',
  templateUrl: './socio-edu-expert-form.component.html',
  styleUrls: ['./socio-edu-expert-form.component.css']
})
export class SocioEduExpertFormComponent implements OnInit {

  @Input()
  socioEduExpert?: SocioEduExpert
  @Output()
  submit: EventEmitter<SocioEduExpertCreationDto> = new EventEmitter<SocioEduExpertCreationDto>()

  readonly form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.socioEduExpert) this.initForm()
  }

  private initForm() {
    this.form.controls.firstName.setValue(<string>this.socioEduExpert?.firstName)
    this.form.controls.lastName.setValue(<string>this.socioEduExpert?.lastName)
    this.form.controls.email.setValue(<string>this.socioEduExpert?.email)
  }

  onSubmit() {
    const socioEduExpert: SocioEduExpertCreationDto = this.form.value as SocioEduExpertCreationDto
    this.submit.emit(socioEduExpert)
  }

}
