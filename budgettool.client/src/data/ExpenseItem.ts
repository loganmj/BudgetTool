import { ILineItem } from "./ILineItem";

/**
 * A line item data object representing an expense.
 */ 
export class ExpenseItem implements ILineItem {

  // #region Properties

  /**
   * The unique identifier of the line item.
   */ 
  public id: number = 0;

  /**
   * The name of the expense item.
   */
  public name: string = 'New Expense';

  /**
   * The planned value for the expense item.
   */
  public amountPlanned: number = 0;

  /**
   * The amount remaining after spending.
   */
  public amountRemaining: number = 0;

  /**
   * The expense item organizational group name.
   */
  public group: string = 'Expenses';

  // #endregion
}
