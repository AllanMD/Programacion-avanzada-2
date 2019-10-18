import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductLine } from '../models/product-line';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private productLines = new Array<ProductLine>();
  constructor() { }

  add (product : Product){
    // recorrer el listado, si ya existe el producto en el arreglo, sumarle uno a la cantidad, sino agregarlo al arreglo
    let productL = new ProductLine();
    if(this.productLines.length == 0){
      productL.product = product;
      productL.quantity = 1;
      this.productLines.push(productL);
    }else{
      //recorrer y sumar canitdad +1
    }
  }

  getAll (){
    return this.productLines;
  }
/* 
  deleteById(id : number){
    let found = false;
    let i = 0;
    while (i < this.productLines.length && found == false) {
      if (this.productLines[i].id == id) {
        this.productLines.splice(i, 1); // a partir de la pos i, eliminar 1
        found = true;
        alert("Producto eliminado!");
      }
      i++;
    }
  }
*/
}
