import { Component, inject, signal } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { MessageService } from 'primeng/api';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateProductPayload } from '../../../core/models/product.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-update-product',
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss',
})
export class UpdateProductComponent {
  productDetailsService = inject(ProductDetailsService);
  private messageService = inject(MessageService);
  private modal = inject(NgbActiveModal);
  private FB = inject(FormBuilder);

  product = this.productDetailsService.product;

  isLoading = signal(false);

  form = this.FB.group({
    id: [0, Validators.required],
    title: ['', Validators.required],
    price: [0, Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    category: ['', Validators.required],
  });

  ngOnInit() {
    this.form.patchValue(this.product());
  }

  onSubmit() {
    this.isLoading.set(true);
    const { id } = this.product();
    const product = this.form.value;
    this.productDetailsService
      .updateProduct(id, product as CreateProductPayload)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: () => {
          this.isLoading.set(false);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Product updated successfully',
          });
          this.closeModal();
        },
      });
  }

  closeModal() {
    this.modal.close();
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
