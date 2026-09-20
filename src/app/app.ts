import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { EventComponent } from './event-component/event-component';
import { AdditionComponent } from './addition-component/addition-component';
import { IfElseComponent } from './if-else-component/if-else-component';
import { SignalComponent } from './signal-component/signal-component';
import { LoopComponent } from './loop-component/loop-component';
import { ComputedSignals } from './computed-signals/computed-signals';

@Component({
  imports: [
    RouterOutlet,
    Counter,
    EventComponent,
    AdditionComponent,
    IfElseComponent,
    SignalComponent,
    LoopComponent,
    ComputedSignals
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // protected readonly title = signal('Woow');
  // name = 'test';
  // getAdd(a: number, b: number) {
  //   return a + b;
  // }
}
