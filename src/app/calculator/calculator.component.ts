import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = "";

  press(value: string) {
    this.display += value;
  }

  clear() {
    this.display = "";
  }

  backspace() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      // percentage handling
      let expression = this.display.replace(/%/g, '/100');

      // evaluate expression
      this.display = eval(expression).toString();
    } catch (error) {
      this.display = "Error";
    }
  }
}
