import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from '../repository/product-service.service';
import { Product } from '../repository/product/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products!: Product[];
  filterDescription: string = '';
  showPane: boolean = false;
  productsOfFilter!: Product[];
  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.products = this.getAllProduct();
  }

  getAllProduct(): Product[] {
    return this.productService.getAllProduct();
  }

  filterByDescription(event: KeyboardEvent) {
    this.productsOfFilter = [];
    this.filterDescription = (<HTMLInputElement>event.target).value;
    if (this.filterDescription == '') {
      this.showPane = false;
    } else {
      this.showPane = true;
      this.products.forEach((position) => {
        if (position.description?.includes(this.filterDescription)) {
          if (!this.productsOfFilter.length) {
            this.productsOfFilter.push(position);
          } else {
            for (let x = 0; this.productsOfFilter.length; x++) {
              if (position.idProduct == this.productsOfFilter[x].idProduct) {
              }
              this.productsOfFilter.push(position);
              break;
            }
          }
        } else {
        }
      });
    }
  }

  DeleteProduct(idProduct: any) {
    this.productService.deleteProduct(this.products.indexOf(idProduct));
    this.ngOnInit();
  }
}
