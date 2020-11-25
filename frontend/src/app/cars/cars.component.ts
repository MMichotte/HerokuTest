import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carsLoaded = false;
  cars = [];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe((res: any)=>{
      this.cars = res.body.cars;
      this.carsLoaded = true;
    });
  }

}