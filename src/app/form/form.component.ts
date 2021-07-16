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

<<<<<<< HEAD
  hours: any[] = ['store location', '0700', '0800', '0900', '1000', '1100',
                  '1200', '1300', '1400', '1500', '1600', 'Total']

  randomArr: any[] = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(),
                      Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
  
=======
  headers = ['store', '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', 'Total'];
  columns: string[]  = []
  // ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
  rows: any[] = [] // will hold all the rows
  rowsArr: number[] = [] // to collect from form as temp
  total: number = 0
>>>>>>> 5faf532641a0caca58e7edb96a60eb6d28f56bdc
  submitted = false;

  onSubmit(): void  {
    this.submitted = true;
  }

<<<<<<< HEAD
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
=======
  totalSales(min: number, max: number, average: number) {
    console.log(min, max, average)
  }

  newCity(value: { location: string; min: number; max: number; average: number; }) {
    // console.log(value.location); console.log(value.min); console.log(value.max); console.log(value.average)
    // console.log("value is", value)
>>>>>>> 5faf532641a0caca58e7edb96a60eb6d28f56bdc
    this.model = new Form(value.location, value.min, value.max, value.average)
    this.totalSales(value.min, value.max, value.average)
    console.log("model", this.model)
    console.log("city list", this.cityList)
    if (this.model) { this.cityList.push(value) }
    for (let i = 0; i < this.headers.length - 2; i++) {
      this.rowsArr.push(Math.floor(Math.random() * 100 *i))
    }
    this.columns.push(value.location)
    this.total = this.rowsArr.reduce((acc, elem) => elem + acc);
    this.rowsArr.push(this.total)
    this.rows.push(this.rowsArr)
    console.log(this.rows)
    this.rowsArr = []
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
