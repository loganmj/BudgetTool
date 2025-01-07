import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpenseItem } from '../../data/ExpenseItem';

@Component({
  selector: 'app-expense-table',
  standalone: false,
  templateUrl: './expense-table.component.html',
  styleUrl: './expense-table.component.css'
})
export class ExpenseTableComponent {

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
  public displayedColumns: string[] = ['name', 'amountPlanned', 'amountRemaining', 'actions'];

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
    this.items.push(new ExpenseItem);
    this.dataSource = [...this.items];
    this.onItemsChanged();
  }

  /**
   * Removes an object from the data array and emits the updated array.
   * @param expense The ExpenseItem object to remove.
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
   * Emits the updated expense array when any of the values changes.
   */
  public onItemsChanged(): void {
    this.itemsChange.emit(this.items);
  }

  // #endregion
}
