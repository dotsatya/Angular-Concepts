import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgIf],
  selector: 'app-ngif-component',
  styleUrl: './ngif-component.css',
  templateUrl: './ngif-component.html',
})
export class NgifComponent {
  show = true;
}
