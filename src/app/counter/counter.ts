import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  value: number = 0;
  increment() {
    this.value++;
  }
  reset() {
    this.value = 0;
  }
  decrement() {
    if (this.value <= 0) {
      alert('cannot decrement below zero');
      return;
    }
    this.value--;
  }
  handleCounter(v:string){
    if (v === 'increment'){
      this.increment();
    }
    if (v === 'reset'){
      this.reset();
    }
    if (v === 'decrement'){
      this.decrement();
    }
  }
}
