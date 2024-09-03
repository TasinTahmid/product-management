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
  styleUrls: ['./add-product.component.css'], // Corrected typo: 'styleUrl' to 'styleUrls'
})
export class AddProductComponent implements OnInit {
  categories: string[] = [];
  product: Product = {
    id: uuidv4(),
    name: '',
    description: '',
    category: '',
    quantity: 0,
    unitPrice: 0,
    createdAt: new Date().toISOString(), // Default to today's date
  };
  isEditMode = false;

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

  loadProduct(id: string): void {
    const product = this.productService.getProductById(id);
    if (product) {
      this.product = { ...product };
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.productService.updateProduct(this.product);
    } else {
      this.productService.addProduct(this.product);
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
