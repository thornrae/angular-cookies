import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Form } from '../form';

// declare function customersPerHour(): void;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  // myScriptElement: HTMLScriptElement;

  // constructor() {
  //   customersPerHour()
  //   this.myScriptElement = document.createElement("script");
  //   this.myScriptElement.src = "src/app/assets/customersPerHour.js"
  //   document.body.appendChild(this.myScriptElement)
  // }

  ngOnInit() {
    this.getStores();
  }
  model = new Form("New City", 0, 0, 0);

  cityList: any[] = [ ];

  hours: any[] = ['store location', '0700', '0800', '0900', '1000', '1100',
                  '1200', '1300', '1400', '1500', '1600', 'Total']

  randomArr: any[] = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(),
                      Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
  
  submitted = false;

  onSubmit(): void  {
    this.submitted = true;
  }

  getStores(): void {

  }

  newCity(value: { location: string;
                   min: number;
                   max: number;
                   average: number; }) {
    console.log(value.location)
    console.log(value.min)
    console.log(value.max)
    console.log(value.average)
    console.log("value is", value)
    this.model = new Form(value.location, value.min, value.max, value.average)
    console.log("model", this.model)
    console.log("city list", this.cityList)
    if (this.model) { this.cityList.push(value) }
  }

  
  
  customersPerHour = (
    min: number, 
    max: number,
  ) => {
    return Math.floor(Math.random() * (max - min +1) + min)
  }
 

  // renderCustomersPerHour = () => {
  //   for(var i=0; i < cityList)
  // }
}
