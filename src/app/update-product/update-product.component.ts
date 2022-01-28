import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServiceService } from '../repository/product-service.service';
import { Product } from '../repository/product/product.model';

@Component({
  selector: 'update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  @Input() id!: any;
  @Input() descriptionProduct!: any;
  @Input() codeMaker!: any;

  product!: Product;
  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.product = new Product();
  }

  updateProduct() {
    this.product.idProduct = this.id;
    this.product.description = this.descriptionProduct;
    this.product.codeMaker = this.codeMaker;
    this.productService.updateProduct(this.product);
    window.location.reload();
  }
}
