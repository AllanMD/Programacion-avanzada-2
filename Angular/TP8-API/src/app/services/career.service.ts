import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // para hacer llamadas http

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  private url = "https://utn2019-avanzada2-tp8.herokuapp.com/"


  constructor(private http : HttpClient) { }

  getAll() : Promise<any>{
    //retornar todos
    return this.http.get(this.url +"api/careers").toPromise();
  }

  getById(id) : Promise<any>{
    return this.http.get(this.url +"api/careers/"+id).toPromise();
  }

   /* de ejemplo
  sendRequest(file : ImageSend) : Promise<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.http.post(this.url, file, httpOptions).toPromise();
  }
  */
}
