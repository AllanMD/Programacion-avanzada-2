import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  id : number;
  name : string;
  description : string;
  price : number;
  stock : number;

  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

  addProduct (){
    let product = new Product();
    product.name = this.name;
    product.description = this.description;
    product.price = this.price;
    product.stock = this.stock
  
    this.productService.add(product);
  }

}
