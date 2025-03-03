import { Component, input, InputSignal, output, Output } from '@angular/core';
import { Task } from '../../../assets/dummy-tasks';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task: InputSignal<Task> = input.required<Task>();
  removeTask = output<Task>();
}
