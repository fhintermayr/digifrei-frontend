import {Trainer} from "../../../shared/models/trainer";
import {ProcessingStatus} from "../enum/processing-status";

export class RequestProcessing {
  id!: number
  processingStatus!: ProcessingStatus
  comment!: string
  processingDate!: Date
  processor!: Trainer
}
