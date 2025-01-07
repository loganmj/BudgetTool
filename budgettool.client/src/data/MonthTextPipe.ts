import { Pipe, PipeTransform } from "@angular/core";
import { Month } from "./Month";

/**
 * Pipes a Month enum value into a month text value
 */ 
@Pipe({
  name: 'monthText'
})
export class MonthTextPipe implements PipeTransform {

  public transform(value: Month): string {
    switch (value) {
      case Month.January:
        return 'January';
      case Month.February:
        return 'February';
      case Month.March:
        return 'March';
      case Month.April:
        return 'April';
      case Month.May:
        return 'May';
      case Month.June:
        return 'June';
      case Month.July:
        return 'July';
      case Month.August:
        return 'August';
      case Month.September:
        return 'September';
      case Month.October:
        return 'October';
      case Month.November:
        return 'November';
      case Month.December:
        return 'December';
      default:
        return 'January';
    };
  }
}
