import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  userForm: FormGroup;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'email': new FormControl(this.user.email,
        [Validators.required, Validators.email],
        [this.emailExists()/*Async Validators */]), // validaciones asincronicas: hay q hacer una solicitud a una fuente externa y en base a ello , validar los datos
      'password': new FormControl(this.user.password,
        [Validators.required, Validators.minLength(4)]) // validaciones sincronicas: no necesitamos consultar ninguna fuente externa
    });
  }

  emailExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> =>
      this.userService.userExists(control.value).pipe(
        map(response => {
          return null
        }),
        catchError(error => { return of({ 'emailExists': { value: control.value } }) })
      );
  }

  signUp() {
    let user = new User();
    user.email = this.email.value;
    user.password = this.password.value;
    this.userService.signUp(user).subscribe(response => {
      alert("Registrado correctamente!")
      window.location.reload(); // para recargar la pagina despues de agregar, para actualizar la lista

    },
      error => {
        console.error(error);

      })
  }
  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }
}
