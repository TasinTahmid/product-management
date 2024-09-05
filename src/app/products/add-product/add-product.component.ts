import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';
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
    category: '',
    quantity: 0,
    unitPrice: 0,
    createdAt: new Date().toISOString(),
  };
  validationMessage: string = '';

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
    this.selectedCategory = selectElement.value;
    this.isAddingNewCategory = this.selectedCategory === '*add-new*';
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
      this.selectedCategory = product.category; // Ensure category is selected properly
    }
  }

  validateCategory(): boolean {
    if (this.selectedCategory === '*add-new*') {
      // Allow adding a new category
      return true;
    }

    const productCount = this.productService.getProductCountByCategory(
      this.selectedCategory
    );
    if (productCount >= 10) {
      this.validationMessage = `Category "${this.selectedCategory}" already has 10 products.`;
      this.isAddingNewCategory = false;
      return false;
    }
    this.validationMessage = '';
    return true;
  }

  onSubmit(): void {
    if (this.selectedCategory === '*add-new*') {
      this.selectedCategory = this.newCategory;
    }
    if (this.selectedCategory === '' || !this.validateCategory()) {
      // Prevent form submission if the category is invalid or has too many products
      this.validationMessage = 'This field is a required field';
      return;
    }

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
