import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    // Fitness and Health
    {
      name: 'Yoga Mat',
      category: 'Fitness and Health',
      quantity: 10,
      unitPrice: 20.99,
    },
    {
      name: 'Dumbbell Set',
      category: 'Fitness and Health',
      quantity: 5,
      unitPrice: 50.0,
    },
    {
      name: 'Treadmill',
      category: 'Fitness and Health',
      quantity: 2,
      unitPrice: 499.99,
    },
    {
      name: 'Protein Powder',
      category: 'Fitness and Health',
      quantity: 15,
      unitPrice: 29.99,
    },
    {
      name: 'Resistance Bands',
      category: 'Fitness and Health',
      quantity: 20,
      unitPrice: 14.99,
    },

    // Super Food
    {
      name: 'Chia Seeds',
      category: 'Super Food',
      quantity: 30,
      unitPrice: 12.5,
    },
    {
      name: 'Goji Berries',
      category: 'Super Food',
      quantity: 25,
      unitPrice: 18.0,
    },
    { name: 'Quinoa', category: 'Super Food', quantity: 40, unitPrice: 9.99 },
    {
      name: 'Maca Powder',
      category: 'Super Food',
      quantity: 10,
      unitPrice: 24.99,
    },
    {
      name: 'Acai Powder',
      category: 'Super Food',
      quantity: 12,
      unitPrice: 22.5,
    },

    // Beauty and Makeup
    {
      name: 'Lipstick',
      category: 'Beauty and Makeup',
      quantity: 50,
      unitPrice: 15.99,
    },
    {
      name: 'Foundation',
      category: 'Beauty and Makeup',
      quantity: 20,
      unitPrice: 35.0,
    },
    {
      name: 'Mascara',
      category: 'Beauty and Makeup',
      quantity: 30,
      unitPrice: 19.99,
    },
    {
      name: 'Blush',
      category: 'Beauty and Makeup',
      quantity: 40,
      unitPrice: 12.99,
    },
    {
      name: 'Face Cream',
      category: 'Beauty and Makeup',
      quantity: 25,
      unitPrice: 45.0,
    },

    // Accessories
    {
      name: 'Sunglasses',
      category: 'Accessories',
      quantity: 15,
      unitPrice: 75.0,
    },
    {
      name: 'Leather Wallet',
      category: 'Accessories',
      quantity: 20,
      unitPrice: 50.0,
    },
    { name: 'Scarf', category: 'Accessories', quantity: 30, unitPrice: 25.0 },
    {
      name: 'Wristwatch',
      category: 'Accessories',
      quantity: 10,
      unitPrice: 150.0,
    },
    { name: 'Handbag', category: 'Accessories', quantity: 5, unitPrice: 250.0 },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductByName(name: string): Product | undefined {
    return this.products.find((product) => product.name === name);
  }
  getUniqueCategories(): string[] {
    const categories = this.products.map((product) => product.category);
    return Array.from(new Set(categories));
  }
}
