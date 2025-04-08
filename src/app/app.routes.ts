import { Routes } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { IteraciiComponent } from './pages/iteracii/iteracii.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    data: { animation: 'HomePage' } 
  },
  { 
    path: 'projects', 
    component: ProjectsComponent,
    data: { animation: 'ProjectsPage' } 
  },
  { 
    path: 'team', 
    component: TeamComponent,
    data: { animation: 'TeamPage' } 
  },
  { 
    path: 'kanban', 
    component: KanbanComponent,
    data: { animation: 'KanbanPage' } 
  },
  { 
    path: 'iterations', 
    component: IteraciiComponent,
    data: { animation: 'IterationsPage' } 
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: '404', 
    component: NotFoundComponent,
    data: { animation: 'NotFoundPage' } 
  },
  { path: '**', redirectTo: '/404' } 
];