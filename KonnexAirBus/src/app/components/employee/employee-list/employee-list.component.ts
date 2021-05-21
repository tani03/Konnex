import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  pageTitle:string="Employee List";
  constructor() { }

  ngOnInit(): void {
  }

}
