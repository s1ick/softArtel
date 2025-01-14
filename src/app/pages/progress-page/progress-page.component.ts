import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { TaskService } from '../../task.service';
import { TaskComponent } from '../../common-ui/task/task/task.component';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-progress-page',
  imports: [TaskComponent, CommonModule, NgScrollbarModule],
  templateUrl: './progress-page.component.html',
  styleUrl: './progress-page.component.scss'
})
export class ProgressPageComponent {
  @ViewChild(TaskComponent) taskComponent!: TaskComponent;
  isExpanded = false;
  pathImages = 'assets/images/';

    constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}
      getStateTemplate(state: string): TemplateRef<any> {
        return this.taskService.getStateTemplate(state);
      }
   
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

}
