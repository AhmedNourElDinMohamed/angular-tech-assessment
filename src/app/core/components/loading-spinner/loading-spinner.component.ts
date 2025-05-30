import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  imports: [CommonModule],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent {
  loadingService = inject(LoadingService);

  isLoading = this.loadingService.isLoading;
  message = this.loadingService.message;
}
