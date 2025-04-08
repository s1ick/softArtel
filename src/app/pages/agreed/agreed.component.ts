import {
  Component,
  ViewChild,
  ElementRef,
  inject,
  ChangeDetectionStrategy,
  AfterViewInit
} from '@angular/core';
import { TaskService } from '@services/task.service';
import { TaskComponent } from '@components/task/task.component';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-agreed',
  standalone: true,
  imports: [TaskComponent, CommonModule, NgScrollbarModule],
  templateUrl: './agreed.component.html',
  styleUrls: ['./agreed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgreedComponent implements AfterViewInit {
  private readonly taskService = inject(TaskService);
  protected readonly pathImages = 'assets/images/';
  protected isExpanded = true; // Изменено на true
  protected readonly maxVisibleTasks = 7;

  @ViewChild('content') private contentRef?: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.updateContentHeight();
  }

  get tasks() {
    return this.taskService.tasks ?? [];
  }

  get visibleTasks() {
    return this.tasks.slice(0, this.maxVisibleTasks);
  }

  getStateTemplate(state: string) {
    return this.taskService.getStateTemplate(state);
  }

  togglePanel() {
    this.isExpanded = !this.isExpanded;
    this.updateContentHeight();
  }

  private updateContentHeight() {
    if (!this.contentRef?.nativeElement) return;

    const element = this.contentRef.nativeElement;
    element.style.transition = 'max-height 0.3s ease-out';
    element.style.overflow = 'hidden';
    element.style.maxHeight = this.isExpanded
      ? `${element.scrollHeight}px`
      : '0';
  }
}