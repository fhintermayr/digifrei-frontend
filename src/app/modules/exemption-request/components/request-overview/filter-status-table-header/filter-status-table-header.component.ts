import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProcessingStatus} from "../../../enum/processing-status";
import {FormBuilder} from "@angular/forms";
import {ExemptionRequest} from "../../../model/exemption-request";

@Component({
  selector: 'app-filter-status-table-header',
  templateUrl: './filter-status-table-header.component.html',
  styleUrls: ['./filter-status-table-header.component.css']
})
export class FilterStatusTableHeaderComponent implements OnInit {

  @Input()
  exemptionRequests!: ExemptionRequest[]
  @Output()
  exemptionRequestsChange: EventEmitter<ExemptionRequest[]> = new EventEmitter<ExemptionRequest[]>()

  allExemptionRequests!: ExemptionRequest[]

  isDropdownOpen = false

  filterStatusForm = this.formBuilder.group({
    submitted: [true],
    approved: [true],
    rejected: [true],
    recordedInSystem: [true],
    confirmationPresent: [true],
    confirmationMissing: [true]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.allExemptionRequests = [...this.exemptionRequests]

    this.filterStatusForm.valueChanges.subscribe({
      next: checkedValues => this.applyStatusFilter(checkedValues)
    })
  }

  private applyStatusFilter(checkedValues: any) {

    const filteredRequests = this.allExemptionRequests.filter(request => {

      return (
        (checkedValues.submitted && !request.requestProcessing) ||
        (checkedValues.approved && request.requestProcessing && request.requestProcessing.processingStatus === ProcessingStatus.APPROVED) ||
        (checkedValues.rejected && request.requestProcessing && request.requestProcessing.processingStatus === ProcessingStatus.REJECTED) ||
        (checkedValues.recordedInSystem && request.requestProcessing && request.requestProcessing.processingStatus === ProcessingStatus.RECORDED_IN_SYSTEM) ||
        (checkedValues.confirmationPresent && request.requestProcessing && request.requestProcessing.processingStatus === ProcessingStatus.CONFIRMATION_PRESENT) ||
        (checkedValues.confirmationMissing && request.requestProcessing && request.requestProcessing.processingStatus === ProcessingStatus.CONFIRMATION_MISSING)
      )
    })

    this.exemptionRequestsChange.emit(filteredRequests)
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  onClickedOutside() {
    if (this.isDropdownOpen) this.isDropdownOpen = false
  }

  protected readonly ProcessingStatus = ProcessingStatus
}
