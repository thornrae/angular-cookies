import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  headers = ['store', '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];
 columns = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
  rows = [
    {'store ' : 'Seattle'}
  ]

}