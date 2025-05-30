import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => ProductsComponent,
  },

  {
    path: 'create-product',
    loadComponent: () => CreateProductComponent,
  },
  {
    path: 'edit-product/:product_id',
    loadComponent: () => UpdateProductComponent,
  },
  {
    path: ':product_id',
    loadComponent: () => ProductDetailsComponent,
  },
];
