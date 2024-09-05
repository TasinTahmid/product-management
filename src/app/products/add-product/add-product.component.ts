import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  categories: string[] = [];
  isEditMode = false;
  selectedCategory: string = '';
  newCategory: string = '';
  isAddingNewCategory: boolean = false;
  product: Product = {
    id: uuidv4(),
    name: '',
    description: '',
    category: this.selectedCategory,
    quantity: 0,
    unitPrice: 0,
    createdAt: new Date().toISOString(),
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.productService.getUniqueCategories();

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.loadProduct(params['id']);
      }
    });
  }

  onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement.value === 'add-new') {
      this.isAddingNewCategory = true;
    } else {
      this.isAddingNewCategory = false;
      this.selectedCategory = selectElement.value;
    }
  }

  addNewCategory() {
    if (this.newCategory.trim()) {
      this.categories.push(this.newCategory);
      this.selectedCategory = this.newCategory;
      this.newCategory = '';
      this.isAddingNewCategory = false;
    }
  }

  loadProduct(id: string): void {
    const product = this.productService.getProductById(id);
    if (product) {
      this.product = { ...product };
    }
  }

  onSubmit(): void {
    const productValue = { ...this.product, category: this.selectedCategory };
    if (this.isEditMode) {
      this.productService.updateProduct(productValue);
    } else {
      this.productService.addProduct(productValue);
    }
    this.navigateToProductList();
  }

  formatDate(date: string): string {
    return date.split('T')[0];
  }
  get formattedCreateDate(): string {
    return this.product.createdAt.split('T')[0];
  }

  set formattedCreateDate(value: string) {
    this.product.createdAt = new Date(value).toISOString();
  }

  navigateToProductList(): void {
    this.router.navigate(['/home']);
  }
}
