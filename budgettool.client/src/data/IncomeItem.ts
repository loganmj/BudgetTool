import { ILineItem } from "./ILineItem";

/**
 * A line item data object representing income.
 */
export class IncomeItem implements ILineItem {

  // #region Properties

  /**
   * The unique identifier of the income item.
   */
  public id: number = 0;

  /**
   * The name of the income item.
   */
  public name: string = 'New Income';

  /**
   * The planned value for the income item.
   */
  public amountPlanned: number = 0;

  /**
   * The amount received for the income item.
   */
  public amountReceived: number = 0;

  /**
   * The income item organizational group name.
   */
  public group: string = 'Income';

  // #endregion
}
