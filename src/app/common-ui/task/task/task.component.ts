import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],  // Импортируем CommonModule
  templateUrl: './task.component.html', // Указываем путь к шаблону
  styleUrl: './task.component.scss'

})
export class TaskComponent {
  pathImages = 'assets/images/';

  @Input() typeIcon = '';
  @Input() stateIcon!: TemplateRef<any>;
  @Input() classProgress1 = '';
  @Input() classProgress2 = '';
  @Input() classProgress3 = '';
  @Input() textTask = '';
  @Input() fio = '';
  @Input() numberTask = '';

  @Input() productIcon!: number;

  @Input() typeProductIcon = '';
  @Input() textProductIcon = '';
  @Input() typeProductText = '';
  @Input() version = '';
  @Input() questionText = '';

  @ViewChild('coordination') coordinationTemplate!: TemplateRef<any>;
  @ViewChild('execution') executionTemplate!: TemplateRef<any>;
  @ViewChild('review') reviewTemplate!: TemplateRef<any>;
  @ViewChild('deployment') deploymentTemplate!: TemplateRef<any>;
  @ViewChild('test') testTemplate!: TemplateRef<any>;
  @ViewChild('done') doneTemplate!: TemplateRef<any>;


}