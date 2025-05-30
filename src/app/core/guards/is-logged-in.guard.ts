import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export const isLoggedInGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const messaageService = inject(MessageService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    messaageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'You must be logged in to access this page',
    });
    router.navigate(['/auth/login']);
    return false;
  }

  return true;
};
