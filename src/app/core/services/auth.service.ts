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
  /**
   * Logs in the user by updating the login state and persisting it to localStorage
   */
  login() {
    this.isLoggedInSignal.set(true);
    this.saveLoggedInStatus();
  }

  /**
   * Logs out the user by clearing the login state and redirecting to login page
   */
  logout() {
    this.isLoggedInSignal.set(false);
    this.router.navigate(['/auth/login']);
    window.localStorage.removeItem('isLoggedIn');
  }

  /**
   * Synchronizes the login state with localStorage on service initialization
   */
  syncLocalStorage() {
    const isLoggedIn = window.localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.isLoggedInSignal.set(true);
    }
  }

  /**
   * Persists the current login state to localStorage
   */
  saveLoggedInStatus() {
    window.localStorage.setItem(
      'isLoggedIn',
      this.isLoggedInSignal().toString()
    );
  }
}
