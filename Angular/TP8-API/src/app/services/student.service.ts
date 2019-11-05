import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // para hacer llamadas http
import { Student } from '../models/student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = "https://utn2019-avanzada2-tp8.herokuapp.com/"


  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.url +"api/students");
  }

  save(student : Student) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.http.post(this.url +"api/students", student, httpOptions);
  }

  deleteById(id) : Observable<any>{
    return this.http.delete(this.url +"api/students/"+id);
  }

  getById(id) : Observable<any>{
    return this.http.get(this.url+"api/students/"+id);
  }
  
  /*para saber si el email existe en la api*/
  emailExists(email : string) : Observable<any>{
    return this.http.get(this.url +"api/students/identities?email=" + email);
    //retorna 204 si el email no existe, sino error si el email ya existe
  }

  /*para saber si el dni existe en la api*/
  dniExists(dni : string) : Observable<any>{
    return this.http.get(this.url +"api/students/identities?dni=" + dni);
  }

  /* CON PROMISES:
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
  } */


}
