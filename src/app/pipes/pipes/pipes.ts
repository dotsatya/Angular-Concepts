import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [ CommonModule],
  selector: 'app-pipes',
  styleUrl: './pipes.css',
  templateUrl: './pipes.html',
})
export class Pipes {
  name = 'Angular';
  date =  new Date();
  money = 1019;
}
