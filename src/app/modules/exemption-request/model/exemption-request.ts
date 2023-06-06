import {ExemptionCategory} from "../enum/exemption-category";
import {Apprentice} from "../../../shared/models/apprentice";
import {RequestProcessing} from "./request-processing";

export class ExemptionRequest {
  id!: number
  startTime!: Date
  endTime!: Date
  submissionDate!: Date
  reason!: string
  exemptionCategory!: ExemptionCategory
  applicant!: Apprentice
  requestProcessing!: RequestProcessing
}
