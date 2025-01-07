import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './angular-material.module';
import { IncomeTableComponent } from './income-table/income-table.component';
import { FormsModule } from '@angular/forms';
import { ExpenseTableComponent } from './expense-table/expense-table.component';
import { MonthlyBudgetComponent } from './monthly-budget/monthly-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomeTableComponent,
    ExpenseTableComponent,
    MonthlyBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
