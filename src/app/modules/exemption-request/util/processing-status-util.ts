import {SelectOption} from "../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ProcessingStatus} from "../enum/processing-status";

export class ProcessingStatusUtil {

  public static getStatusAsDropdownOption(): SelectOption[] {
    return Object.entries(ProcessingStatus)
      .map(([key, value]) => ({
        label: key,
        value: value
      }))
  }

  public static getStatusForNewProcessingAsDropdownOption(): SelectOption[] {
    return this.getStatusAsDropdownOption().filter(selectOption => this.isStatusForNewProcessing(selectOption))
}

private static isStatusForNewProcessing(selectOption: SelectOption) {
    return selectOption.value !== ProcessingStatus.DRAFT && selectOption.value !== ProcessingStatus.SUBMITTED
}


}
