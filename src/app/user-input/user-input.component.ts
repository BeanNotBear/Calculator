import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  }>();

  initialInvestment: number = 0;
  expectedReturn: number = 0;
  annualInvestment: number = 0;
  duration: number = 0;

  onSubmit() {
    this.calculate
      .emit(
        {
          initialInvestment: +this.initialInvestment,
          expectedReturn: +this.expectedReturn,
          annualInvestment: +this.annualInvestment,
          duration: +this.duration
        }
      )
  }
}
