import { Component, inject, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private messageService = inject(MessageService);
  private router = inject(Router);
  username = signal('');
  password = signal('');

  /**
   * Handles the submission of the login form
   */
  onSubmit() {
    this.authService.login();
    this.messageService.add({
      severity: 'success',
      summary: 'Welcome User',
      detail: 'Logged in successfully',
    });

    this.router.navigate(['/products']);
  }
}
