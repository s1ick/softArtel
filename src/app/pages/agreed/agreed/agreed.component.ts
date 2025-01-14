import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, TemplateRef, ElementRef } from '@angular/core';
import { TaskService } from '../../../task.service';
import { TaskComponent } from '../../../common-ui/task/task/task.component';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-agreed',
  standalone: true,
  imports: [TaskComponent, CommonModule, NgScrollbarModule],
  templateUrl: './agreed.component.html',
  styleUrl: './agreed.component.scss',
})
export class AgreedComponent implements AfterViewInit {
  pathImages = 'assets/images/';
  @ViewChild(TaskComponent) taskComponent!: TaskComponent;
  @ViewChild('content') content!: ElementRef;

  isExpanded = false;

  constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}

  get tasks() {
    return this.taskService.tasks;
  }

  ngAfterViewInit(): void {
    if (this.taskComponent) {
      this.taskService.setTemplates({
        coordinationTemplate: this.taskComponent.coordinationTemplate,
        executionTemplate: this.taskComponent.executionTemplate,
        reviewTemplate: this.taskComponent.reviewTemplate,
        deploymentTemplate: this.taskComponent.deploymentTemplate,
        testTemplate: this.taskComponent.testTemplate,
        doneTemplate: this.taskComponent.doneTemplate,
      });

      this.cdr.detectChanges();
    }
  }

  getStateTemplate(state: string): TemplateRef<any> {
    return this.taskService.getStateTemplate(state);
  }

  togglePanel() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      const contentHeight = this.content.nativeElement.scrollHeight;
      this.content.nativeElement.style.maxHeight = contentHeight + 'px';
    } else {
      this.content.nativeElement.style.maxHeight = '0';
    }
  }
}
