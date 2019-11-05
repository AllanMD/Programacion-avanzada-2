import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // para hacer llamadas http
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://utn2019-avanzada2-tp8.herokuapp.com/"



  constructor(private http : HttpClient) { }

  signUp(user : User) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      }) 
    };
    return this.http.post(this.url + "sign-up", user, httpOptions);
  }

  login(user : User){
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      }) 
    };
    return this.http.post(this.url + "login", user, httpOptions); // por defecto los retornos http son en observables

  }

  userExists(email : String){
    return this.http.get(this.url + "users/identities?email="+email);
  }

}
