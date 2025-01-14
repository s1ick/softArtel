import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./common-ui/header/header.component";
import { TabsComponent } from "./common-ui/tabs/tabs.component";
import { TopSidebarComponent } from "./common-ui/top-sidebar/top-sidebar.component";
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ProgressPageComponent } from "./pages/progress-page/progress-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TabsComponent, TopSidebarComponent, NgScrollbarModule, ProgressPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
