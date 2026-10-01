import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgFor, NgIf],
  selector: 'app-ngfor-component',
  styleUrl: './ngfor-component.css',
  templateUrl: './ngfor-component.html',
})
export class NgforComponent {
  students = [
    {
      id: 1,
      name: 'Satya',
      subjects: ['C++', 'Angular', 'JavaScript'],
    },
    {
      id: 2,
      name: 'Rahul',
      subjects: ['Java', 'React', 'Python'],
    },
    {
      id: 3,
      name: 'Amit',
      subjects: ['C++', 'Node.js', 'MySQL'],
    },
  ];

  handleDelete(id: number) {
    this.students = this.students.filter((student) => student.id !== id);
  }
}
