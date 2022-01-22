import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../repository/product-service.service';
import { Product } from '../repository/product/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.products = this.getAllProduct();
  }

  getAllProduct(): Product[] {
    return this.productService.getAllProduct();
  }
}
