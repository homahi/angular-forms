import { departments } from '../employee-model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-employee-detail-1',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employeeForm: FormGroup;
  departments = departments;

  constructor(public fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.employeeForm = this.fb.group({
      id: '',
      phone: ['', Validators.required],
      department: [this.departments[0], Validators.required],
      name: ['', Validators.required],
      email: ''
    });
  }
}
