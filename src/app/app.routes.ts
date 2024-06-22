import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/').then(m => m.HomePage)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/').then(m => m.ListDetailPage)
  },
  {
    path: 'components',
    loadComponent: () => import('./pages/').then(m => m.ComponentsViewPage)
  }
];
