import co from '@angular/common/locales/co';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signal-component',
  styleUrl: './signal-component.css',
  templateUrl: './signal-component.html',
})
export class SignalComponent {
  // ============================================
  // 1. Writable Signals
  // ============================================

  // Explicit datatype
  datatype_1_SIGNAL = signal<number | string>(10);

  // Explicit WritableSignal type
  datatype_2_SIGNAL: WritableSignal<number | string> = signal<number | string>(10);

  // Type inferred automatically
  datatype_3_SIGNAL: WritableSignal<number | string> = signal(10);

  // ============================================
  // 2. Computed Signal
  // ============================================

  // Computed signals are readonly :: data changes based on signals and pre depandency not manually
  computed_1_SIGNAL: Signal<number> = computed(() => 2901);

  // ============================================
  // 3. Signal vs Normal Variable
  // ============================================

  cntSignal = signal(15);
  cntNormal = 20;

  constructor() {
    effect(() => {
      // console.log(`Signal: ${this.cntSignal()}`);  // // // run every time the signal value changes
      console.log(`Normal: ${this.cntNormal}`); // // // run once when component is created or page is refreshed
    });
  }

  handleChange(value: string) {
    if (value == 'inc') {
      this.cntSignal.update((v) => v + 1); // ***if datatype is num and string then its can not work
      // this.cntSignal.set(this.cntSignal() + 1);
      this.cntNormal++;
    } else if (value == 'dec') {
      this.cntSignal.update((v) => v - 1);
      // this.cntSignal.set(this.cntSignal() - 1);
      this.cntNormal--;
    }
  }
}
