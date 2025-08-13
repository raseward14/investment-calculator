import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({ required: true }) initialInvestment?: string;
  @Input({ required: true }) annualInvestment?: string;
  @Input({ required: true }) expectedReturn?: string;
  @Input({ required: true }) duration?: string;

  private investmentService = inject(InvestmentService)
  
  get calculatedResults() {
    return this.investmentService.returnResults();
  }
}
