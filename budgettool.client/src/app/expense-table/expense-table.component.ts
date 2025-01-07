import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpenseItem } from '../../data/ExpenseItem';

@Component({
  selector: 'app-expense-table',
  standalone: false,
  templateUrl: './expense-table.component.html',
  styleUrl: './expense-table.component.scss'
})
export class ExpenseTableComponent {

  // #region Constants

  private TEXT_COLOR_OVERBUDGET: string = '#FF4500';
  private TEXT_COLOR_BALANCED_BUDGET: string = '#32CD32';

  // #endregion

  // #region Properties

  /**
   * Defines an input property that will receive the array of ExpenseItem objects from the parent component.
   */
  @Input() items: ExpenseItem[] = [];

  /**
   * Defines an output property that will emit events to the parent component when the expense array changes.
   */
  @Output() itemsChange = new EventEmitter<ExpenseItem[]>();

  /**
   * The names of the table columns.
   */
  public displayedColumns: string[] = ['name', 'amountPlanned', 'amountActual', 'amountRemaining', 'actions'];

  /**
   * Initializes the data source with a copy of the items array.
   */
  public dataSource = [...this.items];

  // #endregion

  // #region Constructors

  /**
   * Empty constructor
   */
  public constructor() { }

  // #endregion

  // #region Public Methods

  /**
   * Adds a new object to the data array and emits the updated array.
   */
  public addItem(): void {
    this.items.push(new ExpenseItem());
    this.dataSource = [...this.items];
    this.onItemsChanged();
  }

  /**
   * Removes an object from the data array and emits the updated array.
   * @param item
   */
  public removeItem(item: ExpenseItem): void {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
      this.dataSource = [...this.items];
      this.onItemsChanged();
    }
  }

  /**
   * Updates the amount remaining for an expense item.
   */
  public updateAmountRemaining(item: ExpenseItem): void {
    item.amountRemaining = item.amountPlanned - item.amountActual;
    this.onItemsChanged();
  }

  /**
   * Emits the updated expense array when any of the values changes.
   */
  public onItemsChanged(): void {
    this.itemsChange.emit(this.items);
  }

  /**
   * Gets the text color string based on the amount remaining in the expense item.
   */ 
  public getAmountRemainingTextColor(item: ExpenseItem): string{
    if (item.amountRemaining >= 0) {
      return this.TEXT_COLOR_BALANCED_BUDGET;
    }

    return this.TEXT_COLOR_OVERBUDGET;
  }

  public getAmountRemainingTextClass(item: ExpenseItem): string {
    if (item.amountRemaining >= 0) {
      return 'amount-remaining-ok';
    }

    return 'amount-remaining-bad';
  }

  // #endregion
}
