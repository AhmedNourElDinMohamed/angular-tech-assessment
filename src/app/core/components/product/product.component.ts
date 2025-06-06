import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product = input.required<Product>();

  /**
   * Adds the product to the cart
   */
  addToCart(): void {
    // TODO: Implement add to cart functionality
    console.log('Adding to cart:', this.product());
  }
}
