import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../../services/employee.service";
import { ActivatedRoute }  from "@angular/router"
import { NgForm } from "@angular/forms";
import { Employee } from "../../../models/employee";

/* hola */

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [EmployeeService]
})
export class ListaComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {
    
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      console.log('respuesta',res);
      this.employeeService.employees = res;
    });
  }

}
