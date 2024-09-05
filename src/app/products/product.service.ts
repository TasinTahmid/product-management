import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    // Fitness and Health
    {
      id: '208b4a8d-bb61-4023-b5d6-5ab960cb8a77',
      name: 'Yoga Mat',
      category: 'Fitness and Health',
      quantity: 10,
      unitPrice: 20.99,
      description: 'A comfortable and durable yoga mat.',
      createdAt: '2024-08-03T15:34:19.168Z',
    },
    {
      id: '36e9c342-2b76-43f6-9a6e-1f9c939c1e4f',
      name: 'Dumbbell Set',
      category: 'Fitness and Health',
      quantity: 5,
      unitPrice: 50.0,
      description: 'A set of dumbbells for strength training.',
      createdAt: '2024-08-03T15:45:00.168Z',
    },
    {
      id: '1cbd0b0a-dff7-4c8a-905d-8a176f08a8ad',
      name: 'Treadmill',
      category: 'Fitness and Health',
      quantity: 2,
      unitPrice: 499.99,
      description: 'A high-quality treadmill for home workouts.',
      createdAt: '2024-09-03T16:00:00.168Z',
    },
    {
      id: '7d945c2a-54b8-4f3b-8f5d-d9f4a08e4a9f',
      name: 'Protein Powder',
      category: 'Fitness and Health',
      quantity: 15,
      unitPrice: 29.99,
      description: 'Premium protein powder for muscle recovery.',
      createdAt: '2024-09-03T16:15:00.168Z',
    },
    {
      id: '5d2e4622-46f4-49a6-853a-1ea95f4f27b4',
      name: 'Resistance Bands',
      category: 'Fitness and Health',
      quantity: 20,
      unitPrice: 14.99,
      description: 'Versatile resistance bands for strength training.',
      createdAt: '2024-09-03T16:30:00.168Z',
    },
    {
      id: '208b4a8d-bb61-4023-b5d6-5ab960cb8a77',
      name: 'Yoga Mat',
      category: 'Fitness and Health',
      quantity: 10,
      unitPrice: 20.99,
      description: 'A comfortable and durable yoga mat.',
      createdAt: '2024-08-03T15:34:19.168Z',
    },
    {
      id: '36e9c342-2b76-43f6-9a6e-1f9c939c1e4f',
      name: 'Dumbbell Set',
      category: 'Fitness and Health',
      quantity: 5,
      unitPrice: 50.0,
      description: 'A set of dumbbells for strength training.',
      createdAt: '2024-08-03T15:45:00.168Z',
    },
    {
      id: '1cbd0b0a-dff7-4c8a-905d-8a176f08a8ad',
      name: 'Treadmill',
      category: 'Fitness and Health',
      quantity: 2,
      unitPrice: 499.99,
      description: 'A high-quality treadmill for home workouts.',
      createdAt: '2024-09-03T16:00:00.168Z',
    },
    {
      id: '7d945c2a-54b8-4f3b-8f5d-d9f4a08e4a9f',
      name: 'Protein Powder',
      category: 'Fitness and Health',
      quantity: 15,
      unitPrice: 29.99,
      description: 'Premium protein powder for muscle recovery.',
      createdAt: '2024-09-03T16:15:00.168Z',
    },
    {
      id: '5d2e4622-46f4-49a6-853a-1ea95f4f27b4',
      name: 'Resistance Bands',
      category: 'Fitness and Health',
      quantity: 20,
      unitPrice: 14.99,
      description: 'Versatile resistance bands for strength training.',
      createdAt: '2024-09-03T16:30:00.168Z',
    },

    // Super Food
    {
      id: '7f2b4be8-91d7-4e6e-b9d1-658b1b7e6a47',
      name: 'Chia Seeds',
      category: 'Super Food',
      quantity: 30,
      unitPrice: 12.5,
      description: 'Organic chia seeds packed with nutrients.',
      createdAt: '2024-09-03T16:45:00.168Z',
    },
    {
      id: 'dd4c3a3c-8e68-4db5-9083-bfb7c9f898d3',
      name: 'Goji Berries',
      category: 'Super Food',
      quantity: 25,
      unitPrice: 18.0,
      description: 'Dried goji berries rich in antioxidants.',
      createdAt: '2024-09-03T17:00:00.168Z',
    },
    {
      id: 'af75ab4d-7e4b-4f47-baad-b25134b6b7b3',
      name: 'Quinoa',
      category: 'Super Food',
      quantity: 40,
      unitPrice: 9.99,
      description: 'A healthy and versatile grain.',
      createdAt: '2024-09-03T17:15:00.168Z',
    },
    {
      id: 'aa0d6629-72a4-45d4-a9c1-f8fc7a1f3d02',
      name: 'Maca Powder',
      category: 'Super Food',
      quantity: 10,
      unitPrice: 24.99,
      description: 'Maca powder for energy and vitality.',
      createdAt: '2024-09-03T17:30:00.168Z',
    },
    {
      id: 'b14ddba4-5ff0-4a34-b5cb-77b70b57d5eb',
      name: 'Acai Powder',
      category: 'Super Food',
      quantity: 12,
      unitPrice: 22.5,
      description: 'Acai powder for smoothies and bowls.',
      createdAt: '2024-09-03T17:45:00.168Z',
    },

    // Beauty and Makeup
    {
      id: 'caad7d4c-8e0f-4c11-810d-2d1f5f79ff4a',
      name: 'Lipstick',
      category: 'Beauty and Makeup',
      quantity: 50,
      unitPrice: 15.99,
      description: 'Long-lasting lipstick in various shades.',
      createdAt: '2024-09-03T18:00:00.168Z',
    },
    {
      id: '6b7b191c-6b98-4268-92e0-32d94d7e8a2c',
      name: 'Foundation',
      category: 'Beauty and Makeup',
      quantity: 20,
      unitPrice: 35.0,
      description: 'Full-coverage foundation for all skin types.',
      createdAt: '2024-09-03T18:15:00.168Z',
    },
    {
      id: 'f92510d8-f1ab-42a3-a3f1-e9eac3a1a7c6',
      name: 'Mascara',
      category: 'Beauty and Makeup',
      quantity: 30,
      unitPrice: 19.99,
      description: 'Volumizing mascara for bold lashes.',
      createdAt: '2024-09-03T18:30:00.168Z',
    },

    {
      id: '2aee7b4c-13f5-4f6a-bf63-72e22f1d5e76',
      name: 'Sunscreen',
      category: 'Beauty and Makeup',
      quantity: 25,
      unitPrice: 27.99,
      description: 'Broad-spectrum sunscreen with SPF 50.',
      createdAt: '2024-09-03T18:45:00.168Z',
    },
    {
      id: 'c5c2e0a4-9e74-4d46-b9e6-b5c1dbd21b80',
      name: 'Face Cream',
      category: 'Beauty and Makeup',
      quantity: 15,
      unitPrice: 29.99,
      description: 'Hydrating face cream for all skin types.',
      createdAt: '2024-09-03T19:00:00.168Z',
    },
    {
      id: '4a95e6c2-1e3f-4f7b-bd7b-8d35e2a70ef1',
      name: 'Hand Cream',
      category: 'Beauty and Makeup',
      quantity: 40,
      unitPrice: 12.99,
      description: 'Moisturizing hand cream with vitamin E.',
      createdAt: '2024-09-03T19:15:00.168Z',
    },
    {
      id: 'eb0ec6b2-8dbb-4c45-8e05-5b9bb5869b2e',
      name: 'Hair Serum',
      category: 'Beauty and Makeup',
      quantity: 18,
      unitPrice: 22.5,
      description: 'Nourishing hair serum for shine and strength.',
      createdAt: '2024-09-03T19:30:00.168Z',
    },
    // Electronics
    {
      id: '7f8e1b6e-6d7a-4a71-bd1a-2e3c3d9a7f6d',
      name: 'Wireless Headphones',
      category: 'Electronics',
      quantity: 25,
      unitPrice: 89.99,
      description:
        'Noise-cancelling wireless headphones with superior sound quality.',
      createdAt: '2024-09-03T20:15:00.168Z',
    },
    {
      id: '9e2b8a2e-b7f1-4c5e-8d9f-3b3e5c9a8d7f',
      name: 'Smartphone',
      category: 'Electronics',
      quantity: 15,
      unitPrice: 699.99,
      description:
        'Latest model smartphone with high-resolution camera and fast processor.',
      createdAt: '2024-09-03T20:30:00.168Z',
    },
    {
      id: '3a7d9e8b-c6d8-4f3c-9a7e-4b4c3a1d8f9f',
      name: 'Laptop',
      category: 'Electronics',
      quantity: 10,
      unitPrice: 1299.99,
      description:
        'Lightweight laptop with powerful performance for work and entertainment.',
      createdAt: '2024-09-03T20:45:00.168Z',
    },
    {
      id: '5b8f7a3e-d8c1-4f7b-9a3e-5c5f4b9c8d7f',
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      quantity: 30,
      unitPrice: 59.99,
      description:
        'Portable Bluetooth speaker with rich sound and long battery life.',
      createdAt: '2024-09-03T21:00:00.168Z',
    },
    {
      id: '6c9d8e2b-d7a4-4f8c-9e7b-6d6e5c8b9a7f',
      name: 'Smartwatch',
      category: 'Electronics',
      quantity: 20,
      unitPrice: 199.99,
      description:
        'Feature-rich smartwatch with fitness tracking and notifications.',
      createdAt: '2024-09-03T21:15:00.168Z',
    },
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

  // Get a product by ID
  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  // Update an existing product
  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(
      (product) => product.id === updatedProduct.id
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  // Add a new product
  addProduct(newProduct: Product): void {
    this.products.unshift(newProduct);
  }

  // Delete a product by ID
  deleteProduct(id: string): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  // Get the number of products in a given category
  getProductCountByCategory(category: string): number {
    return this.products.filter((product) => product.category === category)
      .length;
  }
}
