import {ExemptionCategory} from "../enum/exemption-category";

export class RequestSubmissionDto {
  startTime!: string
  endTime!: string
  reason!: string
  exemptionCategory!: ExemptionCategory
  applicantId!: number
}
