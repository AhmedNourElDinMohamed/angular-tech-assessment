import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, finalize, map, tap, throwError } from 'rxjs';
import {
  CreateProductPayload,
  Product,
} from '../../../core/models/product.model';
import { APIs } from '../../../core/enums/APIs.enum';
import { ENV } from '../../../../envs/env.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  private http = inject(HttpClient);

  product = signal<Product>({} as Product);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  /**
   * Fetches a product by its ID from the API and updates the local state
   * @param id - The ID of the product to fetch
   * @returns Observable of the fetched Product
   */
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${ENV.BASE_URL}${APIs.PRODUCTS}/${id}`).pipe(
      map((product) => {
        this.product.set(product);
        this.loading.set(false);
        return product;
      }),
      catchError((error) => {
        this.error.set(error.message);
        return throwError(() => error);
      })
    );
  }

  /**
   * Updates a product by its ID and updates the local state
   * @param id - The ID of the product to update
   * @param product - The updated product data
   * @returns Observable of the updated Product
   */
  updateProduct(
    id: number,
    product: CreateProductPayload
  ): Observable<Product> {
    return this.http
      .put<Product>(`${ENV.BASE_URL}${APIs.PRODUCTS}/${id}`, product)
      .pipe(
        map((res) => {
          this.product.update((product) => ({ ...product, ...res }));
          return res;
        })
      );
  }
}
