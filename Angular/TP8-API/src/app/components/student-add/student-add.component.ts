import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { Career } from 'src/app/models/career';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  student : Student = new Student();
  studentForm : FormGroup;

  careerList : Array<Career>; // para las carreras del form
  
  constructor(private careerService : CareerService, private studentService : StudentService) { }

  ngOnInit() {
    this.careerService.getAll().then(response =>{
      this.careerList = response;
    }).catch(error =>{
      console.log(error);
    })
  
    this.studentForm = new FormGroup({
      'address' : new FormControl(this.student.address,
        [Validators.required]),
      'dni' : new FormControl(this.student.dni),
      'email' : new FormControl(this.student.email,
        [Validators.required],
        []),
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
    console.log(this.firstName.value);
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
