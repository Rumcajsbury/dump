import {
  Component,
  OnInit,
  Signal,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTask, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TasksComponent, TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();

  private tasksService = inject(TasksService);
  isAddingTask = signal<boolean>(false);
  selectedUserTasks = computed(() =>
    this.tasksService.getUserTasks(this.userId())
  );

  handleCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  onAddTask(newTask: NewTask) {
    this.tasksService.addTask(newTask, this.userId());

    this.toggleAddTask();
  }

  toggleAddTask() {
    this.isAddingTask.update((value) => !value);
  }
}
