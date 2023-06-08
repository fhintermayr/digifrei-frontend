import {Component, Input} from '@angular/core';
import {RequestProcessing} from "../../../model/request-processing";

@Component({
  selector: 'app-request-processing-details',
  templateUrl: './request-processing-details.component.html',
  styleUrls: ['./request-processing-details.component.css']
})
export class RequestProcessingDetailsComponent {

  @Input()
  requestProcessing!: RequestProcessing
  isCurrentlyEditing: boolean = false

  toggleEditingState() {
    this.isCurrentlyEditing = !this.isCurrentlyEditing
  }

}
