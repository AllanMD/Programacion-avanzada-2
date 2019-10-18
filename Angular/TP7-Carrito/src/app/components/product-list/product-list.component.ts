import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList : Array<Product> = new Array<Product>();
  
  constructor(private productService : ProductService) { 
  }

  ngOnInit() {
    this.productList = this.productService.getAll();
  }

  deleteProduct(id : number){
    this.productService.deleteById(id);
  }
}
