import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  userForm : FormGroup;

  constructor() { }

  ngOnInit() {


    this.userForm = new FormGroup({
      'email' : new FormControl(this.user.email,
        [Validators.required]),
      'password' : new FormControl(this.user.password,
      [Validators.required], // validaciones sincronicas: no necesitamos consultar ninguna fuente externa
      [/*Async Validators */]), // validaciones asincronicas: hay q hacer una solicitud a una fuente externa y en base a ello , validar los datos
    });
  }

  get email (){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }

}
