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
    this.studentService.getAll().then(response => {
      this.studentList = response;
    }).catch(error => {
      console.log(error);
    })
  }

  deleteStudent(id){
    this.studentService.deleteById(id).then(response => {
      console.log(response);
      alert("estudiante eliminado!");
      window.location.reload(); // para recargar la pagina despues de borrar, para actualizar la lista
    }).catch(error => {
      console.log(error);
    })
  }

  getCareerById(id) { // preguntar al profe por esto
    if (id != null) {
      this.careerService.getById(id).then(response => {
        let career = response.name;
        console.log(career);
        return career;
      }).catch(error => {
        console.log(error);
      })
    }else{
      return "Sin carrera";
    }

  }

}
