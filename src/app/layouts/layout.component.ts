import { Component, inject } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { LoadingSpinnerComponent } from '../core/components/loading-spinner/loading-spinner.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-layout',
  imports: [
    FooterComponent,
    NavbarComponent,
    RouterOutlet,
    LoadingSpinnerComponent,
    ToastModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private messageService = inject(MessageService);
}
