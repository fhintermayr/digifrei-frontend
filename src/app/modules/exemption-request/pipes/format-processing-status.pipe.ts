import {Pipe, PipeTransform} from '@angular/core';
import {ProcessingStatus} from "../enum/processing-status";

@Pipe({
  name: 'formatProcessingStatus'
})
export class FormatProcessingStatusPipe implements PipeTransform {

  transform(value: ProcessingStatus): string {
    switch (value) {
      case ProcessingStatus.DRAFT:
        return "Entwurf"
      case ProcessingStatus.SUBMITTED:
        return "Eingereicht"
      case ProcessingStatus.APPROVED:
        return "Genehmigt"
      case ProcessingStatus.REJECTED:
        return "Abgelehnt"
      case ProcessingStatus.RECORDED_IN_SYSTEM:
        return "In IS+ Reha eingetragen"
      case ProcessingStatus.CONFIRMATION_PRESENT:
        return "Bestätigung erhalten"
      case ProcessingStatus.CONFIRMATION_MISSING:
        return "Bestätigung fehlt"
      default:
        throw new Error("Unsupported ProcessingStatus value")
    }
  }

}
