import { Component } from '@angular/core';
import { ITransaction } from '../../data/ITransaction';
import { MonthYear } from '../../data/MonthYear';
import { ILineItem } from '../../data/ILineItem';
import { ExpenseItem } from '../../data/ExpenseItem';

/**
 * This component contains the tables and forms to manage a monthly budget.
 */ 
@Component({
  selector: 'monthly-budget',
  standalone: false,
  templateUrl: './monthly-budget.component.html',
  styleUrl: './monthly-budget.component.scss'
})
export class MonthlyBudgetComponent {

  // #region Constants

  private TEXT_COLOR_OVERBUDGET: string = '#FF4500';
  private TEXT_COLOR_UNDERBUDGET: string = '#FFD700';
  private TEXT_COLOR_BALANCED_BUDGET: string = '#32CD32';

  // #endregion

  // #region Properties

  /**
   * The month and year of the budget window.
   */ 
  public monthYear: MonthYear = new MonthYear();

  /**
   * The array of income items.
   */
  public incomeItems: ILineItem[] = [];

  /**
   * The array of expense items.
   */
  public expenseItems: ExpenseItem[] = [];

  /**
   * The array of Transaction items.
   */ 
  public transactions: ITransaction[] = [];

  /**
   * The data source for the income table.
   */ 
  incomeDataSource = [...this.incomeItems];

  /**
   * The data source for the expense table.
   */ 
  expenseDataSource = [...this.expenseItems];

  /**
   * The total amount of income planned for the month.
   */ 
  totalPlannedIncome: number = 0;

  /**
   * The total amount of income actually received for the month.
   */ 
  totalActualIncome: number = 0;

  /**
   * The total amount of expenses planned for the month.
   */ 
  totalPlannedExpenses: number = 0;

  /**
   * The total amount of money spent for the month.
   */
  totalActualExpenses: number = 0;

  /**
   * Difference between planned income and planned expenses.
   */ 
  remainingPlannedBudget: number = 0;

  /**
   * Difference between actual income and actual expenses.
   */ 
  remainingActualBudget: number = 0;

  // #endregion

  // #region Constructors

  public constructor() { }

  // #endregion

  // #region Private Methods

  /**
   * Determines the text color for a remaining budget based on its value.
   */ 
  private getRemainingBudgetTextColor(value: number): string {

    if (value > 0) {
      return this.TEXT_COLOR_UNDERBUDGET;
    }

    if (value < 0) {
      return this.TEXT_COLOR_OVERBUDGET;
    }

    return this.TEXT_COLOR_BALANCED_BUDGET;
  }

  // #endregion

  // #region Public Methods

  /**
   * Calculates the total income, total expenses, and remaining budget.
   */
  public calculateTotals(): void {
    this.totalPlannedIncome = this.incomeItems.reduce((sum, item) => { return sum + item.amountPlanned; }, 0);
    this.totalActualIncome = this.incomeItems.reduce((sum, item) => { return sum + item.amountActual; }, 0);
    this.totalPlannedExpenses = this.expenseItems.reduce((sum, item) => { return sum + item.amountPlanned; }, 0);
    this.totalActualExpenses = this.expenseItems.reduce((sum, item) => { return sum + item.amountActual }, 0);
    this.remainingPlannedBudget = this.totalPlannedIncome - this.totalPlannedExpenses;
    this.remainingActualBudget = this.totalActualIncome - this.totalActualExpenses;
  }

  /**
   * Gets the text color for the remaining planned budget.
   * @returns
   */
  public getRemainingPlannedTextColor(): string {
    return this.getRemainingBudgetTextColor(this.remainingPlannedBudget);
  }

  /**
   * Gets the text color for the remaining actual budget.
   */ 
  public getRemainingActualTextColor(): string {
    return this.getRemainingBudgetTextColor(this.remainingActualBudget);
  }

  // #endregion
}
