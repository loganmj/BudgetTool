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

  /**
   * Constructs an income item with the designated data.
   * @param id
   * @param name
   * @param amountPlanned
   * @param amountReceived
   */
  constructor(id: number, name: string, amountPlanned: number, amountReceived: number)
  {
    this.id = id;
    this.name = name;
    this.amountPlanned = amountPlanned;
    this.amountReceived = amountReceived;
  }
}
