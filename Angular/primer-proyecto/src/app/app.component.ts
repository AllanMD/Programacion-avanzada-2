import { Component } from '@angular/core';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primer-proyecto';
  saludo = "hola a todos";
  cars = new Array();
  visible = true;

  constructor (){
    let car1 = new Car();
    car1.name = "Duster";
    car1.price = 20;
    let car2 =new Car();
    car2.name = "Ford";
    car2.price = 43;

    this.cars.push(car1);
    this.cars.push(car2);
  }
  
  //compartir datos entre componentes
  carList = new Array<Car>();
  car = new Car(); // para el auto seleccionado

  showSelectedCar(car : Car){
    this.car = car;
    alert("seleccion actualizada")
  }
}
