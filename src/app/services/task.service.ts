import { Injectable, signal, TemplateRef } from '@angular/core';
import { tasks } from '@pages/agreed/task-data';
import { Task } from '@models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks = signal<Task[]>(this.processRawTasks(tasks));

  private coordinationTemplate!: TemplateRef<any>;
  private executionTemplate!: TemplateRef<any>;
  private reviewTemplate!: TemplateRef<any>;
  private deploymentTemplate!: TemplateRef<any>;
  private testTemplate!: TemplateRef<any>;
  private doneTemplate!: TemplateRef<any>;

  constructor() {
    this.loadInitialTasks();
  }

  get tasks(): Task[] {
    return this._tasks();
  }

  private processRawTasks(rawTasks: any[]): Task[] {
    return rawTasks.map(task => ({
      ...task,
      productIcon: task.productIcon.toString() 
    }));
  }

  private loadInitialTasks(): void {
    this._tasks.set(this.processRawTasks(tasks));
  }

  public setTasks(rawTasks: any[]): void {
    this._tasks.set(this.processRawTasks(rawTasks));
  }

  public getStateTemplate(state: string): TemplateRef<any> {
    const templates = {
      coordination: this.coordinationTemplate,
      execution: this.executionTemplate,
      review: this.reviewTemplate,
      deployment: this.deploymentTemplate,
      test: this.testTemplate,
      done: this.doneTemplate
    };

    return templates[state as keyof typeof templates] || this.coordinationTemplate;
  }

  public setTemplates(templates: {
    coordinationTemplate: TemplateRef<any>;
    executionTemplate: TemplateRef<any>;
    reviewTemplate: TemplateRef<any>;
    deploymentTemplate: TemplateRef<any>;
    testTemplate: TemplateRef<any>;
    doneTemplate: TemplateRef<any>;
  }): void {
    this.coordinationTemplate = templates.coordinationTemplate;
    this.executionTemplate = templates.executionTemplate;
    this.reviewTemplate = templates.reviewTemplate;
    this.deploymentTemplate = templates.deploymentTemplate;
    this.testTemplate = templates.testTemplate;
    this.doneTemplate = templates.doneTemplate;
  }
}