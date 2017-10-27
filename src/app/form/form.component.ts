import { Component } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'pm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Grzegorz', 'Swierczek', true, 'w2', 'English');

}
