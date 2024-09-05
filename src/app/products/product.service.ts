import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private static readonly LOCAL_STORAGE_KEYS = {
    PRODUCT_LIST: 'productList',
    PRODUCT_RANGE_PER_PAGE: 'productRangePerPage',
    CURRENT_PAGE: 'currentPage',
  };

  private products: Product[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loadFromLocalStorage();
  }

  getProducts(): Product[] {
    return this.products;
  }

  getUniqueCategories(): string[] {
    const categories = this.products.map((product) => product.category);
    return Array.from(new Set(categories));
  }

  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(
      (product) => product.id === updatedProduct.id
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.saveToLocalStorage();
    }
  }

  addProduct(newProduct: Product): void {
    this.products.unshift(newProduct);
    this.saveToLocalStorage();
  }

  deleteProduct(id: string): void {
    this.products = this.products.filter((product) => product.id !== id);
    this.saveToLocalStorage();
  }

  getProductCountByCategory(category: string): number {
    return this.products.filter((product) => product.category === category)
      .length;
  }

  private saveToLocalStorage(): void {
    if (this.isBrowser) {
      localStorage.setItem(
        ProductService.LOCAL_STORAGE_KEYS.PRODUCT_LIST,
        JSON.stringify(this.products)
      );
    }
  }

  private loadFromLocalStorage(): void {
    if (this.isBrowser) {
      const savedProductList = localStorage.getItem(
        ProductService.LOCAL_STORAGE_KEYS.PRODUCT_LIST
      );

      if (savedProductList) {
        this.products = JSON.parse(savedProductList);
      } else {
        this.products = this.defaultProducts();
        this.saveToLocalStorage();
      }
    } else {
      this.products = this.defaultProducts();
    }
  }

  addCategory(newCategory: string): void {
    if (this.isBrowser) {
      const categories = this.getUniqueCategories();
      if (!categories.includes(newCategory)) {
        categories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(categories));
      }
    }
  }
  private defaultProducts(): Product[] {
    return [
      {
        id: 'b4673a8e-2149-4f79-b6c2-658f80b8fecd',
        name: 'Resistance Bands Set',
        category: 'Fitness and Health',
        quantity: 12,
        unitPrice: 18.99,
        description: 'Set of 5 resistance bands for strength training.',
        createdAt: '2024-08-15T10:30:00.168Z',
      },
      {
        id: 'ff483b7f-7235-41bc-b5d2-8482bdfbb2b4',
        name: 'Bluetooth Speaker Pro',
        category: 'Electronics',
        quantity: 25,
        unitPrice: 75.49,
        description: 'Portable Bluetooth speaker with premium sound.',
        createdAt: '2024-09-01T08:45:00.168Z',
      },
      {
        id: '83d123f4-1b12-46f5-a31a-8fbcbe7d9a5f',
        name: 'Treadmill Max',
        category: 'Fitness and Health',
        quantity: 4,
        unitPrice: 499.99,
        description: 'Advanced treadmill for professional workouts.',
        createdAt: '2024-07-25T09:15:00.168Z',
      },
      {
        id: '2c6240d2-c8a9-4932-833d-7c715f4d6c57',
        name: 'Wireless Headphones XL',
        category: 'Electronics',
        quantity: 18,
        unitPrice: 149.99,
        description: 'Noise-cancelling wireless headphones for music lovers.',
        createdAt: '2024-09-02T11:30:00.168Z',
      },
      {
        id: '7a4f33ba-e123-4531-b8e1-9e5b29f9fa17',
        name: 'Yoga Ball',
        category: 'Fitness and Health',
        quantity: 20,
        unitPrice: 29.99,
        description: 'Durable yoga ball for balance exercises.',
        createdAt: '2024-08-18T15:00:00.168Z',
      },
      {
        id: '6a93f9cd-6744-4b7e-826e-647ca5d61cb9',
        name: 'Goji Energy Bars',
        category: 'Super Food',
        quantity: 22,
        unitPrice: 12.99,
        description: 'Organic energy bars with goji berries.',
        createdAt: '2024-08-29T10:20:00.168Z',
      },
      {
        id: 'bc45fa7d-23ba-4f60-91d2-fcf97d3e7bb9',
        name: 'Protein Shaker Bottle',
        category: 'Fitness and Health',
        quantity: 15,
        unitPrice: 10.99,
        description: 'BPA-free shaker bottle for protein drinks.',
        createdAt: '2024-08-12T14:00:00.168Z',
      },
      {
        id: '9b6d8934-0dc9-4575-8d8c-503cb946329f',
        name: 'Smartphone Ultra',
        category: 'Electronics',
        quantity: 10,
        unitPrice: 999.99,
        description: 'Latest smartphone with a stunning display.',
        createdAt: '2024-09-04T13:45:00.168Z',
      },
      {
        id: '4f58a9e8-3624-4510-ae12-2d4d9b91e231',
        name: 'Lip Balm',
        category: 'Beauty and Makeup',
        quantity: 30,
        unitPrice: 8.99,
        description: 'Moisturizing lip balm with natural ingredients.',
        createdAt: '2024-09-01T10:10:00.168Z',
      },
      {
        id: '1b17397c-0155-4a1f-b9bc-66c9e3b4694b',
        name: 'Dumbbell Set Max',
        category: 'Fitness and Health',
        quantity: 6,
        unitPrice: 65.0,
        description: 'Set of dumbbells for full-body workouts.',
        createdAt: '2024-07-29T16:30:00.168Z',
      },
      {
        id: '1f67c5d7-7e8a-4b29-b84b-1b6c0e9c12f3',
        name: 'Organic Quinoa',
        category: 'Super Food',
        quantity: 40,
        unitPrice: 9.99,
        description: 'Nutritious organic quinoa for healthy meals.',
        createdAt: '2024-08-22T09:45:00.168Z',
      },

      {
        id: '6f3483ae-bf7b-4f60-a95c-eed9e4fa12ad',
        name: 'Face Serum',
        category: 'Beauty and Makeup',
        quantity: 12,
        unitPrice: 24.99,
        description: 'Hydrating serum for radiant skin.',
        createdAt: '2024-09-03T15:30:00.168Z',
      },
      {
        id: '1ab12f4a-55d7-4b4c-8e6b-7f98a768b238',
        name: 'Resistance Bands Pro',
        category: 'Fitness and Health',
        quantity: 18,
        unitPrice: 22.99,
        description: 'Premium resistance bands for advanced training.',
        createdAt: '2024-08-02T14:50:00.168Z',
      },
      {
        id: '3b55da9e-ec1e-4f52-b5bb-8d4e23a5e9df',
        name: 'Acai Smoothie Mix',
        category: 'Super Food',
        quantity: 25,
        unitPrice: 15.49,
        description: 'Blend of acai and other superfoods for smoothies.',
        createdAt: '2024-09-01T09:40:00.168Z',
      },

      {
        id: '284bf3e4-c2fc-47bc-8037-eecbb3f1b4a9',
        name: 'Sunscreen SPF 30',
        category: 'Beauty and Makeup',
        quantity: 20,
        unitPrice: 17.99,
        description: 'Broad-spectrum sunscreen with SPF 30.',
        createdAt: '2024-08-31T16:20:00.168Z',
      },
      {
        id: 'ec3f7c68-5453-4b87-a2f7-d2848c6e7fe9',
        name: 'Protein Powder Mix',
        category: 'Fitness and Health',
        quantity: 10,
        unitPrice: 32.99,
        description: 'High-protein powder for muscle recovery.',
        createdAt: '2024-08-14T15:40:00.168Z',
      },
      {
        id: 'aa5b4b6a-4f93-4df9-b569-8429130c783a',
        name: 'Massage Roller',
        category: 'Fitness and Health',
        quantity: 14,
        unitPrice: 18.0,
        description: 'Massage roller for muscle relaxation.',
        createdAt: '2024-07-30T13:50:00.168Z',
      },
      {
        id: '3f65cb34-e4d1-456f-bd4b-7b8bdf456832',
        name: 'Wireless Charger',
        category: 'Electronics',
        quantity: 35,
        unitPrice: 39.99,
        description: 'Fast wireless charger for smartphones.',
        createdAt: '2024-09-04T17:10:00.168Z',
      },
      {
        id: 'bc9f1a7e-154c-4f63-923e-7d6b5c0f4dbd',
        name: 'Jump Rope Speedster',
        category: 'Fitness and Health',
        quantity: 11,
        unitPrice: 12.99,
        description: 'High-speed jump rope for cardio workouts.',
        createdAt: '2024-07-24T11:05:00.168Z',
      },
      {
        id: 'c1ed2b3f-e77d-48ff-a2d4-b8d46fc9bb3a',
        name: 'Yoga Mat Comfort',
        category: 'Fitness and Health',
        quantity: 19,
        unitPrice: 35.99,
        description: 'Thick, non-slip yoga mat for comfortable practice.',
        createdAt: '2024-08-07T09:35:00.168Z',
      },
    ];
  }
}
