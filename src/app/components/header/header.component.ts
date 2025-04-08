import { Component, inject } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterModule],
  providers: [DatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private datePipe = inject(DatePipe);
  
  currentTime$: Observable<string>;
  isMobileMenuOpen = false;

  constructor() {
    this.currentTime$ = interval(1000).pipe(
      map(() => this.datePipe.transform(new Date(), 'HH:mm') || '')
    );
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}