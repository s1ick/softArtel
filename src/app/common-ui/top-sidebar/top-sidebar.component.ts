import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
interface Products {
  value: string;
  viewValue: string
  icon: number;
}
interface Tasks {
  value: string;
  viewValue: string
  icon: number;
}
@Component({
  selector: 'app-top-sidebar',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './top-sidebar.component.html',
  styleUrl: './top-sidebar.component.scss'
})
export class TopSidebarComponent {

  imagePath = 'assets/images/icons/filters/';

  products: Products[] = [
    {value: 'Название №1', viewValue: 'Название №1' , icon: 1},
    {value: 'Название №2', viewValue: 'Название №2', icon: 1},
    {value: 'Название №3', viewValue: 'Название №3', icon: 2},
  ];

  tasks: Tasks[] = [
    {value: 'Общие', viewValue: 'Общие' , icon: 1},
    {value: 'Разработка', viewValue: 'Разработка', icon: 2},
    {value: 'Тестирование', viewValue: 'Тестирование', icon: 3},
    {value: 'Ошибки', viewValue: 'Ошибки', icon: 4},
  ];
}
