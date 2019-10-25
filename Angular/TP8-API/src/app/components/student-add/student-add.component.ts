import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  address : string;
  dni : number;
  email : string;
  f_name : string;
  l_name : string;
  carrerId : number;
  
  constructor() { }

  ngOnInit() {
  }

  addStudent(){

  }

}
