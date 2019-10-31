import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // para hacer llamadas http
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = "https://utn2019-avanzada2-tp8.herokuapp.com/"


  constructor(private http : HttpClient) { }

  getAll() : Promise<any>{
    return this.http.get(this.url +"api/students").toPromise();
  }

  save(student : Student) : Promise<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.http.post(this.url +"api/students", student, httpOptions).toPromise();
  }

  deleteById(id) : Promise<any>{
    return this.http.delete(this.url +"api/students/"+id).toPromise();
  }
}
