import { ILineItem } from "./ILineItem";

/**
 * A line item data object representing an expense.
 */ 
export class ExpenseItem implements ILineItem {

  // #region Properties

  public id: number;
  public name: string;
  public amountPlanned: number;
  public amountRemaining: number;
  public category: string;

  // #endregion

  // #region Constructors

  /**
   * Constructs an expense item with default amountRemaining and category.
   * @param id
   * @param name
   * @param amountPlanned
   * @param amountRemaining
   * @param category
   */ 
  public constructor(id: number, name: string, amountPlanned: number, amountRemaining?: number, category?: string) {
    this.id = id;
    this.name = name;
    this.amountPlanned = amountPlanned;
    this.amountRemaining = amountRemaining || amountPlanned;
    this.category = category || '';
  }

  // #endregion
}
