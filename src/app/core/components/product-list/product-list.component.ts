import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../../../pages/products-management/services/products.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productsService = inject(ProductsService);
  destroyRef = inject(DestroyRef);

  products = this.productsService.products;
}
