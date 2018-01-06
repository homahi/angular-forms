import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-employee-detail-1',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  name = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
