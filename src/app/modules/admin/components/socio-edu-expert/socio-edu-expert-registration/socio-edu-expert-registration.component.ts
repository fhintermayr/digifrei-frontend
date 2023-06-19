import { Component } from '@angular/core';
import {SocioEduExpertService} from "../../../service/socio-edu-expert.service";
import {SocioEduExpertCreationDto} from "../../../dto/socio-edu-expert-creation-dto";
import {NotificationService} from "../../../../../core/services/notification.service";
import {first} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-socio-edu-expert-registration',
  templateUrl: './socio-edu-expert-registration.component.html',
  styleUrls: ['./socio-edu-expert-registration.component.css']
})
export class SocioEduExpertRegistrationComponent {

  constructor(
    private socioEduExpertService: SocioEduExpertService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  onSubmit(socioEduExpert: SocioEduExpertCreationDto) {

    this.socioEduExpertService.registerSocioEduExpert(socioEduExpert).pipe(first()).subscribe({
      next: socioEduExpert => {
        this.notificationService.showSuccess(`Fachdienst ${socioEduExpert.firstName} ${socioEduExpert.lastName} wurde erfolgreich registriert`)
        this.router.navigate(['/admin/dashboard'])
      },
      error: () => this.notificationService.showError("Fachdienst konnte nicht registriert werden. Wende dich bitte an den Support, oder versuche es später erneut")
    })
  }

}
