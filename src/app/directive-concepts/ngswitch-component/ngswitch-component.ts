import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule],
  selector: 'app-ngswitch-component',
  styleUrl: './ngswitch-component.css',
  templateUrl: './ngswitch-component.html',
})
export class NgswitchComponent {
  age = 18;
  setAge = '';
  handleSetAge() {
    this.age = Number(this.setAge);
    this.setAge = '' ;
  }
}
