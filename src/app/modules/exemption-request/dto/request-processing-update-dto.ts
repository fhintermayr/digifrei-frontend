import {ProcessingStatus} from "../enum/processing-status";

export class RequestProcessingUpdateDto {
  processingStatus!: ProcessingStatus
  comment?: string
}
