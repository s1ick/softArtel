import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AgreedComponent } from "../../pages/agreed/agreed/agreed.component";
import { RewiewComponent } from "../../pages/review/rewiew/rewiew.component";
import { ForworkComponent } from "../../pages/forwork/forwork/forwork.component";
import { DraftComponent } from "../../pages/draft/draft/draft.component";
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-tabs',
  imports: [MatTabsModule, AgreedComponent, RewiewComponent, ForworkComponent, DraftComponent, NgScrollbarModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

}
