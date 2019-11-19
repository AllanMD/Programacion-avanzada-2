import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models/items';
import { ProductService } from 'src/app/services/product.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private productService : ProductService) { }

  items : Items = new Items();
  page : number = 0; // por defecto la primera pagina
  pages: BehaviorSubject<number> = new BehaviorSubject<number>(0); // para que cada vez q cambie, se envie la info al q este suscrito
  size : number = 10; // tamaño de cada pagina, por defecto es 10 por ahora

  ngOnInit() {

    this.productService.getByPageAndSize(this.page, this.size).subscribe(response =>{
      this.items = response;
      console.log(this.items);
      this.pages.next(response.total/this.size); // se setea con "next" para avisar que hubo un cambio a aquellos q esten suscritos
    },
    error=>{
      console.log(error);
    })
  }

  displayPage(page : number){
    this.productService.getByPageAndSize(page, this.size).subscribe(response =>{
      this.items = response;
      this.page = page;
    })
  }
}
