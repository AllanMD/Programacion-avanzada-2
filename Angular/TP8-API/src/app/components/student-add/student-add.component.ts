import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { Career } from 'src/app/models/career';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup, FormControl, Validators, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  /* //Sin reactive forms 
  address : string;
  dni : string;
  email : string;
  f_name : string;
  l_name : string;
  careerId : number; */
  

  //con reactive forms
  student : Student = new Student(); // preguntar para que
  studentForm : FormGroup;

  careerList : Array<Career>; // para las carreras del form
  
  constructor(private careerService : CareerService, private studentService : StudentService) { }

  ngOnInit() {

    this.careerService.getAll().subscribe(response =>{
      this.careerList = response;
    },error =>{
      console.log(error);
    })
  
    this.studentForm = new FormGroup({
      'address' : new FormControl(this.student.address,
        [Validators.required]),
      'dni' : new FormControl(this.student.dni,
        [Validators.required],
        [this.dniExists()]),
      'email' : new FormControl(this.student.email,
        [Validators.required],
        [this.emailExists2()]),
      'firstName' : new FormControl(this.student.firstName,
      [Validators.required, Validators.minLength(5)], // validaciones sincronicas: no necesitamos consultar ninguna fuente externa
      [/*Async Validators */]), // validaciones asincronicas: hay q hacer una solicitud a una fuente externa y en base a ello , validar los datos
      'lastName' : new FormControl(this.student.lastName,
        [Validators.required]),
      'careerId' : new FormControl(this.student.careerId,
        [Validators.required])
    });

  }

  get address(){
    return this.studentForm.get('address');
  }
  get dni(){
    return this.studentForm.get('dni');
  }
  get email(){
    return this.studentForm.get('email');
  }
  get firstName(){ // el getter para el html
    return this.studentForm.get('firstName');
  }

  get lastName (){
    return this.studentForm.get('lastName');
  }
  
  get careerId(){
    return this.studentForm.get('careerId');
  }

  addStudent(){
    this.student.firstName = this.firstName.value;
    this.student.lastName = this.lastName.value;
    this.student.address = this.address.value;
    this.student.dni = this.dni.value;
    this.student.email = this.email.value;
    this.student.careerId = this.careerId.value;
    console.log(this.student);
    this.studentService.save(this.student).subscribe(response =>{
      console.log("estudiante agreado!");
      alert("Estudiante agregado!")
      window.location.reload(); // para recargar la pagina despues de agregar, para actualizar la lista
    },
    error => {
      console.log(error);
    })
  }

  emailExists2(): AsyncValidatorFn{
    return (control: AbstractControl) : Observable<any> =>
      this.studentService.emailExists(control.value).pipe( // control value obtiene el valor del input
        map(response => {
          return null
        }),
        catchError(error => { return of({ 'emailExists' : { value : control.value } }) })
      );
  }

   emailExists3(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.studentService.emailExists(control.value).pipe(
        map(response => {
          console.log("asd");
          return response ? null : { emailExists: true };
        },
        error =>{
          console.log("entre");
        }));
    }
  } 

  emailExists(control: AbstractControl){
    return this.studentService.emailExists(control.value).subscribe(
      response => {
        console.log(response);
        return response ? null : { emailTaken: true };
      },
      error => {
        console.log(error);
      }
    )
  }

  dniExists(): AsyncValidatorFn{
    return (control: AbstractControl) : Observable<any> =>
      this.studentService.dniExists(control.value).pipe(
        map(response => {
          return null
        }),
        catchError(error => { return of({ 'dniExists' : { value : control.value } }) })
      );
  }

  
  /* SIN REACTIVE FORMS 
  addStudent(){
    let student = new Student();
    student.address = this.address;
    student.careerId = this.careerId;
    student.dni = this.dni;
    student.email = this.email;
    student.firstName = this.f_name;
    student.lastName = this.l_name;

    this.studentService.save(student).then(response => {
      alert("estudiante agregado correctamente");
      window.location.reload(); // para recargar la pagina despues de borrar, para actualizar la lista
    }).catch(error => {
      console.log(error);
      alert("error al agregar estudiante");
    })

  } */

}
