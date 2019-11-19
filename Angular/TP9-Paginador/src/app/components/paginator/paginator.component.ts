import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input()
  pages: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  activePage: number = 0; // siempre se empieza desde la primera pagina

  pagesArray: Array<Number> = new Array<Number>(); // para poder iterar en el html

  @Output()
  selectedPageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.pages.subscribe(response => {
      console.log("paginas:" + this.pages.value);
      for (let index = 0; index < response && index < 20; index++) { // limitamos a 20 la cantidad de paginas por ahora, mejorar esto mas adelante
        this.pagesArray[index] = index + 1;
      }
    });

  }

  selectPage(page: number) {
    if (page >= 0 && page <= this.pages.value) { // el paginador esta limitado a 20 paginas, pero si en realidad hay mas disponibles, mediante el "next" vamos a recorrer todas las paginas (superando esas 20) // una vez mejorado el limite de las 20 paginas, sacar este comentario
      this.selectedPageEvent.emit(page);
      this.activePage = page;
    }

  }

}
