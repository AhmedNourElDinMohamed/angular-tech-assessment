import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => UsersComponent,
  },
];
