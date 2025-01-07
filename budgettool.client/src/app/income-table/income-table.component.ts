// Import IncomeFormComponent and necessary modules
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILineItem } from '../../data/ILineItem';

@Component({
  selector: 'app-income-table',
  templateUrl: './income-table.component.html',
  standalone: false,
  styleUrls: ['./income-table.component.css']
})
export class IncomeTableComponent {

  // #region Properties

  /**
   * Defines an input property that will receive the array of IncomeItem objects from the parent component.
   */
  @Input() items: ILineItem[] = [];

  /**
   * Defines an output property that will emit events to the parent component when the array changes.
   */
  @Output() itemsChange = new EventEmitter<ILineItem[]>();

  /**
   * The names of the table columns.
   */
  public displayedColumns: string[] = ["name", "amountPlanned", "amountActual", "actions"];

  /**
   * Initializes the data source with a copy of the items array.
   */
  dataSource = [...this.items];

  // #endregion

  // #region Constructors

  /**
   * Empty constructor
   */
  public constructor() {}

  // #endregion

  // #region Public Methods

  /**
   * Adds a new object to the data array and emits the updated array.
   */
  public addItem() {
    this.items.push({ id: this.items.length + 1, name: 'New Income', amountPlanned: 0, amountActual: 0, group: 'Income' });
    this.dataSource = [...this.items];
    this.onItemsChanged();
  }

  /**
   * Removes an object from the data array and emits the updated array.
   * @param item
   */
  public removeItem(item: ILineItem) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
      this.dataSource = [...this.items];
      this.onItemsChanged();
    }
  }

  /**
   * Emits the updated income array when any of the values changes.
   */
  public onItemsChanged(): void {
    this.itemsChange.emit(this.items);
  }

  // #endregion
}
