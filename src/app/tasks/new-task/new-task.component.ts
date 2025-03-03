import { Component, input, InputSignal, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../assets/dummy-tasks';
import { User } from '../../../assets/dummy-users';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent implements OnInit {
  user: InputSignal<User> = input.required<User>();
  cancelNewTask = output();
  submitTask = output<Task>();
  newTask: Task = {
    id: Math.random().toString(),
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
  };
  userId = '';

  ngOnInit(): void {
    this.userId = this.user().id;
  }

  handleSubmitNewTask(task: any) {
    console.log(task);
    this.newTask.userId = this.userId;
    this.submitTask.emit(this.newTask);
  }
}
