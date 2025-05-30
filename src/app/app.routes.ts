import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { isLoggedInGuard } from './core/guards/is-logged-in.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./pages/pages.routes').then((routes) => routes.PAGES_ROUTES),
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((routes) => routes.AUTH_ROUTES),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
