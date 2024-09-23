import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})
export class InvestmentService {
  public calculateInvestmentResults(initialInvestment: number,
                                    duration: number,
                                    expectedReturn: number,
                                    annualInvestment: number) {
    let annualData: {
      year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number,
    }[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}
