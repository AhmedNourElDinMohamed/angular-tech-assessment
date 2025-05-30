import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public isNavbarOpen = signal(false);

  toggleNavbar() {
    this.isNavbarOpen.update((prev) => !prev);
  }
}
