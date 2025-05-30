import { Component, inject, OnInit, DestroyRef, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductDetailsService } from '../services/product-details.service';
import { NgbModal, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NgbRatingModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product_id = input.required<number>();
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private productDetailsService = inject(ProductDetailsService);
  private modalService = inject(NgbModal);

  product = this.productDetailsService.product;
  loading = this.productDetailsService.loading;
  error = this.productDetailsService.error;

  ngOnInit(): void {
    this.loadProduct();
  }

  /**
   * Loads the product details by fetching from the service
   */
  private loadProduct(): void {
    const productId = this.product_id();
    if (!productId || isNaN(Number(productId))) {
      this.error.set('Invalid product ID');
      this.loading.set(false);
      return;
    }

    this.productDetailsService
      .getProductById(Number(productId))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        error: (err) => {
          this.error.set('Failed to load product details');
          this.loading.set(false);
          console.error('Error loading product:', err);
        },
      });
  }

  /**
   * Opens the edit product modal dialog
   */
  openEditProductModal() {
    this.modalService.open(UpdateProductComponent, {
      size: 'lg',
      centered: true,
    });
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  /**
   * Adds the product to the cart
   */
  addToCart(): void {
    // TODO: Implement add to cart functionality
    const product = this.product();
    if (product) {
      console.log('Adding to cart:', product);
      // You can implement cart service here
    }
  }
}
