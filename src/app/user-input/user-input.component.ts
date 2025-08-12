import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '';
  annualInvestment = '';
  expectedReturn = '';
  duration = '';

  onSubmit() {
    console.log({
      "initial-investment": this.initialInvestment,
      "annual-investment": this.annualInvestment,
      "expectedReturn": this.expectedReturn,
      "duration": this.duration
    })
  }
}
