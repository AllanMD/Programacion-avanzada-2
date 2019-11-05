import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { Career } from 'src/app/models/career';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css']
})
export class CareerListComponent implements OnInit {
  careerList : Array<Career> = new Array<Career>();
  constructor(private careerService : CareerService) { }

  ngOnInit() {
    this.careerService.getAll().subscribe(response =>{
      this.careerList = response;
    },error =>{
      console.log(error);
    })
  }

}
