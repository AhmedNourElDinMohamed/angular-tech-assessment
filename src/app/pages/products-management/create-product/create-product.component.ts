import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../../core/services/loading.service';
import { ProductsService } from '../services/products.service';
import { CreateProductPayload } from '../../../core/models/product.model';
import { finalize } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  private activeModal = inject(NgbActiveModal);
  private FB = inject(FormBuilder);
  protected isLoading = signal(false);
  private productsService = inject(ProductsService);
  private messageService = inject(MessageService);

  form = this.FB.group({
    id: [0],
    title: ['', [Validators.required]],
    price: [0, [Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
    category: ['', [Validators.required]],
  });

  /**
   * Handles the submission of the product creation form
   */
  onSubmit() {
    this.isLoading.set(true);

    if (this.form.valid) {
      const product = this.form.value;
      product.id = Math.random();

      this.productsService
        .createProduct(product as CreateProductPayload)
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Product created successfully',
            });
            this.closeModal();
          },
        });
    }
  }

  closeModal() {
    this.activeModal.close();
  }

  get title() {
    return this.form.get('title');
  }

  get price() {
    return this.form.get('price');
  }

  get description() {
    return this.form.get('description');
  }

  get image() {
    return this.form.get('image');
  }

  get category() {
    return this.form.get('category');
  }
}
