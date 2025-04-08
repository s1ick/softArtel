import { Injectable, signal, TemplateRef } from '@angular/core';
import { tasks } from './pages/agreed/agreed/task-data';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Удаляем дублирующееся свойство tasks
  private _tasks = signal<Task[]>(this.processRawTasks(tasks));

  // Шаблоны состояний
  private coordinationTemplate!: TemplateRef<any>;
  private executionTemplate!: TemplateRef<any>;
  private reviewTemplate!: TemplateRef<any>;
  private deploymentTemplate!: TemplateRef<any>;
  private testTemplate!: TemplateRef<any>;
  private doneTemplate!: TemplateRef<any>;

  constructor() {
    // Инициализация данных
    this.loadInitialTasks();
  }

  // Геттер для получения задач
  get tasks(): Task[] {
    return this._tasks();
  }

  // Метод для обработки сырых данных
  private processRawTasks(rawTasks: any[]): Task[] {
    return rawTasks.map(task => ({
      ...task,
      productIcon: task.productIcon.toString() // Гарантируем string
    }));
  }

  // Загрузка начальных данных
  private loadInitialTasks(): void {
    this._tasks.set(this.processRawTasks(tasks));
  }

  // Обновление списка задач
  public setTasks(rawTasks: any[]): void {
    this._tasks.set(this.processRawTasks(rawTasks));
  }

  // Получение шаблона по состоянию
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

  // Установка всех шаблонов
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