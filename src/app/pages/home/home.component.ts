import { Component } from '@angular/core';
import { TopSidebarComponent } from '@app/components/top-sidebar/top-sidebar.component';
import { TabsComponent } from '@app/components/tabs/tabs.component';
import { ProgressPageComponent } from '../progress-page/progress-page.component';
@Component({
  selector: 'app-home',
  imports: [TopSidebarComponent, TabsComponent, ProgressPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
