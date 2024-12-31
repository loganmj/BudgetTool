import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IncomeItem } from '../data/IncomeItem';
import { ILineItem } from '../data/ILineItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  // #region Properties

  incomeItems: IncomeItem[] = [];
  expenseItems: ILineItem[] = [];
  incomeDataSource = [...this.incomeItems];
  expenseDataSource = [...this.expenseItems];
  totalIncome: number = 0;
  totalExpenses: number = 0;
  remainingBudget: number = 0;

  // #endregion

  // #region Constructors
  constructor(private http: HttpClient) { }

  // #endregion

  // #region Public Methods

  /**
   * Add an income line item.
   */
  public addIncome() {
    this.incomeItems.push(new IncomeItem(0, 'New Income', 0, 0));
    this.incomeDataSource = [...this.incomeItems];
  }

  /**
   * Remove an income line item.
   * @param item
   * @returns
   */
  removeIncome(item: IncomeItem) {
    const index = this.incomeItems.indexOf(item);

    if (index <= 0) {
      return;
    }

    this.incomeItems.splice(index, 1);
    this.incomeDataSource = [...this.incomeItems];
    this.calculateTotals();
  }

  calculateTotals() {
    this.totalIncome = this.incomeItems.reduce((sum, item) => sum + item.amountPlanned, 0);
    this.totalExpenses = this.expenseItems.reduce((sum, item) => sum + item.amountPlanned, 0);
    this.remainingBudget = this.totalIncome - this.totalExpenses;
  }

  /*

  addExpense() {
    this.expenseItems.push({ description: '', amount: 0 });
    this.expenseDataSource = [...this.expenseItems];
  }

  removeExpense(item: BudgetItem) {
    const index = this.expenseItems.indexOf(item);
    if (index >= 0) {
      this.expenseItems.splice(index, 1);
      this.expenseDataSource = [...this.expenseItems];
      this.calculateTotals();
    }
  }

  getRemainingColor() {
    if (this.remainingBudget === 0) {
      return 'green';
    } else if (this.remainingBudget > 0) {
      return 'yellow';
    } else { return 'red'; }
  }

  */

  // #endregion
}
