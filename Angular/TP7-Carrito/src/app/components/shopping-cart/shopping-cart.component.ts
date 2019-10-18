import { Component, OnInit } from '@angular/core';
import { ProductLine } from 'src/app/models/product-line';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartList = new Array<ProductLine>();
  constructor(private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
    this.cartList = this.shoppingCartService.getAll();
  }

}
