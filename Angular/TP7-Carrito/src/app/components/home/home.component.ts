import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList = new Array<Product>();

  constructor(private productService : ProductService, private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
    this.productList = this.productService.getAll();
  }

  addProductToCart(product : Product){
    this.shoppingCartService.add(product);
  }
}
