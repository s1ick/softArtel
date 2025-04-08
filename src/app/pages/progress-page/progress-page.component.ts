import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TaskService } from '../../task.service';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Task } from '../../../task.model';
import { TaskComponent } from '../../common-ui/task/task/task.component';

@Component({
  selector: 'app-progress-page',
  standalone: true,
  imports: [TaskComponent, CommonModule, NgScrollbarModule],
  templateUrl: './progress-page.component.html',
  styleUrls: ['./progress-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressPageComponent {
  protected readonly taskService = inject(TaskService);
  protected readonly pathImages = 'assets/images/';
  protected readonly TASK_INDEX_IN_PROGRESS = 2; 

  get tasks(): Task[] {
    return this.taskService.tasks;
  }

  get inProgressTask(): Task | null {
    return this.tasks.length > this.TASK_INDEX_IN_PROGRESS 
      ? this.tasks[this.TASK_INDEX_IN_PROGRESS]
      : null;
  }

  getStateTemplate(state: string) {
    return this.taskService.getStateTemplate(state);
  }
}