import { Injectable } from "@angular/core";

import { type InvestmentData, InvestmentReturn } from "./investment-results/investment.types";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    private annualData: InvestmentReturn[] = [];

    returnResults() {
        return this.annualData;
    }

    calculateInvestmentResults(investmentData: InvestmentData) {
        this.annualData = [];
        
        let investmentValue = JSON.parse(investmentData.initialInvestment);

        for (let i = 0; i < JSON.parse(investmentData.duration); i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (JSON.parse(investmentData.expectedReturn) / 100);
            investmentValue += interestEarnedInYear + investmentData.annualInvestment;
            const totalInterest =
                investmentValue - JSON.parse(investmentData.annualInvestment) * year - JSON.parse(investmentData.initialInvestment);
            this.annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: JSON.parse(investmentData.annualInvestment),
                totalInterest: totalInterest,
                totalAmountInvested: JSON.parse(investmentData.initialInvestment + investmentData.annualInvestment) * year,
            });
        }
    }
}