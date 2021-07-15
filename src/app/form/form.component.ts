import { Component } from '@angular/core';

import { Form } from '../form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent {

  model = new Form('New City', 4, 6, 8);

  submitted = false;

  onSubmit() {this.submitted = true}

  newStore() {
    this.model = new Form();
  }
}
