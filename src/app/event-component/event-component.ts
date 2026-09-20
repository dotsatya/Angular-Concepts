import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-component',
  styleUrl: './event-component.css',
  templateUrl: './event-component.html',
})
export class EventComponent {  handleEvent(event: Event) {
    console.log('Function called: ' + event.type);
    console.log(event.target);
    console.log((event.target as Element).className);
    console.log("value: " + (event.target as HTMLInputElement).value);
  }}
