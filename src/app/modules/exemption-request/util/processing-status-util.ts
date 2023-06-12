import {SelectOption} from "../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ProcessingStatus} from "../enum/processing-status";
import {FormatProcessingStatusPipe} from "../pipes/format-processing-status.pipe";

export class ProcessingStatusUtil {

  public static getStatusAsDropdownOption(): SelectOption[] {

    const formatProcessingStatusPipe = new FormatProcessingStatusPipe()

    return Object.entries(ProcessingStatus)
      .map(([, value]) => ({
        label: formatProcessingStatusPipe.transform(value),
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
