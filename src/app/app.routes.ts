import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AddProductComponent } from './products/add-product/add-product.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductListComponent },
  { path: 'products/new', component: AddProductComponent },
  { path: 'products/:id', component: AddProductComponent },
  //   { path: 'contact', component: ContactComponent },
];
