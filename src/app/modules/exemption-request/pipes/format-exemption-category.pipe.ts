import { Pipe, PipeTransform } from '@angular/core';
import {ExemptionCategory} from "../enum/exemption-category";

@Pipe({
  name: 'formatExemptionCategory'
})
export class FormatExemptionCategoryPipe implements PipeTransform {

  transform(value: ExemptionCategory): string {

    return Object.keys(ExemptionCategory).find((key) => ExemptionCategory[key as keyof typeof ExemptionCategory] === value) as string
  }

}
