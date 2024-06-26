import { Component, inject, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output();

  private tasksService = inject(TasksService);
  enteredTitle = model<string>('');
  enteredSummary = model<string>('');
  enteredDate = model<string>('');

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    const newTask: NewTask = {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
    };

    this.tasksService.addTask(newTask, this.userId());

    this.close.emit();
  }
}
