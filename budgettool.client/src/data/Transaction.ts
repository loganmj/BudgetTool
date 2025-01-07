import { TransactionType } from "./TransactionType";

/**
 * Data object representing a financial transaction.
 */
export class Transaction {

  // #region Properties

  public id: number = 0;
  public name: string = 'New Transaction';
  public date: Date = new Date();
  public amount: number = 0;
  public type: TransactionType = TransactionType.Expense;

  // #endregion
}
