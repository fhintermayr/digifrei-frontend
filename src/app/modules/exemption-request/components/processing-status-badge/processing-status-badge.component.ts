import {Component, Input} from '@angular/core';
import {ProcessingStatus} from "../../enum/processing-status";

@Component({
  selector: 'app-processing-status-badge',
  templateUrl: './processing-status-badge.component.html',
  styleUrls: ['./processing-status-badge.component.css']
})
export class ProcessingStatusBadgeComponent {

  @Input()
  processingStatus?: ProcessingStatus

  getClasses(): string[] {
    switch (this.processingStatus) {
      case ProcessingStatus.DRAFT:
        return ["bg-gray-50", "text-gray-600", "ring-gray-500/10"]
      case ProcessingStatus.SUBMITTED:
        return ["bg-yellow-50", "text-yellow-800", "ring-yellow-600/20"]
      case ProcessingStatus.APPROVED:
        return ["bg-green-50", "text-green-700", "ring-green-600/20"]
      case ProcessingStatus.REJECTED:
        return ["bg-red-50", "text-red-700", "ring-red-600/10"]
      case ProcessingStatus.RECORDED_IN_SYSTEM:
        return ["bg-purple-50", "text-purple-700", "ring-purple-700/10"]
      case ProcessingStatus.CONFIRMATION_PRESENT:
        return ["bg-blue-50", "text-blue-700", "ring-blue-700/10"]
      case ProcessingStatus.CONFIRMATION_MISSING:
        return ["bg-pink-50", "text-pink-700", "ring-pink-700/10"]
      default:
        return ["bg-gray-50", "text-gray-600", "ring-gray-500/10"]
    }
  }

}
