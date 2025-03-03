import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { User } from '../assets/dummy-users';
import { dummyTasks, Task } from '../assets/dummy-tasks';
import { UserListComponent } from './user-list/user-list.component';
import { interval } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserListComponent, TasksComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  tasks: Task[] = new Array<Task>();
  allTasks: Task[] = new Array<Task>();
  title: string = "A task management app that WON'T kidnap and kill you!";
  appService: AppService = inject(AppService);

  user: User = {
    id: '',
    name: '',
    avatar: '',
  };

  ngOnInit(): void {
    this.appService.storeTasks();
    this.tasks = this.appService.getTasks();
  }

  userSelected(user: User) {
    this.tasks = this.appService
      .getTasks()
      .filter((task: any) => task.userId === user.id);
    this.user = user;
  }

  handleRemoveTask(removedTask: Task) {
    this.tasks = this.tasks.filter((task: Task) => removedTask.id !== task.id);
    this.appService.removeTask(removedTask);
  }
}
