import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{
  
  currentTime$: Observable<string>;

  constructor(private datePipe: DatePipe) {
    this.currentTime$ = interval(1000).pipe(
      map(() => this.datePipe.transform(new Date(), 'HH:mm') || '')
    );
  }
}
