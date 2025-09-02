import { Component, inject, signal, output } from '@angular/core';
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
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  calculated = false;
  private investmentService = inject(InvestmentService)

  calculate = output<InvestmentInput>();
  
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredAnnualInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    })
    this.enteredAnnualInvestment.set('0');
    this.enteredDuration.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');

    // this.investmentService.calculateInvestmentResults({
    //   initialInvestment: this.enteredInitialInvestment,
    //   annualInvestment: this.enteredAnnualInvestment,
    //   expectedReturn: this.enteredExpectedReturn,
    //   duration: this.enteredDuration
    // })
  }
}
