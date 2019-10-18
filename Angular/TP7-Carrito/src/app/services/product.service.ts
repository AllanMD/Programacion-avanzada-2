import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList = new Array<Product>();
  private productId = 0;

  constructor() { }

  add (product : Product){
    this.productId ++;
    product.id = this.productId;
    this.productList.push(product);
  }

  getAll (){
    return this.productList;
  }

  deleteById(id : number){
    let found = false;
    let i = 0;
    while (i < this.productList.length && found == false) {
      if (this.productList[i].id == id) {
        this.productList.splice(i, 1); // a partir de la pos i, eliminar 1
        found = true;
        alert("Producto eliminado!");
      }
      i++;
    }
  }
}
