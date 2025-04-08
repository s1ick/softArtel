import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../task.service';
import { Task } from '../../../../task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnChanges {
  protected readonly pathImages = 'assets/images/';
  readonly buttonTypes = ['red', 'blue', 'green'] as const;

  @Input({ required: true }) taskData!: Task;
  @ViewChild('coordination') coordinationTemplate!: TemplateRef<any>;
  @ViewChild('execution') executionTemplate!: TemplateRef<any>;
  @ViewChild('review') reviewTemplate!: TemplateRef<any>;
  @ViewChild('deployment') deploymentTemplate!: TemplateRef<any>;
  @ViewChild('test') testTemplate!: TemplateRef<any>;
  @ViewChild('done') doneTemplate!: TemplateRef<any>;

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskData']) {
      this.cdr.markForCheck();
    }
  }

  get productIconPath(): string {
    return this.taskData?.productIcon
      ? `${this.pathImages}icons/filters/products/${this.taskData.productIcon}.svg`
      : '';
  }

  get typeProductIconPath(): string {
    return this.taskData?.typeProductIcon
      ? `${this.pathImages}icons/type-products/${this.taskData.typeProductIcon}.svg`
      : '';
  }

  get typeIconPath(): string {
    return this.taskData?.typeIcon
      ? `${this.pathImages}icons/icon-types/${this.taskData.typeIcon}.svg`
      : '';
  }

  get progressClasses(): string[] {
    return [
      this.taskData?.classProgress1,
      this.taskData?.classProgress2,
      this.taskData?.classProgress3,
    ].filter(Boolean);
  }

  getProductTypeText(type?: string): string {
    switch (type) {
      case 'ios':
        return 'iOS';
      case 'android':
        return 'Android';
      case 'backend':
        return 'BackEnd';
      case 'iosload':
        return 'iOS';
      case 'webapp':
        return 'WebApp';
      case 'website':
        return 'WebSite';
      default:
        return 'WebSite';
    }
  }

  getStateTemplate(state: string): TemplateRef<any> {
    return this.taskService.getStateTemplate(state);
  }
  getProductIconPath(icon: string | number | undefined): string {
    if (icon === undefined || icon === null) return '';
    return `${this.pathImages}icons/filters/products/${icon.toString()}.svg`;
  }
}
