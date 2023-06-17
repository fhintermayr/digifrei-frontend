import {SelectOption} from "../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ExemptionCategory} from "../enum/exemption-category";

export class ExemptionCategoryUtil {

  public static getCategoriesAsDropdownOption(): SelectOption[] {
    return Object.entries(ExemptionCategory)
      .map(([key, value]) => ({
        label: key,
        value: value
      }))
  }
}
