import { Injectable, computed, signal } from '@angular/core';
import { NewTask, Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal<Task[]>([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
    // return computed(() =>
    //   this.tasks().filter((task) => task.userId === userId)
    // );
  }

  addTask(newTask: NewTask, userId: string) {
    const newTaskId = new Date().getTime().toString();
    const task: Task = { ...newTask, id: newTaskId, userId };

    this.tasks.update((value) => [task, ...value]);
  }

  removeTask(taskId: string) {
    this.tasks.update((value) => value.filter((task) => task.id !== taskId));
  }
}
