import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService : UserService){}

  title = 'TP9-Paginador';
  private logged : boolean = false;

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
