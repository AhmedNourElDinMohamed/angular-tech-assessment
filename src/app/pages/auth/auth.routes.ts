import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => LoginComponent,
  },
  {
    path: 'register',
    loadComponent: () => RegisterComponent,
  },
  {
    path: 'forgot-password',
    loadComponent: () => ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    loadComponent: () => ResetPasswordComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
