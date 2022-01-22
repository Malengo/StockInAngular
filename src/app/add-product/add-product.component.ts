import { ProductServiceService } from './../repository/product-service.service';
import { Product } from './../repository/product/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  descriptionProduct: string = '';
  codeMaker: string = '';
  product!: Product;

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.product = new Product();
  }

  addProduct(form: any) {
    this.product.description = form.value.descriptionProduct;
    this.product.codeMaker = form.value.codeMaker;
    this.productService.addProduct(this.product);
    window.location.reload();
  }

  clearCamp() {
    this.descriptionProduct = '';
    this.codeMaker = '';
  }
}
