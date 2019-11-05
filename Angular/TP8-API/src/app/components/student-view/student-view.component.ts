import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Career } from 'src/app/models/career';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  private student: Student;
  private career: Career;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private careerService: CareerService) { }

  ngOnInit() {
    let studentId = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getById(studentId).subscribe(response => {
      this.student = response;

      this.careerService.getById(this.student.careerId).subscribe(response => {
        this.career = response;
      },
        error => {
          console.log(error);
        })
    },
      error => {
        console.log(error);
      });



  }

}
