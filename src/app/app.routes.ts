import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'book-us',
    loadComponent: () =>
      import('./pages/book-us/book-us.component').then(
        (m) => m.BookUsComponent
      ),
  },
];
