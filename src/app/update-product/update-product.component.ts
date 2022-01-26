import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  @Input() id!: any;
  @Input() descriptionProduc!: any;
  @Input() codeMaker!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
