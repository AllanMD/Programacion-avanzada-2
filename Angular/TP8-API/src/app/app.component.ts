import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService : UserService){}
  
  title = 'TP8-API';
  private logged : boolean;

  ngOnInit(){
    this.userService.isLoggedIn.subscribe( response =>{
      this.logged = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  logout(){
    this.userService.logout();
  }

}
