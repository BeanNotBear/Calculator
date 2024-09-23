import {Component} from '@angular/core';
import {InvestmentService} from "./investment-results/investment.service";

@Component({
  selector: 'app-root',
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

  constructor(private investmentService: InvestmentService) {
  }

  calculateInvestment(data: {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  }) {
    this.items = this.investmentService
      .calculateInvestmentResults(data.initialInvestment,
        data.duration,
        data.expectedReturn,
        data.annualInvestment);
  }
}
