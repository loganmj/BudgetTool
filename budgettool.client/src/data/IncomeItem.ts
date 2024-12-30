import { ILineItem } from "./ILineItem";

/**
 * A line item data object representing income.
 */
export class IncomeItem implements ILineItem
{
  id: number;
  name: string;
  amountPlanned: number;
  amountReceived: number;

  constructor(id: number, name: string, amountPlanned: number, amountReceived: number) {
  }
}
