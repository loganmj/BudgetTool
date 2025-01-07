/**
 * An interface for a Line Item object.
 */
export interface ILineItem {

  // #region Properties

  /**
   * The unique identifier of the line item.
   */ 
  id: number;

  /**
   * The name of the line item.
   */
  name: string;

  /**
   * The planned value for the line item.
   */
  amountPlanned: number;

  /**
   * The line item organizational group name.
   */ 
  group: string;

  // #endregion
}
