import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Items } from 'src/app/models/items';
import { Product } from 'src/app/models/product';

@Component({
  selector: '[app-product]', // para insertar de otra forma al componente en la tabla
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product : Product = new Product()

  constructor() { }

  ngOnInit() {
  }

}
