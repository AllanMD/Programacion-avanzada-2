import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "https://utn2019-avanzada2-tp9.herokuapp.com/"

  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.url +"api/products?page=0&size=10");
  }

  getByPageAndSize(page : number, size : number) : Observable<any>{
    return this.http.get(this.url +"api/products?page="+page+"+&size="+size);
  }
}
