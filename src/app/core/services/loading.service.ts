import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = signal(false);
  message = signal('Loading...');

  /**
   * Shows the loading indicator with a message
   * @param message - The message to display during loading
   */
  show(message: string = 'Loading...'): void {
    this.message.set(message);
    this.isLoading.set(true);
  }

  /**
   * Hides the loading indicator
   */
  hide(): void {
    this.isLoading.set(false);
  }
}
