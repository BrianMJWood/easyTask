import { Component, inject, input, InputSignal, output } from '@angular/core';
import { Task } from '../../assets/dummy-tasks';
import { User } from '../../assets/dummy-users';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: InputSignal<Task[]> = input.required<Task[]>();
  user: InputSignal<User> = input.required<User>();
  removeTask = output<Task>();
  noTasksFoundMessage: string = 'No tasks for this user!';
  noUserSelectedMessage: string = 'No user selected!';
  showNewTaskForm: boolean = false;
  appService = inject(AppService);

  addTask() {
    this.showNewTaskForm = true;
  }

  handleCancelNewTask() {
    this.showNewTaskForm = false;
  }

  handleSubmitNewTask(newTask: Task) {
    this.showNewTaskForm = false;
    this.tasks().push(newTask);
    this.appService.addTask(newTask);
  }
}
