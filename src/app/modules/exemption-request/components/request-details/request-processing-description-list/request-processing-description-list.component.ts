import {Component, Input} from '@angular/core';
import {RequestProcessing} from "../../../model/request-processing";

@Component({
  selector: 'app-request-processing-description-list',
  templateUrl: './request-processing-description-list.component.html',
  styleUrls: ['./request-processing-description-list.component.css']
})
export class RequestProcessingDescriptionListComponent {

  @Input()
  requestProcessing!: RequestProcessing

}
