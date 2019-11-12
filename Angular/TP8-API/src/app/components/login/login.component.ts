import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  userForm : FormGroup;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {


    this.userForm = new FormGroup({
      'email' : new FormControl(this.user.email, // preguntar esto
        [Validators.required]),
      'password' : new FormControl(this.user.password,
      [Validators.required], // validaciones sincronicas: no necesitamos consultar ninguna fuente externa
      [/*Async Validators */]), // validaciones asincronicas: hay q hacer una solicitud a una fuente externa y en base a ello , validar los datos
    });
  }

  login(){
    let user = new User();
    user.email = this.email.value;
    user.password = this.password.value;

    this.userService.login(user).subscribe(response => {
      if(this.userService.token){
        let redirect = this.userService.redirectUrl ? this.router.parseUrl(this.userService.redirectUrl) : '/students';

        this.router.navigateByUrl(redirect);

        console.log("logueado!");
      }

    }, error =>{
      alert("Usuario o contraseña incorrecta");
      console.log(error);
    })
  }

  get email (){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }

}
