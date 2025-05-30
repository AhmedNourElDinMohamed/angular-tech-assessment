import { Component, inject, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../core/services/auth.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private messageService = inject(MessageService);
  private router = inject(Router);

  user: { username: string; password: string } = {
    username: '',
    password: '',
  };
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
