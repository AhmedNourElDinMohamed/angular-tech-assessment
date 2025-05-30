import { Component, signal, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { User } from '../../../core/models/user.model';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  private activeModal = inject(NgbActiveModal);
  private FB = inject(FormBuilder);
  protected isLoading = signal(false);
  private messageService = inject(MessageService);
  private usersService = inject(UsersService);

  form = this.FB.group({
    id: [0],
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  /**
   * Handles the submission of the user creation form
   */
  onSubmit() {
    this.isLoading.set(true);

    if (this.form.valid) {
      const user = this.form.value;
      user.id = Math.floor(Math.random() * 1000000);

      this.usersService
        .createUser(user as User)
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'User created successfully',
            });
            this.closeModal();
          },
        });
    }
  }

  closeModal() {
    this.activeModal.close();
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
