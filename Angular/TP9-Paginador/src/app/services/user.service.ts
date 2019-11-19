import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://utn2019-avanzada2-tp9.herokuapp.com/"
  token = undefined;
  redirectUrl : string;
  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // para que cada vez q cambie, se envie la info al q este suscrito
  // esto hecho con la ayuda de : https://github.com/loiane/angular-login-hide-navbar/blob/779e6bbfd90d7564827928206a374ef4d6ed9144/angular-login-hide-navbar-layout/src/app/auth/auth.guard.ts

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
    const observable =  this.http.post(this.url + "login", user, httpOptions); // por defecto los retornos http son en observables

    observable.subscribe(response =>{
      this.token = response['jwt'];
      localStorage.setItem('token', this.token); // guarda el token en el almacenamiento local

      this.loggedIn.next(true);
    }, error => {
      
    })

    return observable;
  }

  getToken(){ 
    return localStorage.getItem('token');
  }

  userExists(email : String){
    return this.http.get(this.url + "users/identities?email="+email);
  }
  
  get isLoggedIn(){
    if(this.getToken()){ // si ya hay un token en el local storage,esta logueado
      this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable();
      // devolver observable, para q en el app components ts , para leer cada vez q cambie el estado de logged
  }

  logout(): void {
    this.token = undefined;
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    console.log("logout success");
  }
  

}
