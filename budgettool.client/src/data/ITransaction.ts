import { TransactionType } from "./TransactionType";

/**
 * Data object representing a financial transaction.
 */
export interface ITransaction {

  // #region Properties

  /**
   * The unique identifier of the transaction.
   */
  id: number;

  /**
   * The name of the transaction.
   */
  name: string;

  /**
   * The date of the transaction.
   */
  date: Date;

  /**
   * The amount of the transaction.
   */
  amount: number;

  /**
   * The type of the transaction.
   */
  type: TransactionType;

  // #endregion
}
