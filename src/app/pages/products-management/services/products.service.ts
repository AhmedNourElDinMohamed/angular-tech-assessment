import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  CreateProductPayload,
  Product,
  ProductResponse,
} from '../../../core/models/product.model';
import { APIs } from '../../../core/enums/APIs.enum';
import { ENV } from '../../../../envs/env.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  private productsData = signal<Product[]>([]);

  public products = this.productsData.asReadonly();

  /**
   * Fetches all products from the API and updates the local state
   * @returns Observable of Product array
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${ENV.BASE_URL}${APIs.PRODUCTS}`).pipe(
      map((res) => {
        this.productsData.set(res);
        return res;
      })
    );
  }

  /**
   * Creates a new product and adds it to the local state
   * @param product - The product data to create
   * @returns Observable of the created Product
   */
  createProduct(product: CreateProductPayload): Observable<Product> {
    return this.http
      .post<Product>(`${ENV.BASE_URL}${APIs.PRODUCTS}`, product)
      .pipe(
        map((res) => {
          this.productsData.update((products) => [
            ...products,
            { ...res, rating: { rate: 0, count: 0 } },
          ]);
          return res;
        })
      );
  }
}
