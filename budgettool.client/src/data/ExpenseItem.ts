import { ILineItem } from "./ILineItem";

/**
 * Represents an expense item.
 */ 
export class ExpenseItem implements ILineItem {

  // #region Properties

  /**
   * The unique identifier of the line item.
   */ 
  public id: number = 0;

  /**
   * The name of the line item.
   */
  public name: string = 'New Expense';

  /**
   * The planned value for the line item.
   */
  public amountPlanned: number = 0;

  /**
   * The actual value for the line item.
   */
  public amountActual: number = 0;

  /**
   * The amount left available to spend on this line item.
   */
  public amountRemaining: number = 0;

  /**
   * The line item organizational group name.
   */
  public group: string = 'Expenses';

  // #endregion
}
