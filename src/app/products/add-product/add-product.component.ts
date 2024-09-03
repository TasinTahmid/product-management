import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  categories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getUniqueCategories();
  }
}
