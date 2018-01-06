import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../employee-list.service';
import { EmployeeModel } from '../employee-model';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Observable<any>;
  selectedEmployee: EmployeeModel;

  constructor(public employeeListService: EmployeeListService) {
    this.employee = this.employeeListService.list$;
  }

  ngOnInit() {
  }

  getEmployees() {
    this.employeeListService.getList();
  }
  select(employee) {
    this.selectedEmployee = employee;
  }
}
