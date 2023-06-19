import {Component, OnInit} from '@angular/core';
import {SocioEduExpert} from "../../../../../shared/models/socio-edu-expert";
import {ActivatedRoute} from "@angular/router";
import {SocioEduExpertService} from "../../../service/socio-edu-expert.service";
import {first, lastValueFrom} from "rxjs";
import {SocioEduExpertCreationDto} from "../../../dto/socio-edu-expert-creation-dto";
import {NotificationService} from "../../../../../core/services/notification.service";

@Component({
  selector: 'app-socio-edu-expert-editing',
  templateUrl: './socio-edu-expert-editing.component.html',
  styleUrls: ['./socio-edu-expert-editing.component.css']
})
export class SocioEduExpertEditingComponent implements OnInit {

  socioEduExpert?: SocioEduExpert

  constructor(
    private activatedRoute: ActivatedRoute,
    private socioEduExpertService: SocioEduExpertService,
    private notificationService: NotificationService
  ) { }

  async ngOnInit(): Promise<void> {
    this.socioEduExpert = await this.getSocioEduExpert()
  }

  private getSocioEduExpert() {

    const socioEduExpertId = this.activatedRoute.snapshot.params['id']
    const socioEduExpert$ = this.socioEduExpertService.getSocioEduExpertById(socioEduExpertId)

    return lastValueFrom(socioEduExpert$)
  }

  onSubmit(updatedSocioEduExpert: SocioEduExpertCreationDto) {

    this.socioEduExpertService.updateSocioEduExpertById(this.socioEduExpert!.id, updatedSocioEduExpert)
      .pipe(first()).subscribe({
      next: () => this.notificationService.showSuccess("Fachdienst wurde erfolgreich bearbeitet"),
      error: () => this.notificationService.showError("Es ist ein Fehler aufgetreten. Wende dich an den Support, oder versuche es später erneut")
    })

  }

}
