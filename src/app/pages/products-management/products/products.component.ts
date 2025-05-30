import { Component, inject, DestroyRef } from '@angular/core';
import { ProductListComponent } from '../../../core/components/product-list/product-list.component';
import { ProductsService } from '../services/products.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoadingService } from '../../../core/services/loading.service';
import { finalize } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateProductComponent } from '../create-product/create-product.component';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-products',
  imports: [ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productsService = inject(ProductsService);
  loadingService = inject(LoadingService);
  destroyRef = inject(DestroyRef);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loadingService.show('Loading products...');
    this.productsService
      .getProducts()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loadingService.hide())
      )
      .subscribe();
  }

  openCreateProductModal() {
    this.modalService.open(CreateProductComponent, {
      size: 'lg',
      centered: true,
      scrollable: true,
    });
  }
}
