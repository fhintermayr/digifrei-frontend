import { Component } from '@angular/core';
import {SocioEduExpert} from "../../../../../shared/models/socio-edu-expert";
import {SocioEduExpertService} from "../../../service/socio-edu-expert.service";
import {SocioEduExpertCreationDto} from "../../../dto/socio-edu-expert-creation-dto";
import {NotificationService} from "../../../../../core/services/notification.service";
import {first} from "rxjs";

@Component({
  selector: 'app-socio-edu-expert-registration',
  templateUrl: './socio-edu-expert-registration.component.html',
  styleUrls: ['./socio-edu-expert-registration.component.css']
})
export class SocioEduExpertRegistrationComponent {

  constructor(
    private socioEduExpertService: SocioEduExpertService,
    private notificationService: NotificationService
  ) { }

  onSubmit(socioEduExpert: SocioEduExpert) {

    const creationDto = new SocioEduExpertCreationDto(
      socioEduExpert.firstName,
      socioEduExpert.lastName,
      socioEduExpert.email
    )

    this.socioEduExpertService.registerSocioEduExpert(creationDto).pipe(first()).subscribe({
      next: socioEduExpert => this.notificationService.showSuccess(`Fachdienst ${socioEduExpert.firstName} ${socioEduExpert.lastName} wurde erfolgreich registriert`),
      error: () => this.notificationService.showError("Fachdienst konnte nicht registriert werden. Wende dich bitte an den Support, oder versuche es später erneut")
    })
  }

}
