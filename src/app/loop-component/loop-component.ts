import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-loop-component',
  styleUrl: './loop-component.css',
  templateUrl: './loop-component.html',
})
export class LoopComponent {
  users = ['John', 'Jane', 'Bob', 'Alice'];
  students = [
    {
      id: 1,
      name: 'John',
      age: 20,
    },
    {
      id: 2,
      name: 'Jane',
      age: 21,
    },
    {
      id: 3,
      name: 'Bob',
      age: 22,
    },
    {
      id: 4,
      name: 'Alice',
      age: 23,
    },
  ];

  handleDelete(id: number) {
    this.students = this.students.filter((student) => student.id !== id);
  }
}
