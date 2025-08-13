import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestmentResultsComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '';
  annualInvestment = '';
  expectedReturn = '';
  duration = '';

  calculated = false;
  private investmentService = inject(InvestmentService)
  
  onSubmit() {
    this.calculated = true;

    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    })
  }
}
