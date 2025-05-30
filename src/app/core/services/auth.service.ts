import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private isLoggedInSignal = signal(false);

  public isLoggedIn = this.isLoggedInSignal.asReadonly();

  constructor() {
    this.syncLocalStorage();
  }
  login() {
    this.isLoggedInSignal.set(true);
    this.saveLoggedInStatus();
  }

  logout() {
    this.router.navigate(['/auth/login']);
    window.localStorage.removeItem('isLoggedIn');
  }

  syncLocalStorage() {
    const isLoggedIn = window.localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.isLoggedInSignal.set(true);
    }
  }

  saveLoggedInStatus() {
    window.localStorage.setItem(
      'isLoggedIn',
      this.isLoggedInSignal().toString()
    );
  }
}
