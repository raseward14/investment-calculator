import { Component, computed, inject } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {

  // constructor(private investmentService: InvestmentService) {}
  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultData;
  // }
  results = computed(() => this.investmentService.resultData());
  // results = this.investmentService.resultData.asReadonly();
}
