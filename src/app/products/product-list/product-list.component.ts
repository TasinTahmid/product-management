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
  productList: Product[] = [];
  productsToDisplay: Product[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  productRangePerPage: number = 5;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    this.updateProductsToDisplay();
  }

  updateProductsToDisplay(): void {
    // let filteredProducts = this.products.filter((product) =>
    //   product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    // );
    const startIndex = (this.currentPage - 1) * this.productRangePerPage;
    const endIndex = startIndex + this.productRangePerPage;

    // const safeProductRange = Math.min(this.productRangePerPage, this.products.length);

    this.productsToDisplay = this.productList.slice(startIndex, endIndex);
  }

  onProductRangeChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newRange = inputElement?.value
      ? parseInt(inputElement.value, 10)
      : this.productRangePerPage;
    this.productRangePerPage = newRange;
    this.currentPage = 1;
    this.updateProductsToDisplay();
  }
  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.updateProductsToDisplay();
  }

  onProductSearch(): void {
    if (this.searchTerm === '') {
      this.updateProductsToDisplay();
      return;
    }

    this.productsToDisplay = this.productList.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get totalPages(): number {
    return Math.ceil(this.productList.length / this.productRangePerPage);
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i);
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

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id);
    this.productList = this.productService.getProducts();
  }
}
