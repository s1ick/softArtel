import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, DatePipe } from '@angular/common';

interface Product {
  value: string;
  viewValue: string;
  icon: string;
}

interface Task {
  value: string;
  viewValue: string;
  icon: string;
}

@Component({
  selector: 'app-top-sidebar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './top-sidebar.component.html',
  styleUrls: ['./top-sidebar.component.scss'],
  providers: [DatePipe],
})
export class TopSidebarComponent {
  constructor(public datePipe: DatePipe) {}
  imagePath = 'assets/images/icons/filters/';
  today: Date = new Date();
  products: Product[] = [
    { value: 'product1', viewValue: 'Название №1', icon: '1' },
    { value: 'product2', viewValue: 'Название №2', icon: '1' },
    { value: 'product3', viewValue: 'Название №3', icon: '2' },
  ];

  tasks: Task[] = [
    { value: 'general', viewValue: 'Общие', icon: '1' },
    { value: 'development', viewValue: 'Разработка', icon: '2' },
    { value: 'testing', viewValue: 'Тестирование', icon: '3' },
    { value: 'bugs', viewValue: 'Ошибки', icon: '4' },
  ];

  selectedProduct: string = '';
  selectedTask: string = '';
}
