import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // para hacer llamadas http
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  private url = "https://utn2019-avanzada2-tp8.herokuapp.com/"


  constructor(private http : HttpClient) { }

  // CON OBSERVABLES
  getAll() : Observable<any>{
    //retornar todos
    return this.http.get(this.url +"api/careers");
  }

  getById(id) : Observable<any>{
    return this.http.get(this.url +"api/careers/"+id);
  }

  /* CON PROMISE
  getAll() : Promise<any>{
    //retornar todos
    return this.http.get(this.url +"api/careers").toPromise();
  }

  getById(id) : Promise<any>{
    return this.http.get(this.url +"api/careers/"+id).toPromise();
  }
  */


}
