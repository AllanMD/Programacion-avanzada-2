import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
// comando : ng generate component components/add-car
export class AddCarComponent implements OnInit {
  @Input()
  carList : Array<Car> = new Array<Car>();
  name : string;
  price : number;

  constructor() { }

  ngOnInit() { // una vez construido el component, se carga esto.
  }

  addCar(){
    let car = new Car ();
    car.name = this.name;
    car.price = this.price;
    this.carList.push(car);
  }

}
