import { Injectable } from '@angular/core';
import { dummyTasks } from '../assets/dummy-tasks';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getTasks() {
    return JSON.parse(localStorage.getItem('test') || '[]');
  }

  storeTasks() {
    localStorage.setItem('test', JSON.stringify(dummyTasks));
  }

  updateTasks(tasks: any) {
    localStorage.setItem('test', JSON.stringify(tasks));
  }

  removeTask(task: any) {
    const tasks = this.getTasks().filter((t: any) => t.id !== task.id);
    this.updateTasks(tasks);
  }

  addTask(task: any) {
    const tasks = this.getTasks();
    tasks.push(task);
    this.updateTasks(tasks);
  }
}
