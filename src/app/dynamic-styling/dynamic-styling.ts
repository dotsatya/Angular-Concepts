import { NgIf } from '@angular/common'; // old way now use if else
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule , NgIf],
  selector: 'app-dynamic-styling',
  styleUrl: './dynamic-styling.css',
  templateUrl: './dynamic-styling.html',
})
export class DynamicStyling {
  height = 10;
  userHeight = 0;

  setHeight() {
    if (this.userHeight < 1) {
      alert('Height cannot be less than 1!');
      this.userHeight = 1;
      return;
    }

    this.height = this.userHeight;
  }

  increaseHeight() {
    this.height += 10;
  }

  decreaseHeight() {
    if (this.height <= 1) {
      alert('Height cannot go below 1!');
      return;
    }

    this.height -= 10;

    // Prevent going below 1
    if (this.height < 1) {
      this.height = 1;
    }
  }
}
