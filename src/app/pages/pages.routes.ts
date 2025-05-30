import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products-management/products-managment.routes').then(
        (routes) => routes.routes
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users-management/user-managment.routes').then(
        (routes) => routes.USERS_ROUTES
      ),
  },
];
