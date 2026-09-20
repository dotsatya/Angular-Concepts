import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-addition-component',
  styleUrl: './addition-component.css',
  templateUrl: './addition-component.html',
})

// export class AdditionComponent {
//   num1: number | null = null;
//   num2: number | null = null;
//   result: number | null = null;
//   name : string | null = null ;
//   handleClick() {
//     console.log('clicked');
//     this.result = this.add(this.num1 ?? 0, this.num2 ?? 0);
//   }
//   add(a: number, b: number) {
//     return a + b;
//   }
// }

export class AdditionComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: number | null = null;

  displayNum1: number | null = null;
  displayNum2: number | null = null;

  getNumber1(event: Event) {
    // console.log("value: " + (event.target as HTMLInputElement).value);
    this.num1 = parseInt((event.target as HTMLInputElement).value);
  }

  getNumber2(event: Event) {
    // console.log("value: " + (event.target as HTMLInputElement).value);
    this.num2 = parseInt((event.target as HTMLInputElement).value);
  }

  handleClick(input1: HTMLInputElement, input2: HTMLInputElement) {

    this.displayNum1 = this.num1;
    this.displayNum2 = this.num2 ;

    this.result = this.add(this.num1 ?? 0, this.num2 ?? 0);

    input1.value = '';
    input2.value = '';

  }

  add(a: number, b: number) {
    return a + b;
  }
}
