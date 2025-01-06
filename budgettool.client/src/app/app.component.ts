import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IncomeItem } from '../data/IncomeItem';
import { ILineItem } from '../data/ILineItem';
import { ExpenseItem } from '../data/ExpenseItem';
import { ExpenseTableComponent } from './expense-table/expense-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  // #region Properties

  incomeItems: IncomeItem[] = [];
  expenseItems: ExpenseItem[] = [];
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
   * Calculates the total income, total expenses, and remaining budget.
   */
  public calculateTotals(): void {
    this.totalIncome = this.incomeItems.reduce((sum, item) => sum + item.amountPlanned, 0);
    this.totalExpenses = this.expenseItems.reduce((sum, item) => sum + item.amountPlanned, 0);
    this.remainingBudget = this.totalIncome - this.totalExpenses;
  }

  /**
   * Determines the text color for the remaining budget based on its value.
   * @returns
   */
  public getRemainingColor(): string {
    if (this.remainingBudget === 0) {
      return '#32CD32';
    } else if (this.remainingBudget > 0) {
      return '#FFD700';
    } else { return '#FF4500'; }
  }

  // #endregion
}
