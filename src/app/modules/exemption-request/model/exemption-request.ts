import {ExemptionCategory} from "../enum/exemption-category";
import {Apprentice} from "../../../shared/models/apprentice";

export class ExemptionRequest {
  id!: number
  startTime!: Date
  endTime!: Date
  submissionDate!: Date
  reason!: string
  exemptionCategory!: ExemptionCategory
  applicant!: Apprentice

}
