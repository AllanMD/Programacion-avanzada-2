import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { CareerService } from 'src/app/services/career.service';
import { Career } from 'src/app/models/career';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: Array<Student>;
  careerList: Array<Career> = new Array<Career>(); // funciona de ambas formas
  career : String; 

  constructor(private studentService: StudentService, private careerService: CareerService) { }

  ngOnInit() {
    // CON OBSERVABLE
    this.studentService.getAll().subscribe(
      response => {
        this.studentList = response;
      },
      error => {
        console.log(error);
      })

    /* CON PROMISES: 
    this.studentService.getAll().then(response => {
      this.studentList = response;
    }).catch(error => {
      console.log(error);
    }) */
  }

  deleteStudent(id){
    this.studentService.deleteById(id).subscribe(response => {
      console.log(response);
      alert("estudiante eliminado!");
      window.location.reload(); // para recargar la pagina despues de borrar, para actualizar la lista
    },error => {
      console.log(error);
    })
  }

  getCareerById(id) { // preguntar al profe por esto
    if (id != null) {
      this.careerService.getById(id).subscribe(response => {
        let career = response.name;
        console.log(career);
        return career;
      }, error => {
        console.log(error);
      })
    }else{
      return "Sin carrera";
    }

  }

}
