import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  filterProducts(): void {
    this.products = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  calculateTotal(product: Product): number {
    return product.quantity * product.unitPrice;
  }

  navigateToNewProduct(): void {
    this.router.navigate(['/products/new']);
  }

  navigateToUpdateProduct(id: string): void {
    this.router.navigate([`/products/${id}`]);
  }

  delelteProduct(id: string): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }
}
