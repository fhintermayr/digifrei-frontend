import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {SocioEduExpert} from "../../../../../shared/models/socio-edu-expert";
import {SocioEduExpertService} from "../../../service/socio-edu-expert.service";

@Component({
  selector: 'app-socio-edu-expert-search',
  templateUrl: './socio-edu-expert-search.component.html',
  styleUrls: ['./socio-edu-expert-search.component.css']
})
export class SocioEduExpertSearchComponent {

  matchingSocioEduExperts$!: Observable<SocioEduExpert[]>
  isSearchTermProvided: boolean = false

  constructor(private socioEduExpertService: SocioEduExpertService) {}

  onInput(searchTerm: string) {
    this.isSearchTermProvided = searchTerm?.length > 0
    this.searchSocioEduExpertsMatchingSearchTerm(searchTerm)
  }

  searchSocioEduExpertsMatchingSearchTerm(searchTerm: string) {
    this.matchingSocioEduExperts$ = this.socioEduExpertService.findAllContainingSearchTerm(searchTerm)
  }

}
