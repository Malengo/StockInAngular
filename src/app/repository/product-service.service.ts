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
  deleteProduct(idProduct: number): void {
    const products = this.getAllProduct();
    products.splice(idProduct, 1);
    localStorage['product'] = JSON.stringify(products);
  }

  updateProduct(product: Product): void {
    localStorage.setItem('product', JSON.stringify(product));
  }
}
