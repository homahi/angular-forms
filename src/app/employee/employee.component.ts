import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public departments: string[] = [
    'Designer', 'Develop', 'Marketing'
  ];
  public model: EmployeeModel = new EmployeeModel(12, 'Angular', '060-1234-5678', this.departments[1]);
  public submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
