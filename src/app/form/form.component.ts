import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Form } from '../form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  model = new Form("New City", 0, 0, 0);

  cityList: any[] = [ ];

  hours: any[] = ['0700', '0800', '0900', '1000', '1100',
                  '1200', '1300', '1400', '1500', '1600', 'Total']

  randomArr: any[] = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(),
                      Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]

  submitted = false;

  onSubmit(): void  {
    this.submitted = true;
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
    if (this.model) { this.cityList.push(value) }
  }

}
