import se from '@angular/common/locales/se';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-computed-signals',
  styleUrl: './computed-signals.css',
  templateUrl: './computed-signals.html',
})
export class ComputedSignals {
  x = signal(336);
  y = signal(12);
  z = computed(() => this.x() + this.y());

  showValue() {
    console.log(this.z());
  }
  updateValue() {
    this.x.set(this.x() + 14);
    this.showValue();
  }

  // counter
  // show = false;
  show = signal(false);
  cnt = signal(0);

  constructor() {
    effect(() => {
      if (this.cnt() === 2) {
        this.show.set(true);
        setTimeout(() => {
          this.show.set(false);
        }, 2000);
      } else {
        this.show.set(false);
      }
    });
  }

  increase() {
    this.cnt.set(this.cnt() + 1);
  }
}
