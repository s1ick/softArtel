import { Injectable, TemplateRef } from '@angular/core';
import { tasks } from './pages/agreed/agreed/task-data';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = tasks;

  coordinationTemplate!: TemplateRef<any>;
  executionTemplate!: TemplateRef<any>;
  reviewTemplate!: TemplateRef<any>;
  deploymentTemplate!: TemplateRef<any>;
  testTemplate!: TemplateRef<any>;
  doneTemplate!: TemplateRef<any>;

  getStateTemplate(state: string): TemplateRef<any> {
    switch (state) {
      case 'coordination':
        return this.coordinationTemplate;
      case 'execution':
        return this.executionTemplate;
      case 'review':
        return this.reviewTemplate;
      case 'deployment':
        return this.deploymentTemplate;
      case 'test':
        return this.testTemplate;
      case 'done':
        return this.doneTemplate;
      default:
        return this.coordinationTemplate; // Дефолтный шаблон
    }
  }

  setTemplates(templates: {
    coordinationTemplate: TemplateRef<any>;
    executionTemplate: TemplateRef<any>;
    reviewTemplate: TemplateRef<any>;
    deploymentTemplate: TemplateRef<any>;
    testTemplate: TemplateRef<any>;
    doneTemplate: TemplateRef<any>;
  }) {
    this.coordinationTemplate = templates.coordinationTemplate;
    this.executionTemplate = templates.executionTemplate;
    this.reviewTemplate = templates.reviewTemplate;
    this.deploymentTemplate = templates.deploymentTemplate;
    this.testTemplate = templates.testTemplate;
    this.doneTemplate = templates.doneTemplate;
  }
}
