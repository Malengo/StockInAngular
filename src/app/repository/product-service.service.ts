import { Injectable } from '@angular/core';
import { Product } from './product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}

  getAllProduct(): Product[] {
    const product = localStorage['product'];
    return product ? JSON.parse(product) : [];
  }

  addProduct(product: Product): void {
    const products = this.getAllProduct();
    product.idProduct = Date.now();
    products.push(product);
    localStorage['product'] = JSON.stringify(products);
  }
}
