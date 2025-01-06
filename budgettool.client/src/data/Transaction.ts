/**
 * Data object representing a financial transaction.
 */
export class Transaction {

  // #region Properties

  public id: number;
  public name: string;
  public date: Date;
  public amount: number;

  // #endregion

  // #region Constructors

  /**
   * Constructs a new transaction object.
   * @param id
   * @param name
   * @param date
   * @param amount
   */
  public constructor(id: number, name: string, date: Date, amount: number) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.amount = amount;
  }

  // #endregion
}
