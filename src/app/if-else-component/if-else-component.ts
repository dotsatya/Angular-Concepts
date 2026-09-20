import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-if-else-component',
  styleUrl: './if-else-component.css',
  templateUrl: './if-else-component.html',
})
export class IfElseComponent {
  val: string = '';
  inputVal: string = '';

  handleInput(e: Event) {
    this.inputVal = (e.target as HTMLInputElement).value;
  }

  changeColor() {
    this.val = this.inputVal.trim().toLowerCase();
  }
  handleClick(v: string) {
    this.val = v;
  }
}
