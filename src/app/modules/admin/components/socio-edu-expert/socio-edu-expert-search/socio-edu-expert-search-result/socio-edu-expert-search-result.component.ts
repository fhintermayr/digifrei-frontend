import {Component, Input} from '@angular/core';
import {SocioEduExpert} from "../../../../../../shared/models/socio-edu-expert";

@Component({
  selector: 'app-socio-edu-expert-search-result',
  templateUrl: './socio-edu-expert-search-result.component.html',
  styleUrls: ['./socio-edu-expert-search-result.component.css']
})
export class SocioEduExpertSearchResultComponent {

  @Input()
  socioEduExpert?: SocioEduExpert

}
