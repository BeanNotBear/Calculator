import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {calculateInvestmentResults} from "../investment-results";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  items: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[] = [];
  protected readonly calculateInvestmentResults = calculateInvestmentResults;

  calculateInvestment(data: {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  }) {
    this.items = calculateInvestmentResults(data.initialInvestment, data.duration, data.expectedReturn, data.annualInvestment);
  }

  protected readonly onsubmit = onsubmit;
}
