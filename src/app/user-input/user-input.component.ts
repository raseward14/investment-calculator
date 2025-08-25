import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { InvestmentService } from '../investment.service';
import type { InvestmentInput } from '../investment-input.types';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestmentResultsComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  calculated = false;
  private investmentService = inject(InvestmentService)

  @Output() calculate = new EventEmitter<InvestmentInput>();
  
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredAnnualInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    })
    // this.calculated = true;

    // this.investmentService.calculateInvestmentResults({
    //   initialInvestment: this.enteredInitialInvestment,
    //   annualInvestment: this.enteredAnnualInvestment,
    //   expectedReturn: this.enteredExpectedReturn,
    //   duration: this.enteredDuration
    // })
  }
}
